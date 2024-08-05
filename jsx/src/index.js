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
  - Props/Properties are similar to attribute on HTML elements, that customizes JSX elements
  - Prop values:
    - String values must be in double quotes ""
    - Number, boolean, lists, object values must be in curly braces {}
    - Props can refer to a variable using curly brace syntax
  - Names/values of HTML elements are slightly different when writing JSX
    1) All prop names follow camelCase
    2) Number attributes use curly braces
    3) Boolean 'true' is the default value, and can be written with just the prop name. 'false' should be written explicitly with curly braces.
    4) The 'class' attribute is written as 'className'
    5) In-line styles are provided as objects
  */

  return <textarea autoFocus={true} />;
}

// 5) Show the component on screen
root.render(<App />);
