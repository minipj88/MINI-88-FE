import React from 'react';
import styled, { keyframes } from 'styled-components';

interface styleProps {
  thickNess: string;
  color: string;
}

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spin = styled.div<styleProps>`
  display: block;
  margin: 0 auto;
  width: 30px;
  height: 30px;
  border: ${({ thickNess }) => (thickNess ? thickNess : '1px')} solid ${({ color }) => (color ? color : '#9AA6C8')};
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

interface LoadingLayoutProps {
  thickNess: string;
  color: string;
}

const SpinLoadingLayout = ({ thickNess, color }: LoadingLayoutProps) => {
  return <Spin thickNess={thickNess} color={color}></Spin>;
};

export default SpinLoadingLayout;
