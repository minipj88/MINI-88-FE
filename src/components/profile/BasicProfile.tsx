import React from 'react';
import styled from 'styled-components';
import ProfileLayout from '../../shared/util/ui/ProfileLayout';



const Wrapper = styled.div`
  font-family: 'Noto sans KR',sans-serif;
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
  border: 2px solid black;
  margin: 0 auto;
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
  font-size:20px;
  margin-top: 30px;
  span{
    padding: 4px 10px;
    
  }
`
interface BasicProfileProps {
  changeModeHandler: () => void;
  selectedImage:string;
  
}

const BasicProfile = ({changeModeHandler,selectedImage}:BasicProfileProps) => {
  return (
    <ProfileLayout selectedImage={selectedImage} changeModeHandler={changeModeHandler}>
    
    <input  type="file" hidden onChange={changeModeHandler} />
    <ImageBox >
    <img src="/profile.png" width={96} height={96}/>
    <ImageChangeButtonBox>
    <ImageChangeButton onClick={changeModeHandler}>
      <img src="/add.png" width={14} height={13.4} />
    </ImageChangeButton>
    </ImageChangeButtonBox>
    </ImageBox>
    <div>
      <InfomationBox><span>이름</span><span>김명성</span></InfomationBox>
      <InfomationBox><span>직업</span><span>무직</span></InfomationBox>
      <InfomationBox><span>이메일</span><span>forwarm5891@gmail.com</span></InfomationBox>
    </div>
  </ProfileLayout>
  );
};

export default BasicProfile;