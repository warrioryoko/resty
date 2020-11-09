import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Display from './Display';

describe('Testing the Display component... does it render JSON?', () => {
  afterEach(() => cleanup());

  const testDisplay = {
    'stuff': [
      {
        'idThing': '12345',
        'fish1': 'one fish',
        'fish2': 'two fish',
        'redFish': 'red fish',
        'blueFish': 'blue fish'
      }
    ]
  };

  it('renders the Display component', () => {
    const { asFragment } = render(<Display
      display={testDisplay}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});