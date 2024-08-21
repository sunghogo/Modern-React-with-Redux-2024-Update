/*
    - Since functions/methods are annotated within interfaces, can rely on type inference when defining/using those methods
*/

import React from 'react';

interface ColorPickerProps {
  colors: string[];
  handleColorSelect: (color: string) => void;
}
function ColorPicker({ colors, handleColorSelect }: ColorPickerProps) {
  const renderedColors = colors.map((color) => {
    return (
      <button key={color} onClick={() => handleColorSelect(color)}>
        {color}
      </button>
    );
  });

  return <div>{renderedColors}</div>;
}

<ColorPicker
  colors={['red', 'green', 'blue']}
  //   handleColorSelect={(color: string) => console.log(color)}
  handleColorSelect={(color) => console.log(color)}
/>;
