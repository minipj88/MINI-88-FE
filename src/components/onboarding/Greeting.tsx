import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

interface GreetingProps {
  onClick: () => void;
}
const Greeting = ({ onClick }: GreetingProps) => {
  return (
    <Wrapper onClick={onClick}>
      <img src="/logo.png" alt="" />
    </Wrapper>
  );
};

export default Greeting;
