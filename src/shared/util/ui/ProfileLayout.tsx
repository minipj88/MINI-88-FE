import React, { ReactNode } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  font-family: 'Noto sans KR',sans-serif;
`


const Header = styled.div`
  display:flex;
  justify-content:space-between;
  padding: 16px;
  align-items:center;
  
  p{
    font-weight:bold;
  }
`
interface ProfileLayoutProps {
  selectedImage:string;
  children:ReactNode;
  changeModeHandler:() => void
  
}
const ProfileLayout = ({selectedImage,children,changeModeHandler}:ProfileLayoutProps) => {
  return (
    <Wrapper>
      <Header>
      <img src={selectedImage || '/close.png'} width={10} height={10} />
    <p>김명성님의 정보</p>
    <p onClick={changeModeHandler}>수정</p>
    </Header>
    {children}
    </Wrapper>
  );
};

export default ProfileLayout;