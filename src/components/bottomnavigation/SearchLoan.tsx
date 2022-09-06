import React from 'react';
import styled from 'styled-components';

const SearchWrap = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  width: 90%;
`;

const LoanOptionBox = styled.div`
  display: flex;
  select {
    padding: 1px 5px;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    border: 1px solid #cccccc;
    border-radius: 16px;
  }
`;

const LoanTitle = styled.h2`
  margin-right: 12px;
  font-size: 25px;
  font-weight: 700;
  line-height: 25px;
  color: #0066f6;
`;

const InputBox = styled.input`
  margin-top: 28px;
  padding: 16px;
  width: 100%;
  border: 1px solid rgba(204, 204, 204, 0.6);
  border-radius: 10px;
  box-sizing: border-box;
`;
const SearchLoan = () => {
  return (
    <SearchWrap>
      <LoanOptionBox>
        <LoanTitle>대출 검색</LoanTitle>
        <select>
          <option value="bankName">은행명</option>
          <option value="productName">상품명</option>
        </select>
      </LoanOptionBox>
      <InputBox type="text" placeholder="개발중입니다..." />
    </SearchWrap>
  );
};

export default SearchLoan;
