import styled from 'styled-components'


interface PropsTypes{
  finalScore: number,
  User?: string
}


const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 100px;
`
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 26px;
`
const LineHeight = styled.div`
  margin-top: 10px;
`
const Strong = styled.span`
  font-size:  36px;
  font-weight: 700;
  color: #0066F6;
`
const Normal = styled.span`
  font-size:  34px;
  font-weight: 600;
`

function ResultScore({finalScore, User = '김명성'}: PropsTypes) {  
  return (
    <ResultContainer>
      <img src="/creditScoreImg/check-circle.png" alt="체크원" width='160px'  />
      <TextBox>
        <div><Strong>{User}</Strong><Normal>님의 신용점수는</Normal></div>
        <LineHeight><Strong>{finalScore}</Strong><Normal>입니다.</Normal></LineHeight>
      </TextBox>
    </ResultContainer>
  )
}

export default ResultScore