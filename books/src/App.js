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

    Hooks:
        - Functions that add additional features to a component (given by React library itself):
            - useState: Allows a component to use the state system
            - useEffect: Allows a component to run code at specific points in time
            - useContext: Allows a component to access values stored in context

    Custom Hooks:
        - Functions we write to make reusable bits of logic (can do little or a lot)
        - Usually reuses basic hooks

    useEffect:
        - When useEffect is run, the state it references can be a "stale variable" since updating the state also changes the memory address of the state
            - This happens whenever useEffect contains or creates a function that refers to a variable
        - Becareful with ESLint as blindly following it can lead to more bugs
            - In this case, adding the function to the dependency array leads to an infinite loop since the function has a new memory address each time the Provider context is rerendered

    useCallback:
        - Hook to help you tell React that your function isn't actually changing over time
            - Fixes bugs around useEffect and other similar situations (does not ever run your function)
            - Follows similar convention as useEffect (second argument is a dependency array)
                - If empty array, returns original function from initial render
                - If it has elements/states changes since last render, returns new funciton from this rerender
    
    useEffect Cleanup Functions:
        - useEffect CANNOT:
            - return a number or string
            - use an async/await (since it returns a promise automatically)
        - useEffect can only return another function
            - This returned function is called at the start of the next specified rerender
                - Useful for clean ups like removing event listeners
                - New function is returned every time (unless useCallback?)
*/

import { useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import useBooksContext from './hooks/use-books-context';

function App() {
  const { fetchBooks } = useBooksContext();

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
