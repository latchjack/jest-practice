import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it('app has rendered', () => {
  expect('App').toBe('App');
});

it('div has classname of App', () => {
  expect('<div className="App">').toMatch(/className="App"/);
});