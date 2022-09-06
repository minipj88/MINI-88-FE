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
  width: 90%;
  margin: 24px auto;
  padding: 18px 18px 12px 18px;
  border-radius: 12px;
  filter: drop-shadow(1px 1px 6px rgba(0, 0, 0, 0.3));
  box-sizing: border-box;

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
  width: 180px;
`;
const ProductTypeBox = styled.div`
  margin-bottom: 6px;
  font-size: 14px;
  color: #333;
`;
const ProductText = styled.div<StyleProps>`
  font-size: ${({ size }) => size};
  font-weight: 700;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
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
  let editBankName = data.financialCompanyName.replace('한국스탠다드차타드은행', 'SC제일은행');

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
            <span>{editBankName}</span>
            <ProductType>{data.productType}대출</ProductType>
          </ProductTypeBox>
          <ProductText size="18px">{data.productName}</ProductText>
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
