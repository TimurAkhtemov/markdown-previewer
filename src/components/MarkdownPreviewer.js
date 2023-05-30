// src/components/MarkdownPreviewer.js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import '../App.css';

const MarkdownPreviewer = ({ markdown }) => {
  return (
    <div id="preview">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default MarkdownPreviewer;