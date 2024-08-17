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

    Context and States:
        - Define a custom Provider function containing the {children} prop in the context file that initializes and returns the Context.Provider JSX containing {children}, and passes an object containing the state and handler functions to the value prop 
            - Can consume the state and functions using object destructuring

    Application State vs Component State:
        - Application State: Data that used by MANY different components
            - Often a good idea to put into context
        - Component/Local State: Data that is used by very FEW components
            - Can keep as props
*/

import { useEffect, useContext } from 'react';
import BooksContext from './context/books';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
