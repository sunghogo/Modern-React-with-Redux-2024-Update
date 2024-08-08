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
  */

  const handleClick = () => {
    console.log('Button was clicked!');
  };

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
    </div>
  );
}

export default App;
