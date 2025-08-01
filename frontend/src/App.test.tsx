import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Component', () => {
  test('renders home page by default', () => {
    render(<App />);
    expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
  });

  test('renders within Layout component', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  test('navigation works correctly', async () => {
    render(<App />);
    const user = userEvent.setup();
    const homeLink = screen.getByText(/Home Page/i);
    await user.click(homeLink);
    expect(window.location.pathname).toBe('/');
  });
});