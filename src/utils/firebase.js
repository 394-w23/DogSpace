import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import {
  initializeFirestore,
  collection,
  addDoc,
  query,
  onSnapshot,
  where,
  getDocs,
  updateDoc,
  doc
} from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: 'AIzaSyDbjBadrLuZCDW5ICb7DTxc1ouqgyPGkyU',
  authDomain: 'dogspace-d492c.firebaseapp.com',
  projectId: 'dogspace-d492c',
  storageBucket: 'dogspace-d492c.appspot.com',
  messagingSenderId: '511047830676',
  appId: '1:511047830676:web:d88b25122da47fffca3881',
  measurementId: 'G-JKFL66QQ8S'
};

const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true
});
const auth = getAuth(app);
const storage = getStorage(app);
// console.log({ storage });

// if (!window.EMULATION && import.meta.env.PROD !== true) {
//   connectFirestoreEmulator(db, '127.0.0.1', 8080);

//   window.EMULATION = true;
// }

// calculate the age of the dog from the dog's birthday
const calculateAge = (birthday) => {
  const today = new Date();
  const birthDate = new Date(birthday);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export async function submitForm(state) {
  const { email } = await auth.currentUser;
  // console.log(state.dogGender);
  try {
    if (!email) throw Error();
    handlePhotoUpload(state.userPhoto, 'users', email);
    handlePhotoUpload(state.dogPhoto, 'dogs', email);
    const dogProfileRef = await addDoc(collection(db, 'dogs'), {
      email: email,
      age: calculateAge(state.dogBirthday),
      birthday: state.dogBirthday,
      breed: state.dogBreed.value,
      gender: state.dogGender || '',
      'health issues': state.dogBehavior,
      name: state.dogName
      //todo: tools and training preference, user
    });
    const userProfileRef = await addDoc(collection(db, 'users'), {
      age: state.age,
      gender: state.gender,
      name: state.name,
      email: email
      //todo: tools and training preference, user
    });
    console.log('Document written with ID: ', dogProfileRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
  return 0;
}

export const submitRating = async (newRating, currRating, currNumOfRatings, src) => {
  // const myDoc = await collection(db, 'expert content');
  const contentRef = collection(db, 'expert content');
  const contentQuery = query(contentRef, where('url', '==', src));
  const contentQuerySnapshot = await getDocs(contentQuery);
  const myDoc = contentQuerySnapshot.docs.map((docSnapshot) => docSnapshot.id);
  const docRef = doc(db, 'expert content', myDoc[0]);
  const newNumOfRatings = currNumOfRatings + 1;
  const newAvgRating = (currRating * currNumOfRatings + newRating) / newNumOfRatings;
  // console.log('Debug');
  await updateDoc(docRef, {
    rating: newAvgRating,
    numOfRatings: newNumOfRatings
  });

  const myData = contentQuerySnapshot.docs.map((docSnapshot) => docSnapshot.data());
  const trainer = myData[0].expert;
  const allContentQuery = query(contentRef, where('expert', '==', trainer));
  const allContentQuerySnapshot = await getDocs(allContentQuery);
  const allMyData = allContentQuerySnapshot.docs.map((docSnapshot) => docSnapshot.data());
  let totalRating = 0;
  let totalNumOfRatings = 0;
  allMyData.forEach((content) => {
    totalRating += content.rating * content.numOfRatings;
    totalNumOfRatings += content.numOfRatings;
  });
  let averageTrainerRating = totalRating / totalNumOfRatings;

  const trainerRef = collection(db, 'experts');
  const trainerQuery = query(trainerRef, where('name', '==', trainer));
  const trainerQuerySnapshot = await getDocs(trainerQuery);
  const myTrainer = trainerQuerySnapshot.docs.map((docSnapshot) => docSnapshot.id);
  const myTrainerRef = doc(db, 'experts', myTrainer[0]);
  await updateDoc(myTrainerRef, {
    rating: averageTrainerRating
  });
};

export const handlePhotoUpload = (file, folder, user) => {
  if (!file) {
    return;
  }
  const storageRef = ref(storage, `/${folder}/${user}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
    'state_changed',
    (err) => console.log(err),
    () => {
      // download url
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        console.log(url);
      });
    }
  );
};

export const getPhotoUrl = (folder, user) => {
  const storageRef = ref(storage, `/${folder}/${user}`);
  return getDownloadURL(storageRef);
};

export const getProfile = async (col, email) => {
  const itemsColRef = collection(db, col);
  const dataQuery = query(itemsColRef, where('email', '==', email));
  const querySnapshot = await getDocs(dataQuery);
  return querySnapshot.docs.map((doc) => {
    return doc.data();
  });
};

export const useProfile = (col, user) => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    if (!user) return;
    const { email } = user;
    const itemsColRef = collection(db, col);
    const dataQuery = query(itemsColRef, where('email', '==', email));

    const unsubscribe = onSnapshot(
      dataQuery,
      (querySnapshot) => {
        const rawData = querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
        const formattedData = rawData.length === 0 ? null : rawData[0];
        setData(formattedData);
      },
      (e) => {
        console.log(e);
      }
    );
    return unsubscribe;
  }, [col, user]);

  return [data];
};

export const useContentDb = (contentType, categories) => {
  const itemsColRef = collection(db, 'content');
  const dataQuery = query(
    itemsColRef,
    where('content type', '==', contentType),
    where('category', 'in', categories)
  );
  return useDbData(dataQuery);
};

export const useUserDb = (email) => {
  const itemsColRef = collection(db, 'users');
  const dataQuery = query(itemsColRef, where('email', '==', email));
  return useDbData(dataQuery);
};

export const useDbData = (query) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query,
      (querySnapshot) => {
        const updatedData = querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
        setData(updatedData);
        setLoading(false);
      },
      () => {
        setLoading(false);
        setError('Failed to get wait times');
      }
    );
    return unsubscribe;
  }, []);

  return [data, error, loading];
};

export const signInWithGoogle = () => {
  signInWithPopup(auth, new GoogleAuthProvider());
};

export const useAuthState = () => {
  const [user, setUser] = useState();

  useEffect(() => onAuthStateChanged(auth, setUser), []);

  return [user];
};

export const useExpertDb = () => {
  const itemsColRef = collection(db, 'experts');
  const dataQuery = query(itemsColRef);
  return useDbData(dataQuery);
};

export const useExpertContentDb = (expert) => {
  const itemsColRef = collection(db, 'expert content');
  const dataQuery = query(itemsColRef, where('expert', '==', expert));
  return useDbData(dataQuery);
};
