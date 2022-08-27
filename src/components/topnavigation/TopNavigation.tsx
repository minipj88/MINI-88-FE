import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Wrapper = styled.nav`
  width:100%;
  height:42px;
  position: fixed;
  top:40px;
  right:30px;


`
const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 24px;
  border: 2px solid red;
`
const IconBox = styled.ul`
  display:flex;
  justify-content:end;
  align-items:center;
  gap:25px;

`

const TopNavigation = () => {
  return (
    <Wrapper>
      <IconBox>
        <li><Link to="/cart"><img src={`/bookmark.png`} alt="" width={18} height={24} /></Link></li>
        <li>
          <Link to="/profile"><Avatar></Avatar></Link>
        </li>
      </IconBox>
    </Wrapper>
  );
};

export default TopNavigation;