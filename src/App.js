// src/App.js
import React, { useState } from 'react';
import MarkdownPreviewer from './components/MarkdownPreviewer';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...

Here's a link: [link](https://www.freecodecamp.com)

Inline \`code\` has \`back-ticks around\` it.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

- This is a list item

> Block Quotes!

![React Logo w/ Text](https://goo.gl/Umyytc)

**This is bolded text**
`);

  return (
    <div className="App">
      <textarea id="editor" value={markdown} onChange={(e) => setMarkdown(e.target.value)} />
      <MarkdownPreviewer markdown={markdown} />
    </div>
  );
}

export default App;
