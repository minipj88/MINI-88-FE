import React, { useEffect, useState } from 'react';
import BottomNavigation from '../components/bottomnavigation/BottomNavigation';
import TopNavigation from '../components/topnavigation/TopNavigation';
import ProductCardLayout from '../shared/util/ui/ProductCardLayout';
import { getProduct, useGetProductListQuery } from '../store/slices/productSlice';
import styled from 'styled-components';
import SpinLoadingLayout from '../shared/util/ui/SpinLoadingLayout';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { ReturnProductType } from '../store/slices/productSlice';
import { useAppDispatch, useAppSelector } from '../store/store';
import SearchLoan from '../components/bottomnavigation/SearchLoan';

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
  margin: 27px 0 0 0;
  overflow: scroll;
`;

// const Target = styled.div`
//   height: 50px;
//   background-color: skyblue;
// `;

const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
`;

const Button = styled.button`
  padding: 6px 11px;
  font-size: 17px;
  font-weight: 700;
  color: #fff;
  background-color: #0066f6;
  outline: 0;
  border: 0;
  border-radius: 50%;
  &:disabled {
    background-color: #64a4ff;
  }
`;

const AllProductsPage = () => {
  // const products = useAppSelector((state) => state.product.content);
  // const [products, setProducts] = useState<ReturnProductType['content']>([]);
  const [pageNumber, setPageNumber] = useState(0);
  // const dispatch = useAppDispatch();
  const { data } = useGetProductListQuery(pageNumber);
  // dispatch(getProduct(data?.content));
  // console.log(data?.content);

  // setProducts((prev) => [...prev, data.content]);
  // console.log(products);

  // const onIntersect: IntersectionObserverCallback = async ([{ isIntersecting }]) => {
  //   await new Promise((resolve) => setTimeout(resolve, 1500));
  //   setPageNumber((prev) => prev + 1);
  //   console.log(pageNumber);
  //   useGetProductListQuery(pageNumber);
  //   console.log(data);
  //   console.log(`감지결과 : ${isIntersecting}`);
  // };

  // const { setTarget } = useIntersectionObserver({ onIntersect });

  const prevButtonHandler = () => {
    setPageNumber((prev) => prev - 1);
  };

  const nextButtonHandler = () => {
    setPageNumber((prev) => prev + 1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageNumber]);

  return (
    <>
      <TopNavigation />
      <SearchLoan />
      <Container>
        {data &&
          data.content.map((element, index) => {
            return (
              <>
                <ProductCardLayout
                  key={element.id}
                  isBookmarkOn={false}
                  data={element}
                  index={index}
                  bookmarkHandler={function yet() {
                    console.log('개발중...');
                  }}
                  application={function yet() {
                    console.log('개발중...');
                  }}
                />
              </>
            );
          })}
      </Container>
      <ButtonArea>
        <Button disabled={pageNumber === 0 ? true : false} onClick={prevButtonHandler}>
          &#60;
        </Button>
        <span>{pageNumber + 1 + ' / ' + data?.totalPages}</span>
        <Button disabled={pageNumber === 22 ? true : false} onClick={nextButtonHandler}>
          &#62;
        </Button>
      </ButtonArea>
      <BottomNavigation />
    </>
  );
};

export default AllProductsPage;
