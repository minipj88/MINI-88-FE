import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useGetProductsQuery } from '../../../../store/slices/creditScoreSlice';
import { useInView } from 'react-intersection-observer';

interface TextProps {
  size: string;
  weight?: string;
  color?: string;
}

const Container = styled.div`
  margin-top: 30px;
`;
const ProductsBox = styled.div`
  height: 112px;
  display: flex;
`;
const LogoBox = styled.div`
  width: 130px;
  text-align: left;
`;
const ProductInfoBox = styled.div`
  margin-left: 10px;
`;
const Text = styled.span<TextProps>`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => (weight ? weight : '400')};
  color: ${({ color }) => (color ? color : '#333')};
`;

function ProductList() {
  const [listPage, setListPage] = useState<number>(0);
  const { data: ProductsResponse, isLoading, error, isError } = useGetProductsQuery(listPage);
  const [productList, setProductList] = useState<any>(null);

  useEffect(() => {
    if (productList) {
      setProductList([...productList, ...ProductsResponse!.content]);
    } else {
      setProductList(ProductsResponse?.content);
    }
    console.log(ProductsResponse?.content);
  }, [ProductsResponse]);

  const [ref, inView] = useInView();
  useEffect(() => {
    setListPage((pre) => pre + 1);
  }, [inView]);

  return (
    <Container>
      {productList &&
        productList.map((item: any, index: number) => {
          return (
            <ProductsBox key={index}>
              <LogoBox>
                <img src={item.image} alt="상품회사로고" width="90%" />
              </LogoBox>
              <ProductInfoBox>
                <div>
                  <Text size="15px" weight="700">
                    {item.productName}
                  </Text>
                  <p>{item.productType}</p>
                </div>
                <div>
                  <Text size="14px" weight="600" color="#0066F6">{`${item.minRate}~${item.maxRate}`}</Text>
                  <Text size="10px" color="#ccc">
                    준법감시인 심의필 제2201-231(2022.01.11 현재)
                  </Text>
                </div>
              </ProductInfoBox>
            </ProductsBox>
          );
        })}
      <div ref={ref}></div>
    </Container>
  );
}

export default ProductList;
