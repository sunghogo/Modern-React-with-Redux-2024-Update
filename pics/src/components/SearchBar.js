/*
  Form Behavior and Inputs:
      - Automatically sends input data to homeUrl?input1Name=enteredData1&input2Name=enteredData2&etc..
        - Input data can be pass by pressing Enter key or an included form button
      - Pass the event argument in handler function and call event.preventDefault(); to prevent this behavior
      - NEVER try to get a value out of an input using a querySelector() or similar
    
    Handling Text Inputs:
        1) Create a new piece of state
        2) Createa n event handle to watch for the 'onChange' event
        3) When the 'onChange' event fires, get the value from the input
        4) Take that value from the input (using event.target.value) and use it to update your state
        5) Pass your state to the input as the 'value' prop
            - value prop forces the text inside the input to the specifed value
            - An error will occur the first time due to Hot Reload (update code in browser without completely refreshing the page), will go away after refreshing and its ok

    But Why?:
        - Normal Browser Behavior:
            1) User types in input
            2) Browser updates the text in the input
            3) Browser triggers event to say input was updated
        - Additional React Behavior:
            4) We read the value from the input event, and update state
            5) State update! Component rerenders
            6) We provide 'value' prop to input, so React changes the input's value (to what the user typed in)
            7) loop again
        - Why? 
            - Can easily read and update the input through state
            - Component re-renders with every keypress - super easy to add in more add in more advanced features now
*/

import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
    setTerm('');
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
