/*
    - Components recreating their html element equivalent are called "wrappers", and the plain element as the "underlying element"
    - In React, anything between the opening and closing component JSX, and is automatically passed down as the "children" prop

    - Passing Props 
      - Can destructure all other unused passed props with '...rest' as a component argument
        - Can then pass these props to underlying components using '{...rest}'

    - Component vs Page
      - Component: Reusable React component that shows a handful of element
      - Page: Still a React component but not intended to be reused

    - Events + State Design Process
      1) List out what a user will do (event handlers) and changes they weill see while using your app (state)
      2) Categorize aech step as 'state' or 'event handler'
      3) Group common steps. Remove duplicates. Rewrite descriptions
      4) Look at mockup. Remove or simplify parts that aren't changing
      5) Replace remaining elements with text descriptions
      6) Repeat #4 and #5 with a different version
      7) Imagine you have to write a function that returns the text of steps #5 and #6. In addition to your component props, what other arguments do you need?
      8) Decide where each event handler + state will be defined (event handler usually defined in same component as state it modifies)

*/
import Accordion from './components/Accordion';

function App() {
  const items = [
    {
      id: 'l2kj5',
      label: 'Can I use React on a project?',
      content:
        'You can use React on any project you want. You can use React on any project you want',
    },
    {
      id: 'lk2j35lkj',
      label: 'Can I use JavaScript on a project?',
      content:
        'You can use JavaScript on any project you want. You can use JavaScript on any project you want',
    },
    {
      id: 'l1kj2i0g',
      label: 'Can I use CSS on a project?',
      content:
        'You can use CSS on any project you want. You can use CSS on any project you want',
    },
  ];
  return <Accordion items={items} />;
}

export default App;
