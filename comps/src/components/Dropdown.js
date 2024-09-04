import { useState } from 'react';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const renderedOptions = options.map((option) => {
    return (
      <div
        key={option.value}
        onClick={() => {
          onChange(option);
          setIsOpen(false);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div onClick={() => setIsOpen((currentIsOpen) => !currentIsOpen)}>
        {value?.label || 'Select...'}
      </div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;
