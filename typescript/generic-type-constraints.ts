/*
    Generic Type Constraints:
        - Sets up a requirements / limitation around a generic type
        - Can use 'extends' to absolutely require a generic type to be of a certain type
        - Can type alias to properties of an object by using 'keyof' to get the keys in string of an object/interface

    - Generally speaking, won't be creating generic functions but using them written by 3rd party libraries
*/

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

const result14 = merge({ id: 'someString' }, { color: 'otherString' });
// const result14 = merge(5, 'moreString'); // Error

result14.id;
result14.color;
// result14.anythingelse; //< Error

interface Product {
  name: string;
  count: number;
}

type ProductKeys = keyof Product;

const key1: ProductKeys = 'name';
// const key2: ProductKeys = 'anything'; // Error

function collect<T extends ProductKeys, U extends Product>(
  key: T,
  arr: U[]
): U[T][] {
  return arr.map((el) => el[key]);
}

const result15 = collect('name', [
  { count: 1, name: 'someName' },
  { count: 20, name: 'otherName' },
]);
