import React from 'react'
import styled from 'styled-components'
import FilterBar from './FilterBar'
import priductsData from '../../../store/slices/product.json'


const Title = styled.span`
  font-size: 17px;
  font-weight: 600;
`


function CreditProducts() {


  return (
    <div>
      <Title>필요한 대출을 직접 찾아보세요.</Title>
      <FilterBar />
      {priductsData.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.productName}</p>
            <p>{item.rate}</p>
            <p>{item.financialCompanyName}</p>
            <p>{item.cbName}</p>
            <p>{item.productType}</p>
            <img src={item.img} alt="" />
          </div>
        )
      })}
    </div>
  )
}

export default CreditProducts