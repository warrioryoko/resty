import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Controls from './Controls';

describe('Testing the Controls component... does it render the control buttons and url input field?', () => {
  afterEach(() => cleanup());

  it('should render the Controls component', () => {
    const { asFragment } = render(<Controls
      url="https://picsum.photos/200"
      method="GET"
      body=""
      onSubmit={() => { }}
      onChange={() => { }}
    />);

    expect(asFragment()).toMatchSnapshot();
  });
});