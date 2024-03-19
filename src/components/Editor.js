// src/components/Editor.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateMarkdown } from '../redux/actions';

const Editor = () => {
  const dispatch = useDispatch();
  const markdown = useSelector((state) => state.markdown);

  const handleChange = (e) => {
    dispatch(updateMarkdown(e.target.value));
  };

  return (
    <textarea
      id="editor"
      className="form-control"
      value={markdown}
      onChange={handleChange}
      placeholder="Type your Markdown here..."
    />
  );
};

export default Editor;
