import { useState } from 'react';

function Dropdown({ options, selection, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const renderedOptions = options.map((option) => {
    return (
      <div
        key={option.value}
        onClick={() => {
          onSelect(option);
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
        {selection?.label || 'Select...'}
      </div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;
