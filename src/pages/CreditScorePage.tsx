import React from 'react';
import BottomNavigation from '../components/bottomnavigation/BottomNavigation';
import TopNavigation from '../components/topnavigation/TopNavigation';
import CreditScore from '../components/creditScore'

const CreditScorePage = () => {
  return (
    <>
      <TopNavigation />
      <CreditScore />
      <BottomNavigation/>
    </>
  );
};

export default CreditScorePage;