import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface InputProps {
  type: string;
  text: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  name:string;
}

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  height:86px;
  font-size: 14px;
  line-height: 20px;
  margin: 12px 0;
  label{
    font-family:'Noto Sans KR',sans-serif;
  }
  input{
    box-sizing:border-box;
    height: 50px;
    background: rgba(153,153,153,0.05);
    border: 1px solid rgba(228,228,228,0.6);
    border-radius: 5px;
    margin-top: 10px;
    font-size:14px;
    padding-left:16px;
    ::placeholder {
      font-size:18px;
    }
  }
`

const Input = ({type,text,placeholder,value,onChange,name}:InputProps) => {
  return (
    <Wrapper>
      <label>{text}</label>
      <input name={name} type={type} placeholder={placeholder} value={value} onChange={onChange}  />
    </Wrapper>
  );
};

export default Input;