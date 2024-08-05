// babeljs.io/repl : To see transpiled JSX code

// 1) Import the React and the ReatctDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 5) Show the component on screen
root.render(<App />);
