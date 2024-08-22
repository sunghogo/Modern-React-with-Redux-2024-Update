/*
    Generics:
        - Makes it easier to write functions, interfaces, and more that work with multiple different types
        - Limitations without using generics: 
            - Using type unions/aliases causes return type ambiguity without type narrowing
            - Creating new functions to deal with each type can get unmaintainable
*/

// function wrapInArray(value: string | number): (string | number)[] {
//   return [value];
// }

function wrapInArray(value: string): string[] {
  return [value];
}

function wrapNumberInArray(value: number): number[] {
  return [value];
}

const result = wrapInArray('someString');
// const result2 = wrapInArray(10);
const result3 = wrapNumberInArray(10);
