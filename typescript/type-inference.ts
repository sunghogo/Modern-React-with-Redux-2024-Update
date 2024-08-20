/*
    Type Inference:
        - TS can guess the types of your variables / function return values
*/

function add(a: number, b: number) {
  // Infers numebr return type
  return a + b;
}

const sum = add(1, 50); // Infers number variable type
