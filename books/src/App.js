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
*/

import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const book = { title };
    setBooks([...books, book]);
  };

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
