// WordCounter.js
import React from "react";
import "./WordCounter.css"

function WordCounter({ wordCount }) {
  return (
    <div className="container-wordCounter">
      <table>
        <thead>
          <tr>
            <th>Word</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(wordCount).map(([word, count], index) => (
            <tr key={index}>
              <td>{word}</td>
              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WordCounter;
