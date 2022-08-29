import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrap = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  min-width: 358px;
  transform: translate(-50%, -50%);
  
`
const Container = styled.div`
  p {
    font-size: 16px;
    line-height: 18px;
  }
  p:nth-child(1) {
    position: relative;
    margin-bottom: 38px;
    font-size: 160px;
    font-weight: 700;
    line-height: 168px;
    color: #001533;
    text-align: left;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -20px;
      display: block;
      width: 100px;
      height: 8px;
      background-color: #001533;
    }
  }
  p:nth-child(2) {
    margin-bottom: 3px;
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
  }
  p:nth-child(3) {
    margin-bottom: 17px;
  }
`

const Button = styled.div`
  display: inline-block;
  padding: 14px 50px 14px 40px;
  background: #0066F6;
  border-radius: 25px;
  filter:
    drop-shadow(0px 4px 4px rgba(50, 50, 71, 0.08)) 
    drop-shadow(0px 4px 8px rgba(50, 50, 71, 0.06));
  a {
    position: relative;
    font-size: 16px;
    font-weight: 700;
    line-height: 18px;
    color: #fff;
    &::after {
      content: '>';
      position: absolute;
      top: 2px;
      right: -14px;
    }
  }
`

const NotFoundPage = () => {
  return (
    <Wrap>
      <Container>
        <p>404</p>
        <p>죄송합니다.</p>
        <p>요청하신 페이지를 찾을 수 없습니다.</p>
        <Button>
          <Link to="/">홈으로</Link>
        </Button>
      </Container>
    </Wrap>
  );
};

export default NotFoundPage;