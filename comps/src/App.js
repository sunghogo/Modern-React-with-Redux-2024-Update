/*
    - Components recreating their html element equivalent are called "wrappers", and the plain element as the "underlying element"
    - In React, anything between the opening and closing component JSX, and is automatically passed down as the "children" prop
*/
import Button from './Button';

function App() {
  return (
    <div>
      <div>
        <Button>Click!!</Button>
      </div>
      <div>
        <Button>Buy Now!</Button>
      </div>
      <div>
        <Button>See Deal!</Button>
      </div>
      <div>
        <Button>Hide Ads!</Button>
      </div>
      <div>
        <Button>Something!</Button>
      </div>
    </div>
  );
}

export default App;
