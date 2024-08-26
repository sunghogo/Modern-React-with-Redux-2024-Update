/*
    - Components recreating their html element equivalent are called "wrappers", and the plain element as the "underlying element"
    - In React, anything between the opening and closing component JSX, and is automatically passed down as the "children" prop
*/
import Button from './Button';

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          Click!!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button primary>See Deal!</Button>
      </div>
      <div>
        <Button warning>Hide Ads!</Button>
      </div>
      <div>
        <Button danger>Something!</Button>
      </div>
    </div>
  );
}

export default App;
