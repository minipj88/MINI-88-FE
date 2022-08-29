import { useState } from 'react'
import UserCreditScore from './UserCreditScore'
import styled from 'styled-components'


const QuizPageContainer = styled.div`
  height: 676px;
  position: relative;
  margin: 59px 16px 23px 16px;
`


function CreditScoreTest() {
  return (
    <QuizPageContainer>
      {/* 신용정보 */}
      <UserCreditScore />
    </QuizPageContainer>
  )
}

export default CreditScoreTest