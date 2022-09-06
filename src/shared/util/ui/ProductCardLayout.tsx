import React from 'react';
import styled from 'styled-components';
import bookmark from '/bookmark.png';
import bookmarkOutline from '/bookmarkoutline.png';

interface StyleProps {
  size?: string;
  index?: number;
}

const Text = styled.span<StyleProps>`
  font-size: ${({ size }) => size};
  font-weight: 700;
`;
const ProductCard = styled.div<StyleProps>`
  background-color: ${(props) =>
    (Number(props.index) % 3 === 0 && '#FFEDF2') ||
    (Number(props.index) % 3 === 1 && '#E2F3F3') ||
    (Number(props.index) % 3 === 2 && '#F8EDFC')};
  height: 110px;
  margin: 24px 0;
  padding: 18px 18px 12px 18px;
  border-radius: 12px;
  box-shadow: 0 3px 3px #ccc;
  &:first-child {
    margin-top: 0;
  }
`;
const ImgBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const ContentsBox = styled.div`
  display: flex;
`;
const ProductInfoBox = styled.div`
  flex-grow: 1;
`;
const ProductTypeBox = styled.div`
  margin-bottom: 6px;
  font-size: 14px;
  color: #333;
`;
const ProductType = styled.span`
  position: relative;
  padding-left: 10px;
  ::before {
    content: '';
    background-color: #cbcbcb;
    width: 1px;
    height: 14px;
    position: absolute;
    left: 5px;
  }
`;
const RateBox = styled.div`
  margin-top: 10px;
  font-size: 12px;
  font-weight: 600;
`;
const ApplicationBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Button = styled.button`
  background-color: #0066f6;
  width: 80px;
  height: 34px;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  border: none;
  border-radius: 50px;
`;

interface dataProps {
  isBookmarkOn: boolean;
  index: number;
  bookmarkHandler: () => void;
  application: () => void;
  data: {
    age: number;
    cbName: string | null;
    financialCompanyName: string;
    id: number;
    image: string;
    job: string;
    joinWay: string;
    maxAmount: string;
    maxRate: number;
    minRate: number;
    productName: string;
    productNumber: string;
    productType: string;
  };
}

function ProductCardLayout({ isBookmarkOn, data, index, bookmarkHandler, application }: dataProps) {
  return (
    <ProductCard index={index}>
      <ImgBox>
        <img src={data.image} alt="은행 로고" height="18px" />
        {isBookmarkOn ? (
          <img src={bookmark} alt="" width="16px" onClick={bookmarkHandler} />
        ) : (
          <img src={bookmarkOutline} alt="" width="16px" onClick={bookmarkHandler} />
        )}
      </ImgBox>
      <ContentsBox>
        <ProductInfoBox>
          <ProductTypeBox>
            <span>{data.financialCompanyName}</span>
            <ProductType>{data.productType}대출</ProductType>
          </ProductTypeBox>
          <Text size="20px">{data.productName}</Text>
          <RateBox>
            <span>{`${data.minRate} ~ ${data.maxRate}%`}</span>
          </RateBox>
        </ProductInfoBox>
        <ApplicationBox>
          <Button onClick={application}>신청하기</Button>
          <Text size="22px">{data.maxAmount.toLocaleString()}₩</Text>
        </ApplicationBox>
      </ContentsBox>
    </ProductCard>
  );
}

export default ProductCardLayout;
