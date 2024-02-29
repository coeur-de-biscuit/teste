import React, { InputHTMLAttributes } from 'react';

export interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const ButtonWrapper = (props: ButtonProps) => {
  return (
    <div>
      <button>{props.label}</button>
      <span>cavalo</span>
    </div>
  )
}

export default ButtonWrapper;