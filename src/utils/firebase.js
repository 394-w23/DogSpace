import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import {
  initializeFirestore,
  collection,
  Timestamp,
  addDoc,
  orderBy,
  query,
  onSnapshot,
  connectFirestoreEmulator,
  where
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

// if (!window.EMULATION && import.meta.env.PROD !== true) {
//   connectFirestoreEmulator(db, '127.0.0.1', 8080);

//   window.EMULATION = true;
// }

export async function submitForm(state) {
  try {
    const dogProfileRef = await addDoc(collection(db, 'dogs'), {
      age: state.age,
      birthday: state.dogBirthday,
      breed: state.dogBreed,
      gender: state.dogGender,
      'health issues': state.dogBehavior,
      name: state.dogName
      //todo: tools and training preference, user
    });
    console.log('Document written with ID: ', waitingTimesRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
  return 0;
}

export const useDbData = (collectionName, categories, contentTypes) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const itemsColRef = collection(db, collectionName);
    const dataQuery = query(
      itemsColRef,
      where('category', 'in', categories),
      where('content type', '==', contentTypes)
    );

    const unsubscribe = onSnapshot(
      dataQuery,
      (querySnapshot) => {
        const updatedData = querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
        // var contentTypes = {
        //   "video":  [],
        //   "article": []
        // }
        // Parse data here
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
