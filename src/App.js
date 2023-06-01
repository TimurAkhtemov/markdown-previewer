// src/App.js
import React, { useState, useEffect } from 'react';
import MarkdownPreviewer from './components/MarkdownPreviewer';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand, faCompress } from '@fortawesome/free-solid-svg-icons'

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  background: linear-gradient(0deg, #ade5ff 30%, #03adfc 90%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const StyledButton = styled.button`
  color: white;
  background-color: #100e61;
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  font-size: 0.9em;
  width: 50px;
  height: 50px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #03adfc;
  }
`;


const AppContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: ${props => props.expanded ? '100vh' : '90vh'};
  width: ${props => props.expanded ? '100vw' : '80vw'};
background-color: transparent;
font-family: 'Roboto', sans-serif;
animation: ${fadeIn} 2s;
`;

const Editor = styled.textarea.attrs({
  id: "editor" // Add this line
})`
height: ${props => props.expanded ? '100%' : '250px'};
width: ${props => props.expanded ? '50%' : '100%'};
  padding: 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  font-size: 16px;
  line-height: 1.5;
  overflow:auto;
  resize: none;
  animation: ${fadeIn} 1s ease-in;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 2);
  }
`;

const Header = styled.h1`
  color: #333;
  font-size: 2.5em;
  animation: ${fadeIn} 2s;
`;

const SubHeader = styled.h3`
color: #333;
font-size: 2em;
margin: 20px;
animation: ${fadeIn} 2s;
`;

const FullHeightContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  animation: ${fadeIn} 2s;
`;

const FullHeightEditor = styled(Editor)`
height: 100%;
width: 50%; // change from 100% to 50%
box-sizing: border-box;
margin: 0px;
`;




function App() {
  const [markdown, setMarkdown] = useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...

**This is bolded text**

Or _italic_.

Or... wait for it... **_both!_**


Here's a link: [link](https://www.freecodecamp.com)

Inline \`code\` has \`back-ticks around\` it.

Write some Javascript!

\`\`\`javascript
// this is multi-line code:

function greet(name) {
  return \`Hello, \${name}!\`;
}
console.log(greet('World'));
\`\`\`

Or python!

\`\`\`python
# this is multi-line code:

def greet(name):
  return f"Hello , {name}!"

print(greet('World))
\`\`\`

All languages at your disposal!

- This is a list item

> Block Quotes!

Here is an image!

![React Logo](/logo192.png)


`);


  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    console.log("App rerendered");
  });


  const MainView =  (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header>Markdown Previewer</Header>
        <SubHeader>By Timur Akhtemov</SubHeader>
        <StyledButton onClick={() => setExpanded(true)}>
          <FontAwesomeIcon icon={faExpand} />
        </StyledButton>
        <Editor
          value={markdown}
          onChange={(e) => {
            console.log("Editor onChange called");
            setMarkdown(e.target.value);
          }}
        />

        <MarkdownPreviewer markdown={markdown} isExpanded={expanded} />
      </AppContainer>
    </>
  );

  const ExpandedView =  (
    <FullHeightContainer>
      <FullHeightEditor
        id="editor"
        expanded={expanded}
        value={markdown}
        onChange={(e) => {
          console.log("FullHeightEditor onChange called");
          setMarkdown(e.target.value);
        }}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <StyledButton onClick={() => setExpanded(false)}>
          <FontAwesomeIcon icon={faCompress} />
        </StyledButton>
      </div>
      <MarkdownPreviewer markdown={markdown} isExpanded={expanded} />

    </FullHeightContainer>
  );

  return expanded ? ExpandedView: MainView;
}

export default App;

