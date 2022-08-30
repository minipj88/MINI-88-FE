import styled, { keyframes } from 'styled-components'


interface GreetingLayoutProps {
  answerText: string
}
interface DescriptionProps {
  weight?: string
}
interface FaceBoxProps {
  content?: string
}


const AnswerContainer = styled.div`
  height: 100%;
  position: relative;
`
const Description = styled.span<DescriptionProps>`
  display: inline-block;
  margin-top: 10px;
  font-size: 16px;
  font-weight: ${({weight}) => weight ? weight : '400'};
`
const QuestionAnswer = styled.div`
  width: 100%;
  height: 100%
`
const FaceBox = styled.div<FaceBoxProps>`
  display: flex;
  justify-content: ${({content}) => content};
  margin-top: 32px;
`
const fadeIn = keyframes`
  from {
    opacity: 0;
    margin-top: 70px;
  }
  to {
    opacity: 1;
    margin-top: 32px;
  }
`
const AnswerAnimation = styled.div<FaceBoxProps>`
  display: flex;
  position: absolute;
  right: 0;
  margin-top: 32px;
  animation-name: ${fadeIn};
  animation-duration: .6s;
  animation-timing-function: ease-out;
`
const TextBox = styled.div`
  background-color: #F1F2F3;
  width: 168px;
  margin: 0 8px;
  border-radius: 5px;
  box-shadow: 0 3px 5px lightGrey;
`
const Text = styled.span`
  display: inline-block;
  margin: 10px 12px;
  font-size: 12px;
  font-weight: 700;
  line-height: 17px;
  color: #333;
`


function CreditScoreQAnswerLayout({answerText}:GreetingLayoutProps) {
  return (
    <AnswerContainer>
      <img src="/creditScoreImg/letter.png" alt="" width='19px' />
      <Description>&nbsp;Eight!이 알려주는</Description><Description weight='700' box-shadow='0 3px 5px lightGrey'>&nbsp;신용등급 높이는 법</Description>
      <QuestionAnswer>
        <FaceBox content='flex-start'>
          <img src="/creditScoreImg/greenface.png" alt="초록얼굴일러스트" width='47px' height='100%' />
          <TextBox>
            <Text>어떻게 하면 신용등급을 높일 수 있나요?</Text>
          </TextBox>
        </FaceBox>
        <AnswerAnimation>
          <TextBox>
            <Text>{answerText}</Text>
          </TextBox>
          <img src="/creditScoreImg/blueface.png" alt="파랑얼굴일러스트" width='47px' height='100%' />
        </AnswerAnimation>
      </QuestionAnswer>
    </AnswerContainer>
  )
}

export default CreditScoreQAnswerLayout