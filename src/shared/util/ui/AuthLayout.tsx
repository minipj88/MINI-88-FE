import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width:90%;
  
  margin: 87px auto 0;

`

const Title = styled.h2`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  font-size: 34px;
  color: #0066F6;
  margin-bottom:10px;
`
const Description = styled.h3`
  padding: 10px 0 20px 0;
  font-size: 14px;
  font-weight: 400;
  color: #001533;
  font-family: 'Noto Sans KR', sans-serif;
`

interface AuthLayoutProps {
  title:string;
  description:string;
  children: ReactNode
}

const AuthLayout = ({title,description,children}:AuthLayoutProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>  
      <Description>{description}</Description>
      {children}
    </Wrapper>
  );
};

export default AuthLayout;