import React, { useState } from 'react';
import styled from 'styled-components';

interface styleProps {
  bgColor: string;
}

const Container = styled.div<styleProps>`
  margin: 29px auto;
  padding: 14px 13px;
  width: 90%;
  background: ${({ bgColor }) =>
    bgColor === '신용'
      ? 'linear-gradient(180deg, #EDF6E5 0%, #C7E5AC 100%)'
      : bgColor === '주택'
      ? 'linear-gradient(180deg, #DEF9F9 0%, #96E6E6 100%)'
      : bgColor === '전세'
      ? 'linear-gradient(180deg, #FFDADA 0%, #F59F9F 100%)'
      : 'linear-gradient(180deg, #ffffff 0%, #dfdfdf 100%)'};
  border-radius: 8px;
  filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.3));
  box-sizing: border-box;
`;

const LogoBookmarkWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BookmarkSize = styled.img`
  height: 20px;
`;

const BankName = styled.p`
  margin-top: 19px;
  color: #001533;
  font-size: 15px;
  line-height: 18px;
`;

const ProductName = styled.p`
  margin-top: 4px;
  color: #001533;
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const RateAmountWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 13px;
`;

const RateFont = styled.span`
  font-size: 12px;
  font-weight: 700;
  line-height: 17px;
`;

const RateFontBlue = styled.span`
  color: #0066f6;
`;

const LoanAmount = styled.span`
  color: #001533;
  font-size: 22px;
  font-weight: 700;
  line-height: 18px;
`;

interface ProductCardLayoutProps {
  financialCompanyName: string;
  productName: string;
  minRate: number;
  maxRate: number;
  bgColor: string;
  amount: string;
}

const ProductCardLayout = ({
  financialCompanyName,
  productName,
  minRate,
  maxRate,
  bgColor,
  amount,
}: ProductCardLayoutProps) => {
  // 천단위 ',' 찍기
  const loanAmount = Number(amount.replace('만원', '0000')).toLocaleString();
  const [isFavorite, setIsFavorite] = useState(false);

  function favoriteHandler() {
    setIsFavorite(!isFavorite);
  }

  return (
    <Container bgColor={bgColor}>
      <LogoBookmarkWrap>
        <img src="" alt="LOGO" />
        <BookmarkSize
          src={isFavorite ? '/bookmark.png' : '/bookmarkoutline.png'}
          alt="bookmark"
          onClick={favoriteHandler}
        />
      </LogoBookmarkWrap>
      <BankName>{financialCompanyName}</BankName>
      <ProductName>{productName}</ProductName>
      <RateAmountWrap>
        <RateFont>
          {minRate} ~ {maxRate}% <RateFontBlue>(할인가 {}%~)</RateFontBlue>
        </RateFont>
        <LoanAmount>{loanAmount} &#92;</LoanAmount>
      </RateAmountWrap>
    </Container>
  );
};

export default ProductCardLayout;
