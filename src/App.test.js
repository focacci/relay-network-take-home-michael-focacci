import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Page has the proper title', () => {

});

test('Summary is displayed on page', () => {

});

test('Table is displayed on page', () => {

});

test('Table has the correct headers', () => {

});

test('Data is fetched from the API', () => {

});

test('Data is used to populate the table', () => {

});

test('Data is used to correctly update the summary', () => {

});
