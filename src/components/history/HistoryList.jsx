import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HistoryItem from './HistoryItem';

describe('Testing the HistoryItem component... does it display HTTP methods the user tried?', () => {
  afterEach(() => cleanup());
  it('renders a HistoryItem component from an API call', () => {
    const { asFragment } = render(<HistoryItem
      url='https://picsum.photos/200'
      method='GET'
      body=''
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});