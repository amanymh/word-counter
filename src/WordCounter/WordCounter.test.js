/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import WordCounter from './WordCounter';

test('WordCounter displays word count results', () => {
  const wordCount = {
    'word': 3,
    'the': 2,
    'count': 1,
  };

  const { getByText } = render(<WordCounter wordCount={wordCount} />);

  expect(getByText('word')).toBeInTheDocument();
  expect(getByText('3')).toBeInTheDocument();

  expect(getByText('the')).toBeInTheDocument();
  expect(getByText('2')).toBeInTheDocument();

  expect(getByText('count')).toBeInTheDocument();
  expect(getByText('1')).toBeInTheDocument();
});
