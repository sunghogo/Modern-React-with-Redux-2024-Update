/*
  Form behavior:
      - Automatically sends input data to homeUrl?input1Name=enteredData1&input2Name=enteredData2&etc..
        - Input data can be pass by pressing Enter key or an included form button
      - Pass the event argument in handler function and call event.preventDefault(); to prevent this behavior
*/

function SearchBar({ onSubmit }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit('cars');
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input />
      </form>
    </div>
  );
}

export default SearchBar;
