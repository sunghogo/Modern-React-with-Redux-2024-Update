import { useState } from 'react';

function App() {
  /*
    - Event System (user input) uand State System (updates to pages)
    - Using Events:
      1) Decide what kind of event
      2) Create event handler/callback function
      3) Name the function using handle + EventNAme
      4) Pass handler function as a prop to a plain element (Don't call it!)
      5) Use valid prop event name ('onClick', 'onChange', 'onMouseOver', etc.)

    - Event Documentation:
      reactjs.org/docs/events.html

    - State:
      - Data that change as user interacts with our app
      - When this data changes, React will update content on the screen automatically
        - This is the ONLY WAY to change content React shows

    - State System:
      1) Define a piece of state with the useState React function
      2) Pass default/initial value to useState()
      3) Use state in some way in our component (often in returned JSX)
      4) When user does something (event), update the state, causing React to rerender the component
    
    - 
  */

  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>Number of animals: {count}</div>
    </div>
  );
}

export default App;
