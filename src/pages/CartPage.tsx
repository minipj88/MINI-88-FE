import React from 'react';
import TopNavigation from '../components/topnavigation/TopNavigation';
import BottomNavigation from '../components/bottomnavigation/BottomNavigation';
import Cart from '../components/cart';

const CartPage = () => {
  return (
    <>
      <TopNavigation />
      <Cart />
      <BottomNavigation />
    </>
  );
};

export default CartPage;