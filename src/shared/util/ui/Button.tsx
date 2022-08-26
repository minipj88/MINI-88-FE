import React from 'react';
import styled from 'styled-components';


interface StyleProps{
  width:string;
  height:string;
  color:string;
  bgColor:string;
  buttonPosition?:string;
  buttonBorder?:string;
}

const CustomButton = styled.button<StyleProps>`
  position:${({buttonPosition}) => buttonPosition ? buttonPosition : 'absolute'};
  right: 16px;
  bottom:30px;
  width: ${({width}) => width ? width : '138px' };
  height:${({height}) => height ? height : '30px' };;
  background: ${({bgColor}) => bgColor ? bgColor : '138px' };
  border-radius: 5px;
  font-size:14px;
  color:${({color}) => color ? color : 'white' };
  border:${({buttonBorder}) => buttonBorder ? buttonBorder : 'none'};
  font-weight:bold;
  :disabled{
    background-color: #ccc;
  }
`


interface ButtonProps{
  width: string;
  height: string;
  color: string;
  text:string;
  onClick: () => void
  bgColor:string
  buttonPosition?:string;
  buttonBorder?:string;
  totalValid:boolean;
}

const Button = ({width,height,color,onClick,text,bgColor,buttonPosition,buttonBorder,totalValid}:ButtonProps) => {
  return (
    <CustomButton width={width} height={height} color={color} onClick={onClick} bgColor={bgColor} buttonPosition={buttonPosition} buttonBorder={buttonBorder} disabled={!totalValid}>
      {text.toUpperCase()}
    </CustomButton>
  );
};

export default Button;