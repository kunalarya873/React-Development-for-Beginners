import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createGlobalStyle } from "styled-components";
import ErrorBoundary from './ErrorBoundary'
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }
  body{
    background-color: #323334;
    color: white;
    min-height: 100vh;
  }
`;

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <ErrorBoundary>
    <GlobalStyle />
    <App />
    </ErrorBoundary>
  </StrictMode>,
)
