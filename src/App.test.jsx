import { vi, describe, expect, it, beforeEach } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { useAuthState, useProfile } from './utils/firebase';

vi.mock('./utils/firebase', async () => {
  const original = await vi.importActual('./utils/firebase');
  return {
    ...original,
    useAuthState: vi.fn(),
    useProfile: vi.fn()
  };
});

describe('<App />', () => {
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

  describe('with logged in user', () => {
    beforeEach(() => {
      useAuthState.mockReturnValue([user]);
      useProfile.mockReturnValueOnce([profile]);
      useProfile.mockReturnValueOnce([dogProfile]);
      render(<App />);
    });

    it('should load training tips', () => {
      expect(screen.getByText('Paw-some Training Tips')).toBeDefined();
    });

    it('display dog name from dog profile', () => {
      expect(screen.getByText('Test Dog')).toBeDefined();
    });

    it('load home page', async () => {
      const homeButton = screen.getByText('Home');
      fireEvent.click(homeButton);
      expect(await screen.getByText('no page yet')).toBeDefined();
    });
  });

  describe('without logged in user', () => {
    beforeEach(() => {
      useAuthState.mockReturnValue([null]);
      useProfile.mockReturnValue([null]);
      render(<App />);
    });

    it('displays sign in page', () => {
      expect(screen.getByText('ZENDOG')).toBeDefined();
    });
  });
});
