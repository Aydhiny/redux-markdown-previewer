// src/App.js

import React from 'react';
import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';

function App() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6">
          <h2 className="mb-3">Editor</h2>
          <Editor />
        </div>
        <div className="col-md-6">
          <h2 className="mb-3">Preview</h2>
          <Preview />
        </div>
      </div>
      <p>Made by Ajdin Mehmedović</p>
    </div>
  );
}

export default App;
