import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.div`
  width:100%;
  position:absolute;
  bottom:30px;
`

const Message = styled.p`
  font-size:14px;
  margin-top: 18px;
  color: #001533;
`

const CustomLink = styled(Link)`
  color: #0066F6;
  text-decoration:none;
  font-weight:bold;
`

interface AuthFooterLayoutProps {
  infoMessage: string;
  linkUrl: string;
  linkMessage: string;
  buttonText: string;
  totalValid: boolean;
}

const AuthFooterLayout = ({infoMessage,linkUrl,linkMessage,buttonText,totalValid}:AuthFooterLayoutProps) => {
  return (
    <Wrapper>
      <Button width="362px" height="50px" color="white" bgColor='#0066F6' onClick={() => {}} buttonPosition="static" text={buttonText} totalValid={totalValid} />
    <Message>{infoMessage}{' '}<CustomLink to={linkUrl}>{linkMessage}</CustomLink></Message>
    </Wrapper>
  );
};

export default AuthFooterLayout;