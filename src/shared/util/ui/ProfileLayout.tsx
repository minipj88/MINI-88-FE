import React, { ChangeEvent, ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import JobDropdownList from '../../../components/auth/signup/JobDropdownList';
import { FormValueTypes } from '../../../components/auth/signup/SignupForm';
import { useAppSelector } from '../../../store/store';
import Button from './Button';


const Wrapper = styled.div`
  font-family: 'Noto sans KR',sans-serif;
  width:100%;
`


const Header = styled.div`
  display:flex;
  justify-content:space-between;
  padding: 16px;
  align-items:center;
  
  p{
    font-weight:bold;
  }
`
const ImageBox = styled.div`
  position:relative;
  width: 96px;
  height: 96px;
  border-radius: 96px;
  
  margin: 0 auto;
  img{
    border-radius: 96px;
  }
`

const ImageChangeButtonBox = styled.div`
 
  position: absolute;
  width: 36px;
  height: 36px;
  border-radius:36px;
  bottom:-2px;
  right:-4px; 
  background-color: #fff;
  
`

const ImageChangeButton = styled.button`
  position:absolute;
  width: 28px;
  height: 28px;
  border-radius: 28px; 
  border:none;
  background-color: #ddd;
  display:flex;
  align-items:center;
  justify-content:center;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
`

const InfomationBox = styled.div`
  display:flex;
  justify-content: space-between;
  align-items:center;
  font-size:20px;
  margin-top: 40px;
  min-height: 42px;
  span{
    padding: 4px 10px;
    
  }
  input{
    padding: 2px;
    margin: 0 auto;
    width: 300px;
    height: 40px;
    font-size: 20px;
  }
`
interface ProfileLayoutProps {
  selectedImage:string;
  children:ReactNode;
  changeModeHandler:() => void
  onClick?: () => void
  imageInputRef?: React.RefObject<HTMLInputElement>
  type: 'basic' | 'edit';
  imageChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => void
}
const ProfileLayout = ({selectedImage,children,changeModeHandler,onClick,imageInputRef,type,imageChangeHandler}:ProfileLayoutProps) => {
  const user = useAppSelector(state => state.auth.userData);
  const [formValue,setFormValue] = useState<FormValueTypes>({
    email: '',
    password: '',
    passwordConfirm: '',
    age:0,
    username: user.username,
    job: user.job
  })
  
  const inputChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const {currentTarget:{name,value}} = e;
    setFormValue({
      ...formValue,
      [name]:value
    })
  }
  console.log(formValue);
  return (
    <Wrapper>
      <Header>
      <Link to="/"><img src={selectedImage || '/close.png'} width={10} height={10} /></Link>
    <p>김명성님의 정보</p>
    <p onClick={changeModeHandler}>수정</p>
    </Header>
    <input ref={imageInputRef} type="file" hidden onChange={imageChangeHandler} />
    <ImageBox >
    <img src={`/basicprofile.png`} width={96} height={96}/>
    <ImageChangeButtonBox>
    <ImageChangeButton onClick={onClick}>
      <img src="/add.png" width={14} height={13.4} />
    </ImageChangeButton>
    </ImageChangeButtonBox>
    </ImageBox>
    <div>
      <InfomationBox><span>이름</span>{type === 'basic' ? <span>김명성</span> : <input name="username" type="text" value={formValue.username} onChange={inputChangeHandler} />}</InfomationBox>
      <InfomationBox><span style={{minWidth:'50px'}}>직업</span>{type === 'basic' ? <span>무직</span> : <JobDropdownList formValue={formValue} setFormValue={setFormValue} size='310px' />}</InfomationBox>
      <InfomationBox><span >이메일</span><span>forwarm5891@gmail.com</span></InfomationBox>
    </div>
    {children}
    {type ==="edit"
    && <div style={{position:'absolute', bottom:'4px',right:"0",left:'2px',width:'100%'}}>
    <Button width='94%' height='42px' color="white" text="수정완료" onClick={() => {}} bgColor="#0066F6" buttonBorder='none' totalValid={true} />
    </div>}
    </Wrapper>
  );
};

export default ProfileLayout;