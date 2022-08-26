import axios from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import Greeting from '../components/onboarding/Greeting';
import GreetingCarousel from '../components/onboarding/GreetingCarousel';



function App() {
  const [showCarousel,setShowCarousel] = useState(false)
  const showUpGreetingCarouselHandler = () => {
    setShowCarousel(true)
  }
  return (
    <>
    {!showCarousel && <Greeting onClick={showUpGreetingCarouselHandler} />}
    {showCarousel && <GreetingCarousel />}
    </>
  );
}

export default App;