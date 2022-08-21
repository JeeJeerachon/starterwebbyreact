import { render, screen } from '@testing-library/react';
import App from './App';
import Navbar from './Navbar';

test('renders learn react link', () => {
  render(<App />);
  render(<Navbar/>);
  render(<Footer/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
