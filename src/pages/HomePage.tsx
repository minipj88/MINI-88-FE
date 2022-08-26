import React from 'react';
import { useAppSelector } from '../store/store';
import OnBoarding from '../pages/OnBoarding'
const Home = () => {
  const user = useAppSelector(state => state.auth)
  if(!user.useData.token) {
    location.replace('/onboarding');
  }
  return (
    <div>
      
    </div>
  );
};

export default Home;