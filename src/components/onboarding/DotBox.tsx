import React from 'react';
import styled from 'styled-components';


const DotWrapper = styled.div`
  position:absolute;
  display:flex;
  gap:2px;
  bottom:49px;
  left: 10px; 
  width:fit-content;
  height:fit-content;
`
const Dot = styled.div`
  width:  ${(props) => props['aria-current'] ==='page' ? "34px" : "12px"};
  height: 12px;
  background:  ${(props) => props['aria-current'] ==='page' ? "#0066f6" : "#c4c4c4"};
  border-radius: 9999px;
  transition: 250ms;
`

interface DotBoxProps {
  currentPage : number;
}

const DotBox = ({currentPage}:DotBoxProps) => {
  return (
    <DotWrapper>
        <Dot aria-current={0 === currentPage ? 'page' : undefined} />
        <Dot aria-current={1 === currentPage ? 'page' : undefined} />
        <Dot aria-current={2 === currentPage ? 'page' : undefined} />
      </DotWrapper>
  );
};

export default DotBox;