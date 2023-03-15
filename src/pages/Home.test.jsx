import { describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Home } from './Home';
import sinon from 'sinon';
import PersonalDetails from './form/PersonalDetails'
import { AuthProvider } from '../components/AuthContext';

const renderHome = (providerProps) => {
  return render(
    <AuthProvider value={providerProps}>
      <Home />
    </AuthProvider>
  );
};

const renderPerson = (providerProps) => {
  return render(
    <AuthProvider value={providerProps}>
      <ersonalDetails />
    </AuthProvider>
  );
};

describe('<Home />', () => {
  const user = { email: 'user@northwetern.edu' };
  const profile = {
    age: '0',
    email: 'user@northwestern.edu',
    gender: '',
    name: 'Test User'
  };
  const dogProfile = {
    age: '0',
    birthday: '2023-01-01',
    breed: 'breed',
    email: 'user@northwestern.edu',
    gender: '',
    'health issues': ['barking'],
    name: 'Test Dog'
  };

  describe('with a user and profile', () => {
    beforeEach(() => {
      renderHome({ user, profile, dogProfile });
    });

    it('displays category buttons', () => {
      expect(screen.getByText('Barking')).toBeDefined();
      expect(screen.getByText('Pooping')).toBeDefined();
      expect(screen.getByText('Crying')).toBeDefined();
      expect(screen.getByText('Aggression')).toBeDefined();
    });
  });
});


// describe('button', () => {

//   describe('with a user and profile', () => {
//     beforeEach(() => {
//       render(<PersonalDetails />);
//     });

//     it('displays category buttons', () => {
//       expect(screen.getByText('Barking')).toBeDefined();
//     });
//   });
// });
