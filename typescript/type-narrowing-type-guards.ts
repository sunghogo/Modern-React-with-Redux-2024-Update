/*
    - Type narrowing:
        - Take a value that is a union of different types, and narrow it down to one specific type

    - Type guards:
        - Use 'typeof' operator to create conditionals with type guards
        - valid 'typeof' types:
            - 'string'
            - 'number'
            - 'boolean'
            - 'undefined'
            - 'object'
            - 'function'
        - Corner cases with objects
            - Array.isArray(var) to check for arrays
*/

interface Image {
  src: string;
}

function logOutput(value: string | number | string[] | Image) {
  // if value is a string...
  if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else if (typeof value === 'number') {
    console.log(Math.round(value));
  } else if (Array.isArray(value)) {
    console.log(value.join(''));
  } else if (typeof value === 'object' && !Array.isArray(value)) {
    console.log(value.src);
  }
}

logOutput('hi there');
logOutput(123);
logOutput(['hi', 'there']);
logOutput({ src: 'img.jpg' });
