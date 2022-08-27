import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrap = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  min-width: 300px;
  transform: translate(-50%, -50%);
  
`
const Container = styled.div`
  p {
    margin-bottom: 10px;
    font-size: 18px;
    letter-spacing: -1px;
    word-spacing: -2px;
  }
  p:nth-child(1) {
    margin-bottom: 80px;
    font-size: 120px;
    font-weight: bold;
    text-align: center;
    
  }
  p:nth-child(2) {
    font-size: 20px;
  }
  p:nth-child(3) {
    margin-bottom: 20px;
  }
`

const Button = styled.div`
  /* display: flex;
  justify-content: end; */
  padding: 6px 0;
  font-size: 17px;
  a {
    display: inline-block;
    color: blue;
  }
`

const NotFoundPage = () => {
  return (
    <Wrap>
      <Container>
        <p>404</p>
        <p>죄송합니다.</p>
        <p>요청하신 페이지를 사용할 수 없습니다.</p>
        <Button>
          <Link to="/">홈으로 <span><img src="/arrow.png" alt="arrow" /></span></Link>
        </Button>
      </Container>
    </Wrap>
  );
};

export default NotFoundPage;