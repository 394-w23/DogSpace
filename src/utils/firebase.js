import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  initializeFirestore,
  collection,
  addDoc,
  query,
  onSnapshot,
  where,
  getDocs
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

// if (!window.EMULATION && import.meta.env.PROD !== true) {
//   connectFirestoreEmulator(db, '127.0.0.1', 8080);

//   window.EMULATION = true;
// }

export async function submitForm(state) {
  const { email } = await auth.currentUser;
  console.log(state.dogGender);
  try {
    if (!email) throw Error();
    handlePhotoUpload(state.userPhoto, 'users', email);
    handlePhotoUpload(state.dogPhoto, 'dogs', email);
    const dogProfileRef = await addDoc(collection(db, 'dogs'), {
      owner: email,
      age: state.age,
      birthday: state.dogBirthday,
      breed: state.dogBreed.value,
      gender: state.dogGender,
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

export const handlePhotoUpload = (file, folder, user) => {
  if (!file) {
    alert("Please upload an image first!");
  }
  const storageRef = ref(storage, `/${folder}/${user}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
    "state_changed",
    (err) => console.log(err),
    () => {
      // download url
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        console.log(url);
      });
    }
  );
}

export const getProfile = async (col, email) => {
  const itemsColRef = collection(db, col);
  const dataQuery = query(itemsColRef, where('email', '==', email));
  const querySnapshot = await getDocs(dataQuery);
  return querySnapshot.docs.map((doc) => {
    return doc.data();
  });
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
  console.log(dataQuery);
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


