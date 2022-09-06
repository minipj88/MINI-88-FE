import React from 'react'
import CreditScoreQuizLayout from '../../../../../shared/util/ui/CreditScoreQuizLayout'


interface textProp {
  text: string
}


function Quiz({text}: textProp) {
  return <CreditScoreQuizLayout quizText={text} />
  
}

export default Quiz
