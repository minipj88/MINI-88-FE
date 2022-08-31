import { lazy, Suspense, useState } from 'react'
import { Link } from 'react-router-dom'
import {useAppSelector, useAppDispatch} from '../../../store/store'
import { incQuizScore, creditScoreCalc } from '../../../store/slices/creditScoreSlice'
import styled from 'styled-components'
import Quiz from './QuizText/Quiz'
import Answer from './AnswerText/Answer'
import ResultScore from './ResultScore'




interface ButtonProps{
  width: string
  right?: string
  left?: string
  color: string
  bgColor: string
  border?: string
  bottom?: string
}


const QuizPageContainer = styled.div`
  background-color: #fff;
  width:100%;
  height: 100%;
  position: absolute;
  top: 0;
  text-align: left;
`
const InnerBox = styled.div`
  height: inherit;
  display: ${(props) => props['aria-current'] ==='page' ? "block" : "none"};
`
const InnerLastBox = styled.div`
background-color: #fff;
width: 100vw;
  height: 100vh;
  display: ${(props) => props['aria-current'] ==='page' ? "block" : "none"};
  position: absolute;
  top: -12%;
  left: -4%;
  z-index: 99;
`
const Title = styled.h2`
  padding-top: 38px;
  font-size: 25px;
  font-weight: 700;
  color: #0066F6;
`
const Button = styled.button<ButtonProps>`
  background-color: ${({bgColor}) => bgColor};
  width: ${({width}) => width};
  height: 50px;
  position: absolute;
  bottom: ${({bottom}) => bottom ? bottom : '23px'};
  left: ${({left}) => left};
  right: ${({right}) => right};
  font-size: 15px;
  font-weight: bold;
  color: ${({color}) => color};
  border: ${({border}) => border ? border : 'none'};
  border-radius: 5px;
`


