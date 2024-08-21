/*
    - Differentiate between object types with type guard:
        'property' in object

    - TS has Type Predicates that are functions (return types) that narrow down types for you
        function isType1(arg: Type1 | Type2 | etc...): arg is Type1 {
            return ...;
        }
        - Rarely used in projects
        
*/

interface Image {
  src: string;
}

interface User {
  username: string;
}

function isUser(value: Image | User): value is User {
  return 'username' in value;
}

function logOutput(value: Image | User) {
  if (isUser(value)) {
    console.log(value.username);
  } else {
    console.log(value.src);
  }
}

logOutput({ src: 'img.jpg' });
logOutput({ src: 'some username' });
