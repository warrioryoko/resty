import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HistoryList from './HistoryList';

describe('Testing the HistoryList component... does it render lists of HTTP requests to an API?', () => {
  afterEach(() => cleanup());

  // Pass an array of request history objects, as the app would expect
  const testArray = [
    { url: 'https://picsum.photos/200', method: 'GET' },
    { url: 'https://picsum.photos/200', method: 'GET' },
    { url: 'futuramaapi.herokuapp.com/api/quotes', method: 'GET' }
  ];

  it('should render a HistoryList component with a request to an API displayed', () => {
    const { asFragment } = render(<HistoryList
      poorlyNamedHistoryAggregate={testArray}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});