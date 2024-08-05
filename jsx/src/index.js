// babeljs.io/repl : To see transpiled JSX code

import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

function App() {
  // React cannot properly print out bool, null, undefined, arrays, and objects
  let message = 'Bye there!';
  if (Math.random() > 0.5) {
    message = 'Hello There!';
  }

  return <h1>{message}</h1>;
}

root.render(<App />);
