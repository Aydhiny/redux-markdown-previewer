// src/redux/reducers.js

import { UPDATE_MARKDOWN } from './actions';

export const initialState = {
  markdown: `# Welcome to my Markdown Previewer
## This is a sub-heading
[This is a link](https://www.example.com)
\`This is inline code\`

\`\`\`
// This is a code block
function greet() {
  return 'Hello!';
}
\`\`\`

- This is a list item
> This is a blockquote

![This is an image](https://via.placeholder.com/150)
**This is bold text**`,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MARKDOWN:
      return {
        ...state,
        markdown: action.payload,
      };
    default:
      return state;
  }
};

// Remove this redundant reducer declaration
/*
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MARKDOWN:
      return {
        ...state,
        markdown: action.payload,
      };
    default:
      return state;
  }
};
*/

export default reducer;
