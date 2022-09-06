import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../../store/store';

const Wrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 82px;
  position: fixed;
  top:0;
  background-color: #eee;
`;
const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 24px;

  img {
    width: 36px;
    height: 36px;
    border-radius: 36px;
  }
`;
const IconBox = styled.ul`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 25px;
  position: absolute;
  right: 30px;
  bottom: 4px;
`;

const TopNavigation = () => {
  const userImage = useAppSelector((state) => state.auth.userData.profilePhoto);
  return (
    <Wrapper>
      <IconBox>
        <li>
          <Link to="/cart">
            <img src={`/bookmark.png`} alt="" width={18} height={24} />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <Avatar>
              <img src={userImage || 'https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927'} alt="" />
            </Avatar>
          </Link>
        </li>
      </IconBox>
    </Wrapper>
  );
};

export default TopNavigation;
