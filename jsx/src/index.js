// babeljs.io/repl : To see transpiled JSX code

import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

function App() {
  // React cannot properly print out bool, null, undefined, arrays, and objects
  // React can evaluates expressions in JSX

  return <h1>{new Date().toLocaleDateString()}</h1>;
}

root.render(<App />);
