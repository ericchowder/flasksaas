import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import TestComp from './components/TestComp';
import Header from './components/Header'

const test = true;

ReactDOM.render(
  <React.StrictMode>
    <Header />
    {
      // If test is true, render App component, if false render h1
    }
    {test ? <App /> : <h1>Hello from Index.js</h1>}
    <TestComp />
  </React.StrictMode>,
  document.getElementById('root')
);
