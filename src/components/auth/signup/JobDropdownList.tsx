

import React, { useState } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  width:100%;
  height: 50px;
  margin: 10px 0;
`
const DropdownHeader = styled.div`
  margin-bottom: 10px;
  font-weight:bold;
  color: #0066F6;
  background: #fff;
  text-align: center;
  padding: 20px 0;
  border: 1px solid #e5e5e5;
`

const DropdownListContainer = styled.div`
  
`

const DropdownList = styled.ul`
  position:absolute;
  border: 1px solid #e5e5e5;
  color: #0066F6;
  font-size: 18px;
  font-weight:bold;
  background-color:#fff;
  z-index: 10;
  width:90%;
  &:first-child{
    padding-top: 12px;
  }
`

const ListItem = styled.li`
  list-style:none;
  margin-bottom: 14px;
  font-size: 14px;
  width:calc(90% + 16px);
  padding-left: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e5e5e5;
  color:#001533;
`

const jobDescriptionArray = ['회사원','사업자','공무원','기타(프리랜서,아르바이트 등)','무직(주부 등)'];

const SignupJobInput = () => {
  const [isOpen,setIsOpen] = useState(false);
  const [selectedOption,setSelectedOption] = useState<string | null>(null);

  const toggleHandler = () => {
    setIsOpen(prev => !prev);
  }
  const selectOptionHandler = (value:string) => {
    setSelectedOption(value);
    setIsOpen(false);
  }
  return (
    <Wrapper>
      
      <DropdownHeader onClick={toggleHandler}>{selectedOption || "직업을 선택하세요."}</DropdownHeader>
      {isOpen && <DropdownListContainer>
        <DropdownList>
        {jobDescriptionArray.map((item) => <ListItem key={item} value={item} onClick={() => selectOptionHandler(item)}>{item}</ListItem>)}
        </DropdownList>
      </DropdownListContainer>}
    </Wrapper>

  );
};

export default SignupJobInput;