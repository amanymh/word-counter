const CountWords = (text) => {
    
  const cleanedText = text
  .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
  .toLowerCase();


const words = cleanedText.split(/\s+/);


const wordCount = {};


words.forEach((word) => {
  if (wordCount[word]) {
    wordCount[word]++;
  } else {
    wordCount[word] = 1;
  }
});

return wordCount;
  };

  export default CountWords;