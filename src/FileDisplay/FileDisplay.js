
import React from "react";
import './FileDisplay.css';

function FileDisplay({ fileContent }) {
  return (
    <div className="container-fileDisplay">
      {fileContent}
    </div>
  );
}

export default FileDisplay;
