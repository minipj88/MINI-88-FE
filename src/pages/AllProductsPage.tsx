import React from 'react';
import BottomNavigation from '../components/bottomnavigation/BottomNavigation';
import TopNavigation from '../components/topnavigation/TopNavigation';

const AllProductsPage = () => {
  return (
    <>
    <TopNavigation />
      <p>금융 상품 Tab 입니다.</p>
      <BottomNavigation/>
    </>
  );
};

export default AllProductsPage;