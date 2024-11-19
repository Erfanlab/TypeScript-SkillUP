import { render, screen } from '@testing-library/react';
import Erfan from './erfanlabbafi';

test('renders learn react link', () => {
  render(<Erfan/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
 