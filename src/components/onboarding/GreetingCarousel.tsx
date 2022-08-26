import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../../shared/util/ui/Button';
import AuthButtons from './AuthButtons';
import DotBox from './DotBox';
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


      {currentPage !== 3 && <DotBox currentPage={currentPage}/>}

      {currentPage !== 3 && <Button onClick={nextpageHandler} width="138px" text='Next' height='50px' color='white' bgColor='#0066f6'/>}
      
      {currentPage === 3 && <AuthButtons />}
      
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