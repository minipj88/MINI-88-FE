import { lazy, Suspense, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Quiz1 from './QuizText/Quiz1'
import Quiz2 from './QuizText/Quiz2'
import Quiz3 from './QuizText/Quiz3'
import Quiz4 from './QuizText/Quiz4'
import Quiz5 from './QuizText/Quiz5'
import Quiz6 from './QuizText/Quiz6'
import Quiz7 from './QuizText/Quiz7'
import Quiz8 from './QuizText/Quiz8'
import ResultScore from './ResultScore'




interface ButtonProps{
  width: string
  right?: string,
  left?: string,
  color: string,
  bgColor: string,
  border?: string
}


const QuizPageContainer = styled.div`
  background-color: #fff;
  width:100%;
  height: 676px;
  position: absolute;
`
const InnerBox = styled.div`
  height: inherit;
  display: ${(props) => props['aria-current'] ==='page' ? "block" : "none"};
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
  bottom: 0;
  left: ${({left}) => left};
  right: ${({right}) => right};
  font-size: 15px;
  font-weight: bold;
  color: ${({color}) => color};
  border: ${({border}) => border ? border : 'none'};
  border-radius: 5px;
`
const QuizEnd = styled(Link)`
  background-color: #0066F6;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  border-radius: 5px;
  &:last-child {
    font-size: 15px;
    font-weight: bold;
    color: #fff;
  }
`


function creditScoreQuiz() {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [quizView, setQuizView] = useState<boolean>(true)

  const [score, setScore] = useState<number>(0)
  function correctAnswerHandler() {
    setQuizView(false)
  }
  function wrongAnswerHandler() {
    setQuizView(false)
  }
  function nextQuiz() {
    setCurrentPage(() => currentPage + 1)
    setQuizView(true)
    if(currentPage === 8) {
      //api 통신
    }
  }

  const [finalScore, setFinalScore] = useState<number>(0)
  function scoreCalcHandler() {
    switch(score) {
      case 8: 
        setFinalScore(Math.floor(Math.random() * 78) + 942)
        break
      case 7: 
        setFinalScore(Math.floor(Math.random() * 50) + 891)
        break
      case 6:
        setFinalScore(Math.floor(Math.random() * 58) + 832)
        break
      case 5: 
        setFinalScore(Math.floor(Math.random() * 63) + 768)
        break
      case 4: 
        setFinalScore(Math.floor(Math.random() * 69) + 698)
        break
      case 3: 
        setFinalScore(Math.floor(Math.random() * 67) + 630)
        break
      case 2:
        setFinalScore(Math.floor(Math.random() * 99) + 530)
        break
      case 1:
        setFinalScore(Math.floor(Math.random() * 75) + 454)
        break
      case 0: 
        setFinalScore(Math.floor(Math.random() * 118) + 335)
        break
      default: setFinalScore(Math.floor(Math.random() * 335))
    }
  }
  
  const LazyQuiz1 = lazy(() => import('./AnswerText/Answer1'))
  const LazyQuiz2 = lazy(() => import('./AnswerText/Answer2'))
  const LazyQuiz3 = lazy(() => import('./AnswerText/Answer3'))
  const LazyQuiz4 = lazy(() => import('./AnswerText/Answer4'))
  const LazyQuiz5 = lazy(() => import('./AnswerText/Answer5'))
  const LazyQuiz6 = lazy(() => import('./AnswerText/Answer6'))
  const LazyQuiz7 = lazy(() => import('./AnswerText/Answer7'))
  const LazyQuiz8 = lazy(() => import('./AnswerText/Answer8'))

  const [finishQuiz, setFinishQuiz] = useState(false)
  if(finishQuiz) return null
  return (
    <QuizPageContainer>
      {currentPage !== 9 ? <Title>신용등급 조회하기</Title> : null}
      <InnerBox aria-current={1 === currentPage ? 'page' : undefined}>
        {quizView
          ? <>
              <Quiz1 />
              <Button onClick={correctAnswerHandler} width='170px' right='auto' left='0' color='#fff' bgColor='#0066F6'>예</Button>
              <Button onClick={wrongAnswerHandler} width='170px' right='0' left='auto' color='#333' bgColor='#fff' border='solid 1px #666'>아니오</Button>
            </>
          : <Suspense fallback={<p>Loading..</p>}>
              <LazyQuiz1 />
              <Button onClick={nextQuiz} width='100%' color='#fff' bgColor='#0066F6'>다음</Button>
            </Suspense>}
      </InnerBox>
      <InnerBox aria-current={currentPage === 2 ? 'page' : undefined}>
        {quizView
          ? <>
              <Quiz2 />
              <Button onClick={wrongAnswerHandler} width='170px' right='auto' left='0' color='#fff' bgColor='#0066F6'>예</Button>
              <Button onClick={correctAnswerHandler} width='170px' right='0' left='auto' color='#333' bgColor='#fff' border='solid 1px #666'>아니오</Button>
            </>
          : <Suspense fallback={<p>Loading..</p>}>
              <LazyQuiz2 />
              <Button onClick={nextQuiz} width='100%' color='#fff' bgColor='#0066F6'>다음</Button>
            </Suspense>}
      </InnerBox>
      <InnerBox aria-current={currentPage === 3 ? 'page' : undefined}>
        {quizView
          ? <>
              <Quiz3 />
              <Button onClick={correctAnswerHandler} width='170px' right='auto' left='0' color='#fff' bgColor='#0066F6'>예</Button>
              <Button onClick={wrongAnswerHandler} width='170px' right='0' left='auto' color='#333' bgColor='#fff' border='solid 1px #666'>아니오</Button>
            </>
          : <Suspense fallback={<p>Loading..</p>}>
              <LazyQuiz3 />
              <Button onClick={nextQuiz} width='100%' color='#fff' bgColor='#0066F6'>다음</Button>
            </Suspense>}
      </InnerBox>
      <InnerBox aria-current={currentPage === 4 ? 'page' : undefined}>
        {quizView
          ? <>
              <Quiz4 />
              <Button onClick={correctAnswerHandler} width='170px' right='auto' left='0' color='#fff' bgColor='#0066F6'>예</Button>
              <Button onClick={wrongAnswerHandler} width='170px' right='0' left='auto' color='#333' bgColor='#fff' border='solid 1px #666'>아니오</Button>
            </>
          : <Suspense fallback={<p>Loading..</p>}>
              <LazyQuiz4 />
              <Button onClick={nextQuiz} width='100%' color='#fff' bgColor='#0066F6'>다음</Button>
            </Suspense>}
      </InnerBox>
      <InnerBox aria-current={currentPage === 5 ? 'page' : undefined}>
        {quizView
          ? <>
              <Quiz5 />
              <Button onClick={wrongAnswerHandler} width='170px' right='auto' left='0' color='#fff' bgColor='#0066F6'>예</Button>
              <Button onClick={correctAnswerHandler} width='170px' right='0' left='auto' color='#333' bgColor='#fff' border='solid 1px #666'>아니오</Button>
            </>
          : <Suspense fallback={<p>Loading..</p>}>
              <LazyQuiz5 />
              <Button onClick={nextQuiz} width='100%' color='#fff' bgColor='#0066F6'>다음</Button>
            </Suspense>}
      </InnerBox>
      <InnerBox aria-current={currentPage === 6 ? 'page' : undefined}>
        {quizView
          ? <>
              <Quiz6 />
              <Button onClick={wrongAnswerHandler} width='170px' right='auto' left='0' color='#fff' bgColor='#0066F6'>예</Button>
              <Button onClick={correctAnswerHandler} width='170px' right='0' left='auto' color='#333' bgColor='#fff' border='solid 1px #666'>아니오</Button>
            </>
          : <Suspense fallback={<p>Loading..</p>}>
              <LazyQuiz6 />
              <Button onClick={nextQuiz} width='100%' color='#fff' bgColor='#0066F6'>다음</Button>
            </Suspense>}
      </InnerBox>
      <InnerBox aria-current={currentPage === 7 ? 'page' : undefined}>
        {quizView
          ? <>
              <Quiz7 />
              <Button onClick={correctAnswerHandler} width='170px' right='auto' left='0' color='#fff' bgColor='#0066F6'>예</Button>
              <Button onClick={wrongAnswerHandler} width='170px' right='0' left='auto' color='#333' bgColor='#fff' border='solid 1px #666'>아니오</Button>
            </>
          : <Suspense fallback={<p>Loading..</p>}>
              <LazyQuiz7 />
              <Button onClick={nextQuiz} width='100%' color='#fff' bgColor='#0066F6'>다음</Button>
            </Suspense>}
      </InnerBox>
      <InnerBox aria-current={currentPage === 8 ? 'page' : undefined}>
        {quizView
          ? <>
              <Quiz8 />
              <Button onClick={correctAnswerHandler} width='170px' right='auto' left='0' color='#fff' bgColor='#0066F6'>예</Button>
              <Button onClick={wrongAnswerHandler} width='170px' right='0' left='auto' color='#333' bgColor='#fff' border='solid 1px #666'>아니오</Button>
            </>
          : <Suspense fallback={<p>Loading..</p>}>
              <LazyQuiz8 />
              <Button onClick={nextQuiz} width='100%' color='#fff' bgColor='#0066F6'>다음</Button>
            </Suspense>}
      </InnerBox>
      <InnerBox aria-current={currentPage === 9 ? 'page' : undefined}>
        <ResultScore finalScore={865} />
        <Button onClick={() => setFinishQuiz(true)} width='100%' color='#fff' bgColor='#0066F6'>다음</Button>
      </InnerBox>
    </QuizPageContainer>
  )
}

export default creditScoreQuiz