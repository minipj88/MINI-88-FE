import { useState } from 'react'
import CreditScoreQuiz from '../creditScoreQuiz'
import styled from 'styled-components'

function UserCreditScore() {
  const [quizView, setQuizView] = useState(false)
  return (
    <div>
      {quizView ? <CreditScoreQuiz /> : <button onClick={() => setQuizView(true)}>1분 만에 조회하기</button>}
    </div>
  )
}

export default UserCreditScore