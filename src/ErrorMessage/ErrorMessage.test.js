/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

test('ErrorMessage displays error message', () => {
  const errorMessage = 'An error occurred.';
  const { getByText } = render(<ErrorMessage message={errorMessage} />);
  expect(getByText(errorMessage)).toBeInTheDocument();
});
