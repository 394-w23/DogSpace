import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Withou crashing', () => {
  test('Should load training tips', () => {
    render(<App />);
    expect(screen.getByText('Paw-some Training Tips')).toBeDefined();
  });

  test('Load home pages', async () => {
    render(<App />);
    const homeButton = screen.getByText('Home');
    fireEvent.click(homeButton);
    expect(await screen.getByText('no page yet')).toBeDefined();
  });
});
