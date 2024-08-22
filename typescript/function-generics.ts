/*
    Limitations without using generics: 
        - Using type unions/aliases causes return type ambiguity without type narrowing
        - Creating new functions to deal with each type can get unmaintainable

    Generics:
        - Makes it easier to write functions, interfaces, and more that work with multiple different types
        - Work like arguments but specifically to configure types within a function
            - Naming convention uses 'T' as the type identifier

        function funcName<T>(param: T): T {
            ...
        }
*/

// function wrapInArray(value: string | number): (string | number)[] {
//   return [value];
// }

// function wrapInArray(value: string): string[] {
//   return [value];
// }

// function wrapNumberInArray(value: number): number[] {
//   return [value];
// }

// const result = wrapInArray('someString');
// const result2 = wrapInArray(10);
// const result3 = wrapNumberInArray(10);

function wrapInArray<T>(value: T): T[] {
  return [value];
}

const result4 = wrapInArray<string>('someString');
const result5 = wrapInArray<number>(10);

function toRecord<TypeOfId>(id: TypeOfId, value: string) {
  return { id, value };
}

const result6 = toRecord<number>(123, 'my@email.com');
const result7 = toRecord<string>('ea01', 'other@email.com');
