import React, { useEffect, useState } from 'react';
import BottomNavigation from '../components/bottomnavigation/BottomNavigation';
import TopNavigation from '../components/topnavigation/TopNavigation';
import ProductCardLayout from '../shared/util/ui/ProductCardLayout1';
import { useGetProductListQuery } from '../store/slices/productSlice';
import styled from 'styled-components';
import SpinLoadingLayout from '../shared/util/ui/SpinLoadingLayout';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { ReturnProductType } from '../store/slices/productSlice';

interface ContentType {
  age: number;
  cbName: string | null;
  financialCompanyName: string;
  id: number;
  job: string;
  image: string;
  joinWay: string;
  maxAmount: string;
  maxRate: number;
  minRate: number;
  productName: string;
  productNumber: string;
  productType: string;
}

const Container = styled.div`
  margin: 22px 0 100px 0;
  overflow: scroll;
`;

const Target = styled.div`
  height: 50px;
  background-color: skyblue;
`;

const AllProductsPage = () => {
  const [products, setProducts] = useState<ReturnProductType['content']>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const { data, isLoading, isError, error } = useGetProductListQuery({ pageNumber: pageNumber });
  console.log(data);

  // setProducts((prev) => [...prev, ...data!.content]);
  // console.log(products);

  // console.log(products);

  // const onIntersect: IntersectionObserverCallback = async ([{ isIntersecting }]) => {
  //   // await new Promise((resolve) => setTimeout(resolve, 1500));
  //   // setPageNumber((prev) => prev + 1);
  //   // console.log(pageNumber);
  //   // const { data, isLoading, isError, error } = useGetProductListQuery({ pageNumber: pageNumber });
  //   // console.log(data);
  //   console.log(`감지결과 : ${isIntersecting}`);
  // };

  // const { setTarget } = useIntersectionObserver({ onIntersect });

  // // const { data, error } = useGetProductListQuery({ pageNumber: pageNumber });
  // // console.log(data?.content);
  // // console.log(products);

  const moreButtonHandler = () => {
    setPageNumber((prev) => prev + 1);
    const { data, isLoading, isError, error } = useGetProductListQuery({ pageNumber: 0 });
    console.log(data);
  };

  return (
    <>
      <TopNavigation />
      <Container>
        {data &&
          data.content.map((element, index) => {
            return (
              <>
                <ProductCardLayout
                  // key={element.id}
                  isBookmarkOn={false}
                  data={element}
                  index={index}
                  bookmarkHandler={function hi() {
                    console.log('hi');
                  }}
                  application={function hi() {
                    console.log('hello');
                  }}
                />
              </>
            );
          })}
        <button onClick={moreButtonHandler}>더 보기</button>
      </Container>
      <BottomNavigation />
    </>
  );
};

export default AllProductsPage;
