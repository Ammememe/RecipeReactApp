import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders the header with correct text', () => {
  render(<Header />);
  const headerElement = screen.getByText(/Welcome to Amir's Recipes/i);
  expect(headerElement).toBeInTheDocument();
});
