/*
  - Can derived interfaces from existing interfaces through 'extends' keyword
    interface DerivedInterface extends BaseInterface {
      extended properties... 
    }
*/

import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

function Button({ label, onClick }: ButtonProps) {
  return <button onClick={() => onClick()}>{label}</button>;
}

interface IconButtonProps extends ButtonProps {
  icon: string;
}
function IconButton({ label, onClick, icon }: IconButtonProps) {
  return (
    <button onClick={() => onClick()}>
      {icon}
      {label}
    </button>
  );
}
