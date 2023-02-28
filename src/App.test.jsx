import { vi, describe, expect, it, beforeEach } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import * as fireUtils from './utils/firebase';

// const useAuthStateMocked = () => vi.fn();
vi.mock('./utils/firebase', () => ({
  useAuthState: vi.fn(),
  ...fireUtils
}));

describe('<App />', () => {
  describe('with logged in user', () => {
    beforeEach(() => {
      render(<App />);
    });

    it('should load training tips', () => {
      expect(screen.getByText('Paw-some Training Tips')).toBeDefined();
    });

    it('load home page', async () => {
      const homeButton = screen.getByText('Home');
      fireEvent.click(homeButton);
      expect(await screen.getByText('no page yet')).toBeDefined();
    });
  });

  describe('without logged in user', () => {
    beforeEach(() => {
      useAuthStateMocked.mockImplementation(() => [null]);
      render(<App />);
    });

    it('displays sign in page', () => {
      expect(screen.getByText('ZENDOG')).toBeDefined();
    });
  });
});
