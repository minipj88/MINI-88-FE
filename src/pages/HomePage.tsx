import React from 'react';
import { useAppSelector } from '../store/store';
import OnBoarding from '../pages/OnBoardingPage';
import BottomNavigation from '../components/bottomnavigation/BottomNavigation';

const HomePage = () => {
  const user = useAppSelector(state => state.auth)
  if(!user.accessToken) {
    location.replace('/onboarding');
  }

  return (
    <>
      <p>맞춤형 상품 Tab이자 초기페이지 입니다.</p>
      <BottomNavigation/>
    </>
  );
};

export default HomePage;