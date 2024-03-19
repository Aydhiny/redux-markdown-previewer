// src/redux/actions.js

export const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN';

export const updateMarkdown = (markdown) => ({
  type: UPDATE_MARKDOWN,
  payload: markdown,
});