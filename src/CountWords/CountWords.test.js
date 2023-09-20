
import  countWords  from './CountWords'; 

test('countWords should count words correctly', () => {
  const text = 'This is a simple test. This is only a test.';
  const result = countWords(text);
  expect(result).toEqual({
    'this': 2,
    'is': 2,
    'a': 2,
    'simple': 1,
    'test': 2,
    'only': 1,
  });
});
