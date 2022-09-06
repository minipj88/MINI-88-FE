import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MyProductTab from './MyProductTab';
import AllProductTab from './AllProductTab';
import CreditscoreTab from './CreditscoreTab';

const Wrapper = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  /* justify-content: space-around; */
  background: #ffffff;
  box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.08);
  z-index: 9;
  a {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 27px 16px 28px;
    width: calc(100% / 3);
    box-sizing: border-box;
  }
`;

const ButtonLinkLayout = () => {
  return (
    <Wrapper>
      <Link to="/">
        <MyProductTab />
      </Link>
      <Link to="/allproducts">
        <AllProductTab />
      </Link>
      <Link to="/creditscore">
        <CreditscoreTab />
      </Link>
    </Wrapper>
  );
};

export default ButtonLinkLayout;
