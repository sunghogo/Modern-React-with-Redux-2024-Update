/*
    Generics:
        - Work like arguments but specifically to configure types within a function
            - Naming convention uses 'T' as the type identifier

        function funcName<T>(param: T): T {
            ...
        }
*/

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
