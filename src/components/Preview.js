// src/components/Preview.js

import React from 'react';
import { useSelector } from 'react-redux';
import { marked } from 'marked';

const Preview = () => {
  const markdown = useSelector((state) => state.markdown);

  const getMarkdownText = () => {
    const rawMarkup = marked(markdown, { breaks: true });
    return { __html: rawMarkup };
  };

  return (
    <div id="preview" dangerouslySetInnerHTML={getMarkdownText()} />
  );
};

export default Preview;
