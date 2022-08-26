import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../../shared/util/ui/Button';
import Greeting from './Greeting';
import GreetingAndRegister from './GreetingAndRegister';
import GreetingInfo1 from './GreetingInfo1';
import GreetingInfo2 from './GreetingInfo2';
import GreetingInfo3 from './GreetingInfo3';

const SliceContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const SlideBox = styled.div`
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: ${(props) => props['aria-current'] ==='page' ? "block" : "none"};
`;
const SkipButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 83px;
  height: 36px;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  z-index: 1;
  background: #fff;
  border: none;
  font-family: 'Noto Sans KR', sans-serif;
`;

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

const DotBox = styled.div`
  position:absolute;
  display:flex;
  gap:2px;
  bottom:49px;
  left: 10px; 
  width:fit-content;
  height:fit-content;
`
const Dot = styled.div`
  width:  ${(props) => props['aria-current'] ==='page' ? "34px" : "12px"};
  height: 12px;
  background:  ${(props) => props['aria-current'] ==='page' ? "#0066f6" : "#c4c4c4"};
  border-radius: 9999px;
  transition: 250ms;
`

const GreetingCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const nextpageHandler = () => {
    if(currentPage === 3) return;
    setCurrentPage(prev => prev+=1)
  }
  const carouselSkipHandler = () => {

  }
  return (
    <SliceContainer>
      <SkipButton onClick={carouselSkipHandler}>SKIP</SkipButton>
      
      <SlideBox aria-current={0 === currentPage ? 'page' : undefined}>
        <GreetingInfo1 />
      </SlideBox>
      <SlideBox aria-current={1 === currentPage ? 'page' : undefined}>
        <GreetingInfo2 />
      </SlideBox>
      <SlideBox aria-current={2 === currentPage ? 'page' : undefined}>
        <GreetingInfo3 />
      </SlideBox>
      <SlideBox aria-current={3 === currentPage ? 'page' : undefined}>
        <GreetingAndRegister />
      </SlideBox>


      {currentPage !== 3 &&
      <DotBox>
        <Dot aria-current={0 === currentPage ? 'page' : undefined} />
        <Dot aria-current={1 === currentPage ? 'page' : undefined} />
        <Dot aria-current={2 === currentPage ? 'page' : undefined} />
      </DotBox>}

      {currentPage !== 3 && <Button onClick={nextpageHandler} width="138px" text='Next' height='50px' color='white' bgColor='#0066f6'/>}
      
      {currentPage === 3 &&
      <ButtonWrapper>
      <Button bgColor='#0066F6' width="90%" height='50px' color="white" text="계정 생성" onClick={() => {}} buttonPosition="static" />
      <Button bgColor='#fff' width="90%" height='50px' color="#001533" text="로그인" onClick={() => {}} buttonPosition="static" buttonBorder="1px solid #999999" />
      </ButtonWrapper>}
      
    </SliceContainer>
  );
};


// width: string;
// height: string;
// color: string;
// text:string;
// onClick: () => void
// bgColor:string

export default GreetingCarousel;