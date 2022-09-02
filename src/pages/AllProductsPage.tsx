import React from 'react';
import BottomNavigation from '../components/bottomnavigation/BottomNavigation';
import TopNavigation from '../components/topnavigation/TopNavigation';
import ProductCardLayout from '../shared/util/ui/ProductCardLayout';
import { useGetProductListQuery } from '../store/slices/productSlice';
import styled from 'styled-components';

const Container = styled.div`
  margin: 100px 0;
`;

const AllProductsPage = () => {
  const { data, error, requestId } = useGetProductListQuery({
    data: {
      pageable: {
        offset: 0,
        pageNumber: 2,
        pageSize: 5,
        paged: true,
        sort: {
          sorted: true,
          unsorted: false,
        },
        unpaged: false,
      },
    },
  });
  console.log(data);
  console.log(requestId);

  return (
    <>
      <TopNavigation />
      <Container>
        {data &&
          data.content.map((element) => {
            return (
              <ProductCardLayout
                key={element.id}
                financialCompanyName={element.financialCompanyName}
                productName={element.productName}
                minRate={element.minRate}
                maxRate={element.maxRate}
                bgColor={element.productType}
                amount={element.maxAmount}
              />
            );
          })}
      </Container>
      <BottomNavigation />
    </>
  );
};

export default AllProductsPage;
