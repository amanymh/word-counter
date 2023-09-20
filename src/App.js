
import React, { useState } from "react";
import FileUploader from "./FileUploader/FileUploader";
import FileDisplay from "./FileDisplay/FileDisplay";
import WordCounter from "./WordCounter/WordCounter";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import CountWords from "./CountWords/CountWords";

import "./App.css";

function App() {
  const [fileContent, setFileContent] = useState("");
  const [wordCount, setWordCount] = useState({});
  const [error, setError] = useState(null);

  const handleFileUpload = async (file) => {
    try {
      const text = await readFileContent(file);
    
        setFileContent(text);

        const words = CountWords(text);
        setWordCount(words);
        setError(null);
     
      
    } catch (err) {
      console.log("handleFileUpload-error", err)
      setError("Error reading file or counting words.");
    }
    
  };

  const readFileContent = async (file) => {
    
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsText(file);
    });
  };

 const displayFileContent = !!fileContent

  return (
    <div className="container">
      <h1>Word Count Application</h1>
   
      <div className="file-uploader">
      <FileUploader onFileUpload={handleFileUpload} />
      </div>
      {error && <ErrorMessage message={error} />}
      {displayFileContent && <div className="file-diplay-container">
      <div className="file-display">
      <FileDisplay fileContent={fileContent} />
      </div>
      <div className="word-counter">
      <WordCounter wordCount={wordCount} />
      </div>
      </div>}
      
      
    </div>
  );
}

export default App;
