import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../shared/util/ui/Button';



const ButtonWrapper = styled.div`
  width:100%;
  height:fit-content;
  position:absolute;
  display:flex;
  gap:20px;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  bottom:30px;

`
const AuthButtons = () => {
  const navigate = useNavigate();

  const goToSigninPageHandler = () => {
    navigate('/signin')
  }
  const goToSignupPageHandler = () => {
    navigate('/signup')
  }
  return (
    <ButtonWrapper>
      <Button bgColor='#0066F6' width="90%" height='50px' color="white" text="계정 생성" onClick={goToSignupPageHandler} buttonPosition="static" />
      <Button bgColor='#fff' width="90%" height='50px' color="#001533" text="로그인" onClick={goToSigninPageHandler} buttonPosition="static" buttonBorder="1px solid #999999" />
      </ButtonWrapper>
  );
};

export default AuthButtons;