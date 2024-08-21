/*
    - Rarely create functions that take in only one argument type at a time (polymorphic functions)
    - Type unions allow function to take in many different types separated by '|'
*/

interface Image {
  src: string;
}

function logOutput(value: string | number | string[] | Image) {}

logOutput('hi there');
logOutput(123);
logOutput(['hi', 'there']);
logOutput({ src: 'img.jpg' });
