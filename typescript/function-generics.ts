/*
    Generics:
        - Work like arguments but specifically to configure types within a function
            - Naming convention uses 'T' as the type identifier

        function funcName<T>(param: T): T {
            ...
        }
*/

function wrapInArray<TypeToWrap>(value: TypeToWrap): TypeToWrap[] {
  return [value];
}

const result4 = wrapInArray<string>('someString');
const result5 = wrapInArray<number>(10);