function creditScoreQuiz() {
  const quizText = {
    a: 'Q1. 카드론이나 현금서비스를 쓰지 않는다.',
    b: 'Q2. 신용카드 할부 결제를 자주 사용한다.',
    c: 'Q3. 1년 이내로 연체한 적이 없다.',
    d: 'Q4. 체크카드를 꾸준히 사용한다.',
    e: 'Q5. 신용카드 사용 한도액을 최소한으로 사용한다.',
    f: 'Q6. 공과금을 연체한 적이 있다.',
    g: 'Q7. 갖고있는 대출이 1개 이하이다.',
    h: 'Q8. 예금, 적금을 1개 이상씩 갖고 있다.'
  }
  const answerText = {
    a: '금리가 높은 대출을 자주 받을수록 신용점수가 하락합니다. 카드론, 신용카드 현금서비스는 편하게 받을 수 있지만 고금리 대출이기 때문에 사용하지 않는 것이 좋다. 카드론보다 마이너스 통장을 권장합니다.',
    b: '신용카드 할부거래는 부채가 되기 때문에 최대한 짧게 줄여야 합니다. 주로 신용카드를 쓴다면 한도의 30%를 넘지 않는 것도 신용점수를 높이는 방법입니다.',
    c: '연체금을 갚아도 10만 원 이상 영업일 기준 5일 이상의 연체가 되면 기록에 남습니다. 연체 기록은 5년 동안 신용평가기관에 남아 신용도에 영향을 줄 수 있습니다. 연체금이 있다면 가장 오래된 연체부터 갚아야 합니다.',
    d: '체크카드로 한 달에 30만 원 이상 12개월 동안 사용하면 최대 40점의 신용점수 가산점을 받을 수 있습니다.',
    e: '신용카드 한도를 다 채워서 쓰면 현재 재정 상황이 안 좋게 여겨질 수 있습니다. 한도의 50%만 사용하거나 가능하면 30%만 사용하는 것이 좋습니다.',
    f: '공과금을 성실하게 납부했다는 것을 증명하면 가산점을 받아 신용점수를 올릴 수 있습니다. 이것을 비금융 정보 신용평가 반영 신청이라 합니다.',
    g: '대출이 이미 있는데 다른 대출을 더 받아야 한다면 대환대출로 대출 숫자를 줄일 수 있습니다. 대환대출은 대출을 통합해 대출 숫자를 줄이고 연체를 방지할 수 있습니다.',
    h: '은행의 예금이나 적금을 들어놓고 꾸준히 돈을 모을 때 자산 관리를 잘한다는 의미로 신용점수가 향상될 수 있습니다. 여유자금이 늘어나 대출이 필요한 금액이 줄어들고 대출의 금리도 낮아지는 효과를 얻을 수 있습니다.'
  }


  const { resultCreditScore } = useAppSelector(state => state.creditScore.creditScoreData)
  const dispatch = useAppDispatch()


  const [currentPage, setCurrentPage] = useState<number>(1)
  const [quizView, setQuizView] = useState<boolean>(true)
  function correctAnswerHandler() {
    dispatch(incQuizScore())
    setQuizView(false)
  }
  function wrongAnswerHandler() {
    setQuizView(false)
  }
  function nextQuiz() {
    setCurrentPage(() => currentPage + 1)
    setQuizView(true)
    if(currentPage === 8) {
      dispatch(creditScoreCalc())
    }
  }


  const [finishQuiz, setFinishQuiz] = useState(false)
  if(finishQuiz) return null
  return (
    <QuizPageContainer>
      {currentPage !== 9 ? <Title>신용등급 조회하기</Title> : null}
      <InnerBox aria-current={1 === currentPage ? 'page' : undefined}>
        {quizView
          ? <>
              <Quiz text={quizText.a} />
              <Button onClick={correctAnswerHandler} width='170px' right='auto' left='0' color='#fff' bgColor='#0066F6'>예</Button>
              <Button onClick={wrongAnswerHandler} width='170px' right='0' left='auto' color='#333' bgColor='#fff' border='solid 1px #666'>아니오</Button>
            </>
          : <>
              <Answer text={answerText.a} />
              <Button onClick={nextQuiz} width='100%' color='#fff' bgColor='#0066F6'>다음</Button>
            </>}
      </InnerBox>
      <InnerBox aria-current={currentPage === 2 ? 'page' : undefined}>
        {quizView
          ? <>
              <Quiz text={quizText.b} />
              <Button onClick={wrongAnswerHandler} width='170px' right='auto' left='0' color='#fff' bgColor='#0066F6'>예</Button>
              <Button onClick={correctAnswerHandler} width='170px' right='0' left='auto' color='#333' bgColor='#fff' border='solid 1px #666'>아니오</Button>
            </>
          : <>
              <Answer text={answerText.b} />
              <Button onClick={nextQuiz} width='100%' color='#fff' bgColor='#0066F6'>다음</Button>
            </>}
      </InnerBox>
      <InnerBox aria-current={currentPage === 3 ? 'page' : undefined}>
        {quizView
          ? <>
              <Quiz text={quizText.c} />
              <Button onClick={correctAnswerHandler} width='170px' right='auto' left='0' color='#fff' bgColor='#0066F6'>예</Button>
              <Button onClick={wrongAnswerHandler} width='170px' right='0' left='auto' color='#333' bgColor='#fff' border='solid 1px #666'>아니오</Button>
            </>
          : <>
              <Answer text={answerText.c} />
              <Button onClick={nextQuiz} width='100%' color='#fff' bgColor='#0066F6'>다음</Button>
            </>}
      </InnerBox>
      <InnerBox aria-current={currentPage === 4 ? 'page' : undefined}>
        {quizView
          ? <>
              <Quiz text={quizText.d} />
              <Button onClick={correctAnswerHandler} width='170px' right='auto' left='0' color='#fff' bgColor='#0066F6'>예</Button>
              <Button onClick={wrongAnswerHandler} width='170px' right='0' left='auto' color='#333' bgColor='#fff' border='solid 1px #666'>아니오</Button>
            </>
          : <>
              <Answer text={answerText.d} />
              <Button onClick={nextQuiz} width='100%' color='#fff' bgColor='#0066F6'>다음</Button>
            </>}
      </InnerBox>
      <InnerBox aria-current={currentPage === 5 ? 'page' : undefined}>
        {quizView
          ? <>
              <Quiz text={quizText.e} />
              <Button onClick={wrongAnswerHandler} width='170px' right='auto' left='0' color='#fff' bgColor='#0066F6'>예</Button>
              <Button onClick={correctAnswerHandler} width='170px' right='0' left='auto' color='#333' bgColor='#fff' border='solid 1px #666'>아니오</Button>
            </>
          : <>
              <Answer text={answerText.e} />
              <Button onClick={nextQuiz} width='100%' color='#fff' bgColor='#0066F6'>다음</Button>
            </>}
      </InnerBox>
      <InnerBox aria-current={currentPage === 6 ? 'page' : undefined}>
        {quizView
          ? <>
              <Quiz text={quizText.f} />
              <Button onClick={wrongAnswerHandler} width='170px' right='auto' left='0' color='#fff' bgColor='#0066F6'>예</Button>
              <Button onClick={correctAnswerHandler} width='170px' right='0' left='auto' color='#333' bgColor='#fff' border='solid 1px #666'>아니오</Button>
            </>
          : <>
              <Answer text={answerText.f} />
              <Button onClick={nextQuiz} width='100%' color='#fff' bgColor='#0066F6'>다음</Button>
            </>}
      </InnerBox>
      <InnerBox aria-current={currentPage === 7 ? 'page' : undefined}>
        {quizView
          ? <>
              <Quiz text={quizText.g} />
              <Button onClick={correctAnswerHandler} width='170px' right='auto' left='0' color='#fff' bgColor='#0066F6'>예</Button>
              <Button onClick={wrongAnswerHandler} width='170px' right='0' left='auto' color='#333' bgColor='#fff' border='solid 1px #666'>아니오</Button>
            </>
          : <>
              <Answer text={answerText.g} />
              <Button onClick={nextQuiz} width='100%' color='#fff' bgColor='#0066F6'>다음</Button>
            </>}
      </InnerBox>
      <InnerBox aria-current={currentPage === 8 ? 'page' : undefined}>
        {quizView
          ? <>
              <Quiz text={quizText.h} />
              <Button onClick={correctAnswerHandler} width='170px' right='auto' left='0' color='#fff' bgColor='#0066F6'>예</Button>
              <Button onClick={wrongAnswerHandler} width='170px' right='0' left='auto' color='#333' bgColor='#fff' border='solid 1px #666'>아니오</Button>
            </>
          : <>
              <Answer text={answerText.h} />
              <Button onClick={nextQuiz} width='100%' color='#fff' bgColor='#0066F6'>다음</Button>
            </>}
      </InnerBox>
      <InnerLastBox aria-current={currentPage === 9 ? 'page' : undefined}>
        <ResultScore finalScore={resultCreditScore} />
        <Button onClick={() => setFinishQuiz(true)} width='90%' color='#fff' bgColor='#0066F6' bottom='48px' left='5%'>다음</Button>
      </InnerLastBox>
    </QuizPageContainer>
  )
}

export default creditScoreQuiz