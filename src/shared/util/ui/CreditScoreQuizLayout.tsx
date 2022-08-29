import styled from 'styled-components';


interface GreetingLayoutProps {
  quizText : string,
}


const Quiz = styled.div`
  padding-top: 60px;
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  color: #333;
`


function CreditScoreQuizLayout({quizText}:GreetingLayoutProps) {
  return (
    <div>
      <Quiz>{quizText}</Quiz>
    </div>
  )
}

export default CreditScoreQuizLayout