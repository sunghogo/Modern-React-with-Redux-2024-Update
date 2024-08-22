/*
    Generic Type Inference:
        - TS can infer types so not necessary to specify generic type when calling generic function
        - Used a lot to create and use hooks (ex. useState())

    Issues with Generic Type Inference:
        - Corner cases:
          - Piece of state that starts an empty array, need to specify type to useState<T>([]) call
 */

function wrapInArray2<TypeOfValue>(value: TypeOfValue): TypeOfValue[] {
  return [value];
}

const result12 = wrapInArray2('a');
const result13 = wrapInArray2(123);

function callAndReturn<T>(fn: () => T): T {
  return fn();
}

const result14 = callAndReturn(() => 5);
const result15 = callAndReturn(() => 'someString');

import { useState } from 'react';

function ColorPicker() {
  const [colors, setColors] = useState<string>([]); // colors is type never[]

  const handleClick = () => {
    setColors([...colors, 'red']); // Error: assignable to type never
  };

  return <button onClick={handleClick}>Clcik</button>;
}
