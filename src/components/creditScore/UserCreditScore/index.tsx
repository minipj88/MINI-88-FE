import { useEffect, useState } from 'react';
import CreditScoreQuiz from './creditScoreQuiz';
import styled from 'styled-components';
// import { useGetUserInfoQuery } from '../../../store/slices/creditScoreSlice';
import { useAppSelector } from '../../../store/store';

interface TextProps {
  paddingTop?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  margin?: string;
  decoration?: string;
}
interface UserCreditRateProps {
  direction: string;
  content?: any;
}
interface CreditRateSubName {
  from: string;
  to: string;
}

const Container = styled.div`
  height: 333px;
`;
const Text = styled.span<TextProps>`
  display: inline-block;
  margin: ${({ margin }) => margin};
  padding-top: ${({ paddingTop }) => paddingTop};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
  text-decoration: ${({ decoration }) => decoration};
`;
const TitleSub = styled.div<TextProps>`
  margin-top: 6px;
  font-size: 14px;
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
`;
const UserCreditRate = styled.div<UserCreditRateProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  padding: 50px 0 45px 0;
  text-align: center;
  ::before {
    content: ${({ content }) => content};
    background-color: #cbcbcb;
    width: 1px;
    height: 80px;
    position: absolute;
    left: 50%;
  }
`;
const Button = styled.button`
  background: #0066f6;
  width: 311px;
  height: 50px;
  margin-top: 40px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 0 3px 6px #a0a0a0;
`;
const CreditTitle = styled.span`
  display: block;
  margin-bottom: 14px;
  font-size: 16px;
  font-weight: 600;
  color: #454545;
`;
const CreditScoreBox = styled.div`
  flex-basis: 179px;
`;
const CreditRateBox = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 10px;
`;
const CreditRateSubName = styled.span<CreditRateSubName>`
  display: inline-block;
  margin-top: 4px;
  font-size: 20px;
  font-weight: 700;
  background: -webkit-gradient(linear, right top, left bottom, from(${({ from }) => from}), to(${({ to }) => to}));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function UserCreditScore() {
  const { resultCreditScore, creditRating } = useAppSelector((state) => state.creditScore.creditScoreData);
  const [rateName, setRateName] = useState<string>('');
  const [restRate, setRestRate] = useState<string[]>(['']);
  const [quizView, setQuizView] = useState<boolean>(false);

  // 사용자 데이터에 신용등급이 있는지 (테스트 스테이트)
  const [data, setData] = useState(false);

  function userRate() {
    if (resultCreditScore >= 832) {
      setRateName('우량 신용자');
    } else if (832 > resultCreditScore && resultCreditScore >= 630) {
      setRateName('보통 신용자');
    } else if (630 > resultCreditScore) {
      setRateName('저 신용자');
    }
    const rate: string[] = ['우량 신용자', '보통 신용자', '저 신용자'];
    setRestRate(rate.filter((item) => item !== rateName));
  }

  useEffect(() => {
    userRate();
  }, [resultCreditScore]);

  if (resultCreditScore) {
    return (
      <Container>
        <div>
          <Text paddingTop="38px" fontSize="25px" fontWeight="700" color="#0066F6">
            신용점수 조회하기
          </Text>
          <TitleSub fontWeight="400" color="#333">
            {}김명성님의 신용평가 결과
          </TitleSub>
        </div>
        <UserCreditRate direction="row" content='""'>
          <CreditScoreBox>
            <CreditTitle>신용평점</CreditTitle>
            <Text fontSize="50px" fontWeight="700">
              <Text color="#0066F6">{resultCreditScore}</Text>점
            </Text>
          </CreditScoreBox>
          <CreditScoreBox>
            <CreditTitle>신용등급</CreditTitle>
            <Text fontSize="50px" fontWeight="700">
              <Text color="#0066F6">{creditRating}</Text>등급
            </Text>
          </CreditScoreBox>
        </UserCreditRate>
        <CreditRateBox>
          <CreditRateSubName from="#b7b7b7" to="#fff">
            {restRate[0]}
          </CreditRateSubName>
          <Text fontSize="24px" fontWeight="700" color="#0066F6" margin="0 14px" decoration="underline">
            {rateName}
          </Text>
          <CreditRateSubName from="#fff" to="#b7b7b7">
            {restRate[1]}
          </CreditRateSubName>
        </CreditRateBox>
      </Container>
    );
  } else {
    return (
      <Container>
        <div>
          <Text paddingTop="38px" fontSize="25px" fontWeight="700" color="#0066F6">
            신용점수 조회하기
          </Text>
          <TitleSub fontWeight="300" color="#001533">
            {}김명성님의 신용 점수
          </TitleSub>
        </div>
        <UserCreditRate direction="column">
          <Text fontSize="50px" fontWeight="700">
            <Text color="#0066F6">???</Text>점 / <Text color="#0066F6">1000</Text>점
          </Text>
          {quizView ? <CreditScoreQuiz /> : <Button onClick={() => setQuizView(true)}>1분 만에 조회하기</Button>}
        </UserCreditRate>
      </Container>
    );
  }
}

export default UserCreditScore;
