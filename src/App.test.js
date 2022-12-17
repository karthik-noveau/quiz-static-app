import { render, screen,configure } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const element = render( < App / > );
  const linkElement = el.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
