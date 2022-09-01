import React from 'react'
import styled from 'styled-components'
import products from '../../store/slices/product.json'


const Container = styled.div`
  height: 100%;
  position: relative;
  margin: 82px 16px 0 16px;
`
const TitleBox = styled.div`
  padding: 28px 0;
  border-bottom: 1px solid #ccc;
`
const Title = styled.span`
  font-size: 22px;
  font-weight: 700;
`


function Cart() {
  return (
    <Container>
      <TitleBox>
        <Title>내가 찜한 상품</Title>
      </TitleBox>
      <div>
      {products.map(item => {
        return (
        <>
          <p>{item.productName}</p>
          <p>{item.rate}</p>
          <p>{item.financialCompanyName}</p>
          <p>{item.cbName}</p>
          <p>{item.productType}</p>
          <img src={item.img} alt="" />
        </>
      )})}
      </div>
    </Container>
  )
}

export default Cart