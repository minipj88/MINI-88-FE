import { useState } from 'react'
import styled from 'styled-components'


interface ButtonStyleProps {
  border: string
}
interface buttonTypes {
  id: string
  name: string
  tap: boolean
  img: string
  size: string
  filter: string
}
interface textStyleProps {
  weight: string
  color: string
}

const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 18px 0;
`
const ButtonBox = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FilterButton = styled.div<ButtonStyleProps>`
  background-color: #efefef;
  width: 50px !important;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({border}) => border};
  border-radius: 50%;
  box-sizing: border-box;
`
const Title = styled.span<textStyleProps>`
  display: inline-block;
  margin-top: 10px;
  font-size: 14px;
  font-weight: ${({weight}) => weight};
  color: ${({color}) => color};
`


function FilterBar() {
  const [searchFilterButton, setSearchFilterButton] = useState<buttonTypes[]>([
    {
      id: 'B1',
      name: '전체',
      tap: true,
      img: '/creditScoreImg/allCategoryIcon.png',
      size: '24px',
      filter: 'all'
    },
    {
      id: 'B2',
      name: '신용',
      tap: false,
      img: '/creditScoreImg/creditIcon.png',
      size: '18px',
      filter: 'credit'
    },
    {
      id: 'B3',
      name: '주택',
      tap: false,
      img: '/creditScoreImg/houseIcon.png',
      size: '20px',
      filter: 'house'
    },
    {
      id: 'B4',
      name: '전세자금',
      tap: false,
      img: '/creditScoreImg/checkIcon.png',
      size: '18px',
      filter: 'funds'
    }
  ])


  function buttonHandler(id: string, filter: string) {
    let newFilterButton = searchFilterButton.map(item => {
      if(item.id === id && item.tap === false) {
        return {
          ...item,
          tap: true
        }
      }
      else {
        return {
          ...item,
          tap: false
        }
      }
    })
    setSearchFilterButton(newFilterButton)
    // api 요청 item.filter
  }

  
  return (
    <Container>
      {searchFilterButton.map((item) => {
        return (
          <ButtonBox key={item.id}>
            <FilterButton onClick={() => buttonHandler(item.id, item.filter)} border={item.tap ? '4px solid #0066F6' : 'none'} >
              <img src={item.img} alt="" height={item.size} />
            </FilterButton>
            <Title weight={item.tap ? '600' : '300'} color={item.tap ? '#333' : '#707070'}>{item.name}</Title>
          </ButtonBox>
        )
      })}
    </Container>
  );
}

export default FilterBar
