/*
    Multiple Generic Types:
        - Can pass in multiple generic types
        - The order of the pass generics does not have to match the order of the arguments
        - Naming convention for generic types is 'T', 'U', 'V', etc...
*/

function toRecord2<TypeOfId, TypeOfValue>(id: TypeOfId, value: TypeOfValue) {
  return { id, value };
}

const result8 = toRecord2<number, string>(123, 'my@email.com');
const result9 = toRecord2<string, number[]>('ea01', [1, 5, 7]);

function randomElement<T>(arr: T[]): T {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

const result10 = randomElement<number>([1, 2, 3]);
const result11 = randomElement<string>(['a', 'b', 'c']);
