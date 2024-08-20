/*
    Function Annotations:
        - Can annotate paramter types, as well as function return type
*/

function add(a: number, b: number): number {
  return a + b;
}

function printColors(colors: string[]) {
  console.log(colors);
}

printColors(['red', 'green', 'blue']); // Will cause error if nonstring in argument array

function printAge(age: number) {
  console.log(age);
}

printAge(10); // Will cause error if nonnumber as argument
