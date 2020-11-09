import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RESTy from './RESTy';
import { apiFetch } from '../../services/FetchAPI';

jest.mock('../../services/FetchAPI.js');

describe('Testing the container component, RESTy... does it display aghnabble EVERYTHING?', () => {
  it('should make a GET request to the API and display the result', async () => {
    apiFetch.mockResolvedValue({
      '': '',
      '': ''
    });

    render(<RESTy />);

    const button = screen.getByTestId('button');
    await fireEvent.click(button);

    const display = await screen.findByTestId('display');

    expect(display(not.toBeEmptyDOMElement());
  });
});