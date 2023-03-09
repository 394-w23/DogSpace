import { vi, describe, expect, it, beforeEach} from 'vitest';
import { submitRating, getPhotoUrl } from './firebase';
import { updateDoc, getDocs, doc } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

vi.mock('firebase/firestore', async () => {
    const original = await vi.importActual('firebase/firestore');
    return {
      ...original,
      updateDoc: vi.fn(),
      getDocs: vi.fn(),
      doc: vi.fn()
    };
  });
  
describe('submit rating', () => {
    const newRating = 3;
    const currRating = 4.1;
    const currNumOfRatings = 10;
    const src = "https://www.youtube.com/watch?v=9JgUV6rEZ5Y";

    const expertDoc = { rating: currRating, numOfRatings: currNumOfRatings, expert: 'expert' };
    const expertDocs = [{ data: () => expertDoc, id: '1' }];
    const querySnapshot = { docs: expertDocs };

    const mockedDocRef = { docRef: 'docRef' };

    beforeEach( async () => {
        updateDoc.mockReturnValue(undefined); //just a mock
        getDocs.mockReturnValue(Promise.resolve(querySnapshot));
        doc.mockReturnValue(mockedDocRef);
        await submitRating(newRating, currRating, currNumOfRatings, src);
      });

    it('should update average rating', () => {
        expect(updateDoc).toBeCalledWith(mockedDocRef, { numOfRatings: 11, rating: 4 });
      });
})

/* describe ('get photo URL', () => {
    const folder = "dogs";
    const user = "brevanmitchell2023@u.northwestern.edu";

    const storageRef = ref(storage, `/dogs/brevanmitchell2023@u.northwestern.edu`);
    const photoURL = storageRef.getDownloadURL;
    beforeEach(() => {
        const photo = getPhotoUrl(folder, user);
      });
    
    it('should get URL', () => {
        expect(photo).toEqual(photoURL);
    });


}) */
