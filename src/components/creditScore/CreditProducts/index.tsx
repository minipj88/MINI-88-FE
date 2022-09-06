import React from 'react';
import styled from 'styled-components';
import FilterBar from './FilterBar';
import ProductList from './ProductList';

const Title = styled.span`
  font-size: 17px;
  font-weight: 600;
`;
const ProductsBox = styled.div`
  display: flex;
`;
const LogoBox = styled.div`
  flex-grow: 1;
  text-align: center;
`;
const ProductInfoBox = styled.div`
  flex-grow: 2;
`;

function CreditProducts() {
  return (
    <div>
      <Title>필요한 대출을 직접 찾아보세요.</Title>
      <FilterBar />
      <div>
        {/* <p>{Products ? Products : 'nope'}</p> */}
        <ProductList />
      </div>
    </div>
  );
}

export default CreditProducts;
