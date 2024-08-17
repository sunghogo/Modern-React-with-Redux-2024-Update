/*
    React Rendering with Arrays:
        - If state point to the same array/object (in memory), React is optimized to assume no rerender is required!
        - To fix this:
            1) Create a new array
            2) Copy all elements from old array
            3) Add new element to the end
            4) Set the sate to new array
        - AVOID MUTATING STATES THAT ARE MEMORY BASED
            - That means DO NOT MODIFY state arrays or elements AND state objects or properties

    State Update Cheatsheet: https://state-updates.vercel.app/

    useEffect:
        - Function we import from React library (like useState)
        - Used to run code when a component is initially rendered, and (sometimes afterwards) when rerendered
        - First argument is (arrow) function containing code we want to run
        - Second argument is control for when that code is executed
            - Pass [] for only the initial render
            - No argument for every rerender
            - Pass [state1, state2, etc...] for only when the specifed state(s) is changed

    Context:
        - An alternative to props to share data across many different components
        - Context is NOT A REPLACEMENT for Props or Redux
        - Using Context:
            1) Create the context
                - Import createContext from React and call it
            2) Specify the data that will be shared
                - Provider: Component used to specify what data we want to share
                    - 'value' prop is special and specifies what will be shared with rest of the app
                    - Any child component can now access data
                - Consumer: Component used to get access to data (Not often used)
            3) 'Consume' the data in a component
                - Import useContext from React and also the Context Object from Step 1
                - Call useContext(ContextObject)
*/

import { useState, useEffect } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
    });

    const updatedBooks = [...books, response.data];

    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const editBookById = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) return { ...book, ...response.data };
      return book;
    });

    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
