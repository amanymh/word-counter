// FileUploader.js
import React, { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import './FileUploader.css'
function FileUploader({ onFileUpload }) {
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
   
    if (!file) {
      setError("Please select a file.");
      return;
    }

    if (!file.name.endsWith(".txt")) {
      setError("Invalid file type. Please select a .txt file.");
      return;
    }
    if (file.size === 0) {
      setError("Your File is Empty")
      return;
    }

    setError(null);
    onFileUpload(file);
  };

  return (
    <div>
    
      <input className="upload-input" type="file" accept=".txt" onChange={handleFileChange} />
      {error && <ErrorMessage message={error} />}
    </div>
  );
}

export default FileUploader;
