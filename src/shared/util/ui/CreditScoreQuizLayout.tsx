import styled from 'styled-components';


interface GreetingLayoutProps {
  quizText : string,
}


const Quiz = styled.div`
  padding-top: 60px;
  margin-right: 10px;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
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