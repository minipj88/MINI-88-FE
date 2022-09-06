import { useState } from 'react';
import UserCreditScore from './UserCreditScore';
import styled from 'styled-components';
import CreditProducts from './CreditProducts';

const QuizPageContainer = styled.div`
  height: 100%;
  position: relative;
  margin: 82px 16px 84px 16px;
`;

function CreditScoreTest() {
  return (
    <QuizPageContainer>
      {/* 신용정보 */}
      <UserCreditScore />

      {/* 신용상품 */}
      <CreditProducts />
    </QuizPageContainer>
  );
}

export default CreditScoreTest;
