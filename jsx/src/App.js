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
      1) All prop names follow camelCase (of their HTML/CSS counterpart)
      2) Number attributes use curly braces (vs. string in HTML)
      3) Boolean 'true' is the default value, and can be written with just the prop name. 'false' should be assigned explicitly with curly braces.
      4) The 'class' attribute is written as 'className' (since JS has class keyword)
      5) In-line styles are provided as objects to "style" prop
    */

  return (
    <input
      spellCheck
      style={{
        border: '1px solid blue',
        textDecoration: 'none',
        paddingTop: '5px',
      }}
    />
  );
}

export default App;
