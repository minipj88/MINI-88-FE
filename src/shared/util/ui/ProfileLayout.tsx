import React, { ChangeEvent, ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import JobDropdownList from '../../../components/auth/signup/JobDropdownList';
import { FormValueTypes } from '../../../components/auth/signup/SignupForm';
import { logout } from '../../../store/slices/authSlice';
import { useProfileChangeMutation } from '../../../store/slices/profileSlice';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import Button from './Button';

const Wrapper = styled.div`
  font-family: 'Noto sans KR', sans-serif;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  p {
    font-weight: bold;
  }
`;
const ImageBox = styled.div`
  position: relative;
  width: 96px;
  height: 96px;
  border-radius: 96px;

  margin: 0 auto;
  img {
    border-radius: 96px;
  }
`;

const ImageChangeButtonBox = styled.div`
  position: absolute;
  width: 36px;
  height: 36px;
  border-radius: 36px;
  bottom: -2px;
  right: -4px;
  background-color: #fff;
`;
const InfoTitle = styled.span`
  min-width: 60px;
`;

const ImageChangeButton = styled.button`
  position: absolute;
  width: 28px;
  height: 28px;
  border-radius: 28px;
  border: none;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const InfomationBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  margin-top: 40px;
  min-height: 42px;
  span {
    padding: 4px 10px;
  }
  input {
    padding: 2px;
    margin-right: 14px;
    width: 100%;
    height: 40px;
    font-size: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;
interface ProfileLayoutProps {
  selectedImage: string;
  
  changeModeHandler: () => void;
  onClick?: () => void;
  imageInputRef?: React.RefObject<HTMLInputElement>;
  type: 'basic' | 'edit';
  imageChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
  setSelectedImage: React.Dispatch<React.SetStateAction<string>>;
}
const ProfileLayout = ({
  setSelectedImage,
  selectedImage,
  
  changeModeHandler,
  onClick,
  imageInputRef,
  type,
  imageChangeHandler,
}: ProfileLayoutProps) => {
  const user = useAppSelector((state) => state.auth.userData);
  const [formValue, setFormValue] = useState<FormValueTypes>({
    email: user.email,
    password: '',
    passwordConfirm: '',
    age: user.age,
    name: user.name,
    job: user.job,
    profilePhoto: selectedImage || user.profilePhoto,
  });
  const dispatch = useAppDispatch();
  const [profileChange, { data }] = useProfileChangeMutation();
  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { name, value },
    } = e;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  const backToBasickProfileHandler = () => {
    changeModeHandler();
    setSelectedImage('');
  };

  const profileChangeHandler = () => {
    profileChange({
      age: formValue.age,
      job: formValue.job,
      name: formValue.name,
      profilePhoto: selectedImage,
    });
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Wrapper>
      <Header>
        <Link to="/">
          <img src={'/close.png'} width={10} height={10} />
        </Link>
        <p>{user.name}님의 정보</p>
        <p onClick={backToBasickProfileHandler}>{type === 'edit' ? '뒤로' : '수정'}</p>
      </Header>
      <input ref={imageInputRef} type="file" hidden onChange={imageChangeHandler} />
      <ImageBox>
        <img src={selectedImage || 'https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927'} width={96} height={96} />
        <ImageChangeButtonBox>
          <ImageChangeButton onClick={onClick}>
            <img src="/add.png" width={14} height={13.4} />
          </ImageChangeButton>
        </ImageChangeButtonBox>
      </ImageBox>
      <div>
        <InfomationBox>
          <InfoTitle style={{ minWidth: '60px' }}>성함</InfoTitle>
          {type === 'basic' ? (
            <span>{user.name}</span>
          ) : (
            <input name="name" type="text" value={formValue.name} onChange={inputChangeHandler} />
          )}
        </InfomationBox>
        <InfomationBox>
          <InfoTitle style={{ minWidth: '60px' }}>직업</InfoTitle>
          {type === 'basic' ? (
            <span>{user.job}</span>
          ) : (
            <JobDropdownList formValue={formValue} setFormValue={setFormValue} size="300px" />
          )}
        </InfomationBox>
        <InfomationBox>
          <InfoTitle style={{ minWidth: '60px' }}>나이</InfoTitle>
          {type === 'basic' ? (
            <span>{user.age}</span>
          ) : (
            <input name="age" type="number" min={20} max={100} value={formValue.age} onChange={inputChangeHandler} />
          )}
        </InfomationBox>
        <InfomationBox>
          <InfoTitle style={{ minWidth: '60px' }}>이메일</InfoTitle>
          <span>{user.email}</span>
        </InfomationBox>
      </div>
      
      {type === 'edit' && (
        <div style={{ position: 'absolute', bottom: '4px', right: '0', left: '2px', width: '100%' }}>
          <Button
            width="94%"
            height="42px"
            color="white"
            text="수정완료"
            onClick={profileChangeHandler}
            bgColor="#0066F6"
            buttonBorder="none"
            totalValid={true}
          />
        </div>
      )}
      {type === 'basic' && (
        <div style={{ position: 'absolute', bottom: '4px', right: '0', left: '2px', width: '100%' }}>
          <Button
            width="94%"
            height="42px"
            color="white"
            text="로그아웃"
            onClick={logoutHandler}
            bgColor="#0066F6"
            buttonBorder="none"
            totalValid={true}
          />
        </div>
      )}
    </Wrapper>
  );
};

export default ProfileLayout;
