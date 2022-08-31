import React from 'react'
import styled from 'styled-components'
import FilterBar from './FilterBar'
import priductsData from '../../../store/slices/product.json'


const Title = styled.span`
  font-size: 17px;
  font-weight: 600;
`
const ProductsBox = styled.div`
  display: flex;
`
const LogoBox = styled.div`
  flex-grow: 1;
  text-align: center;
`
const ProductInfoBox = styled.div`
  flex-grow: 2;
`


function CreditProducts() {


  return (
    <div>
      <Title>필요한 대출을 직접 찾아보세요.</Title>
      <FilterBar />
      <div>
      {priductsData.map((item) => {
        return (
          <ProductsBox key={item.id}>
            <LogoBox>
              <img src={item.img} alt="상품회사로고" width='60%'/>
            </LogoBox>
            <ProductInfoBox>
              <strong>{item.financialCompanyName}</strong>
              <p>{item.productName}</p>
              <p>{item.rate}</p>
              
              <p>{item.cbName}</p>
              <p>{item.productType}</p>
            </ProductInfoBox>
          </ProductsBox>
        )
      })}
      </div>
    </div>
  )
}

export default CreditProducts