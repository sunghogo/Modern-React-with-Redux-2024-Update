import { useState } from 'react';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  /*
    - Event System (detect user input) and State System (update content on screen)
    - Using Events:
      1) Decide what kind of event
      2) Create event handler/callback function
      3) Name the function using handle + EventName
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

    - Re-Rendering Process
      - State and setting function is initialized with the default value the first time component is rendered
      - When setter function is called, React will know state has been changed and (almost) immediately re-renders/executes the component with the new state
  */
  const [animals, setAnimals] = useState([]);

  const handleClick = () => setAnimals([...animals, getRandomAnimal()]);

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>{animals}</div>
    </div>
  );
}

export default App;
