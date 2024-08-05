// babeljs.io/repl : To see transpiled JSX code

// 1) Import the React and the ReatctDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App() {
  /*
  - React can interpolate variable values inside curly braces {}
  - React cannot properly print out bool, null, undefined, arrays, and objects
  - React can evaluates expressions in JSX
  - Component Layout typically has code to: 
    1) compute values we want to show in our JSX
    2) returns the content we want this component to show
  */

  const name = 'Samantha';
  const age = 23;

  return (
    <h1>
      Hi, my name is {name} and my age is {age}
    </h1>
  );
}

// 5) Show the component on screen
root.render(<App />);
