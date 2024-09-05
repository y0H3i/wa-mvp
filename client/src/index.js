import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary'; // Import ErrorBoundary
import './styles/main.css'; // Import the main CSS file

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);
