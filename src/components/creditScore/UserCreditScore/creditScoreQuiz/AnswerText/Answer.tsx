import React from 'react'
import CreditScoreQAnswerLayout from '../../../../../shared/util/ui/CreditScoreQAnswerLayout'


interface textProp {
  text: string
}


function Answer({text}: textProp) {
  return (
    <>
      <CreditScoreQAnswerLayout answerText={text}/>
    </>
  )
}

export default Answer