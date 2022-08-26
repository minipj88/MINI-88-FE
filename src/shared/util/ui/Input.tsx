import React, { ChangeEvent } from 'react';

interface InputProps {
  type: string;
  text: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  name:string;
}

const Input = ({type,text,placeholder,value,onChange,name}:InputProps) => {
  return (
    <div>
      <label>{text}</label>
      <input name={name} type={type} placeholder={placeholder} value={value} onChange={onChange}  />
    </div>
  );
};

export default Input;