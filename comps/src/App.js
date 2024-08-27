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
