import React, { Component } from 'react'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import priductsData from '../../../../store/slices/product.json'


const FilterButton = styled.button`
  width: 50px !important;
  height: 50px;
  border: 2px solid #0066F6;
  border-radius: 25px;
`


function FilterBar() {
  

  return (
    <div>
      {priductsData.map((item) => {
        return (
          <>
            <p>item.productName</p>
            <p>item.rate</p>
            <p>item.financialCompanyName</p>
            <p>item.cbName</p>
            <p>item.productType</p>
            <img src={item.img} alt="" />
          </>
        )
      })}
      <FilterButton>
        
      </FilterButton>
    </div>
  );
}

export default FilterBar

