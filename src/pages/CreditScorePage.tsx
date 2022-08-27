import React from 'react';
import BottomNavigation from '../components/bottomnavigation/BottomNavigation';
import TopNavigation from '../components/topnavigation/TopNavigation';

const CreditScorePage = () => {
  return (
    <>
    <TopNavigation />
      <p>신용등급 조회 Tab 입니다.</p>
      <BottomNavigation/>
    </>
  );
};

export default CreditScorePage;