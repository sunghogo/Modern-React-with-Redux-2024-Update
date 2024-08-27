/*
    - Components recreating their html element equivalent are called "wrappers", and the plain element as the "underlying element"
    - In React, anything between the opening and closing component JSX, and is automatically passed down as the "children" prop

    - Passing Props 
      - Can destructure all other unused passed props with '...rest' as a component argument
        - Can then pass these props to underlying components using '{...rest}'

    - Component vs Page
      - Component: Reusable React component that shows a handful of element
      - Page: Still a React component but not intended to be reused

*/
import ButtonPage from './pages/ButtonPage';

function App() {
  return <ButtonPage />;
}

export default App;
