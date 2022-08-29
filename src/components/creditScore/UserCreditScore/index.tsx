import { useState } from 'react'
import CreditScoreQuiz from '../creditScoreQuiz'
import styled from 'styled-components'
import { useGetUserInfoQuery } from '../../../store/slices/creditScoreSlice';
import { useAppSelector } from '../../../store/store';


interface TextProps {
  paddingTop?: string
  fontSize?: string
  fontWeight?: string
  color?: string
}
interface UserCreditRateProps {
  direction: string
}

const TestBg = styled.div`
  background-color: #EFEFEF;
  height: 333px;
`
const Text = styled.span<TextProps>`
  display: inline-block;
  padding-top: ${({paddingTop}) => paddingTop};
  font-size: ${({fontSize}) => fontSize};
  font-weight: ${({fontWeight}) => fontWeight};
  color: ${({color}) => color};
`
const TitleSub = styled.div`
  margin-top: 6px;
  font-size: 14px;
  font-weight: 300;
  color: #001533;
`
const UserCreditRate = styled.div<UserCreditRateProps>`
  display: flex;
  flex-direction: ${({direction}) => direction};
  align-items: center;
  padding: 55px 0;
  text-align: center;
  ::before {
    content: "";
    background-color: #CBCBCB;
    width: 1px;
    height: 80px;
    position: absolute;
    left: 50%;
  }
`
const Button = styled.button`
  background: #0066F6;
  width: 311px;
  height: 50px;
  margin-top: 40px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  border: none;
  border-radius: 5px;
`
const CreditTitle = styled.span`
  display: block;
  margin-bottom: 14px;
  font-size: 16px;
  font-weight: 600;
  color: #454545;
`
const CreditBox = styled.div`
  flex-basis: 179px;
`


function UserCreditScore() {
  // const { data: posts, isLoading, isError } = useGetUserInfoQuery()
  const [quizView, setQuizView] = useState(false)

  // 사용자 데이터에 신용등급이 있는지 (테스트 스테이트)
  const [data, setData] = useState(false)

if(!data) {
  return (
    <TestBg>
      
    </TestBg>
  )
} else {
  return (
    <TestBg>
      <div>
        <Text paddingTop='38px' fontSize='25px' fontWeight='700' color='#0066F6'>신용점수 조회하기</Text>
        <TitleSub>{}김명성님의 신용 점수</TitleSub>
      </div>
      <UserCreditRate direction='column'>
        <Text fontSize='50px' fontWeight='700'><Text color='#0066F6'>???</Text>점 / <Text color='#0066F6'>1000</Text>점</Text>
        {quizView ? <CreditScoreQuiz /> : <Button onClick={() => setQuizView(true)}>1분 만에 조회하기</Button>}
      </UserCreditRate>
    </TestBg>
  )
}
}

export default UserCreditScore