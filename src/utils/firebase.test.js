import { vi, describe, expect, it, beforeEach } from 'vitest';
import { submitRating, getPhotoUrl, submitForm } from './firebase';
import { updateDoc, getDocs, doc, collection, addDoc } from 'firebase/firestore';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';

vi.mock('firebase/firestore', async () => {
  const original = await vi.importActual('firebase/firestore');
  return {
    ...original,
    updateDoc: vi.fn(),
    getDocs: vi.fn(),
    addDoc: vi.fn(),
    doc: vi.fn(),
    collection: vi.fn(),
    query: vi.fn()
  };
});

vi.mock('firebase/auth', async () => {
  const original = await vi.importActual('firebase/auth');
  return {
    ...original,
    getAuth: () => {
      return {
        currentUser: {
          email: 'email@gmail.com'
        }
      };
    }
  };
});

vi.mock('firebase/storage', async () => {
  const original = await vi.importActual('firebase/storage');
  return {
    ...original,
    uploadBytesResumable: vi.fn(),
    getStorage: vi.fn(),
    ref: vi.fn(),
    getDownloadURL: vi.fn()
  };
});

describe('firebase.js', () => {
  const mockedRef = { ref: 'ref' };

  describe('submit rating', () => {
    const newRating = 3;
    const currRating = 4.1;
    const currNumOfRatings = 10;
    const src = 'https://www.youtube.com/watch?v=9JgUV6rEZ5Y';

    const expertDoc = { rating: currRating, numOfRatings: currNumOfRatings, expert: 'expert' };
    const expertDocs = [{ data: () => expertDoc, id: '1' }];
    const querySnapshot = { docs: expertDocs };

    beforeEach(async () => {
      updateDoc.mockReturnValue(undefined); //just a mock
      getDocs.mockReturnValue(Promise.resolve(querySnapshot));
      doc.mockReturnValue(mockedRef);
      await submitRating(newRating, currRating, currNumOfRatings, src);
    });

    it('should update average rating', () => {
      expect(updateDoc).toBeCalledWith(mockedRef, { numOfRatings: 11, rating: 4 });
    });
  });

  describe('get photo URL', () => {
    const folder = 'dogs';
    const user = 'brevanmitchell2023@u.northwestern.edu';

    const photoURL = 'download.url.com';

    beforeEach(() => {
      vi.restoreAllMocks();
      getDownloadURL.mockReturnValue(photoURL);
    });

    it('should call ref with correct path', () => {
      getPhotoUrl(folder, user);
      const path = '/' + folder + '/' + user;

      expect(ref).toHaveBeenCalledWith(undefined, path);
    });

    it('should get URL', () => {
      const photo = getPhotoUrl(folder, user);

      expect(photo).toEqual(photoURL);
    });
  });

  describe('submitForm', () => {
    const state = {
      step: 1,
      name: 'John Doe',
      age: '1',
      gender: 'gender',
      userPhoto: 'abc123',
      userPhotoPreviewUrl: null,
      dogName: 'Dog',
      dogPhoto: '123abc',
      dogPhotoPreviewUrl: null,
      dogBreed: { value: 'Breed' },
      dogBirthday: new Date('01/01/2023'),
      dogGender: 'dog gender',
      dogBehavior: ['behaivor'],
      dogToolsAtHome: ['tool'],
      dogTrainingPreference: ['training']
    };
    const email = 'email@gmail.com';

    describe('successfully', () => {
      beforeAll(() => {
        vi.restoreAllMocks();
        collection.mockReturnValue(mockedRef);
        addDoc.mockReturnValue({ id: '1' });
        uploadBytesResumable.mockReturnValue({ on: () => {} });
        submitForm(state);
      });

      it('submits dogProfile', () => {
        const { dogBirthday, dogBreed, dogGender, dogBehavior, dogName } = state;
        const expected = {
          email: email,
          age: 0,
          birthday: dogBirthday,
          breed: dogBreed.value,
          gender: dogGender,
          'health issues': dogBehavior,
          name: dogName
        };
        expect(addDoc).toHaveBeenNthCalledWith(1, mockedRef, expected);
      });

      it('submits userProfile', () => {
        const { age, gender, name } = state;
        const expected = { age, gender, name, email };

        expect(addDoc).toHaveBeenNthCalledWith(2, mockedRef, expected);
      });
    });

    describe('when dogGender is undefined', () => {
      beforeAll(() => {
        vi.restoreAllMocks();
        collection.mockReturnValue(mockedRef);
        addDoc.mockReturnValue({ id: '1' });
        uploadBytesResumable.mockReturnValue({ on: () => {} });
        submitForm({ ...state, dogGender: undefined });
      });

      it('submits dogProfile', () => {
        const { dogBirthday, dogBreed, dogBehavior, dogName } = state;
        const expected = {
          email: email,
          age: 0,
          birthday: dogBirthday,
          breed: dogBreed.value,
          gender: '',
          'health issues': dogBehavior,
          name: dogName
        };
        expect(addDoc).toHaveBeenNthCalledWith(1, mockedRef, expected);
      });
    });
  });
});
