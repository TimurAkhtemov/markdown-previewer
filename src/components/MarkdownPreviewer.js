// src/components/MarkdownPreviewer.js
import React, {useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import '../App.css';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const PreviewContainer = styled.div.attrs({
  id: "preview" // Add this line
})`
height: ${props => props.expanded ? '95%' : 'auto'};
width: ${props => props.expanded ? '50%' : '100%'};
  min-height: 300px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  overflow:auto;
  background-color: white;
  animation: ${fadeIn} 1s ease-in;

  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 2);
  }
`;



const MarkdownPreviewer = ({ markdown, isExpanded }) => {

  useEffect(() => {
    console.log("MarkdownPreviewer rerendered");
  });
  const components = {
    code({node, inline, className, children, ...props}) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter style={docco} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      )
    }
  }


  return (
    <PreviewContainer expanded={isExpanded}>
      <ReactMarkdown components={components} children={markdown} />
    </PreviewContainer>
  );
};

export default MarkdownPreviewer;
