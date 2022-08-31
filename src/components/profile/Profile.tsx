import React, { ChangeEvent, useRef, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../store/store';
import BasicProfile from './BasicProfile';
import EditProfile from './EditProfile';


const Profile = () => {
  const user = useAppSelector(state => state.auth.userData);
  const {username,age,email,job} = user;
  const [selectedImage,setSelectedImage] = useState('')
  const [isEditProfile,setIsEditProfile] = useState(false)
  const imageInputRef = useRef<HTMLInputElement>(null)
  const imageInputClickHandler = () => {
    imageInputRef.current?.click()
  }

  
  const changeModeHandler = (page:string = '') => {
    if(window.confirm(`프로필 ${page || ''} 페이지로 이동하시겠습니까?`)){
      setIsEditProfile(prev => !prev)
    }
    
  }
  console.log(selectedImage);
  return (
    <>
    {isEditProfile && <EditProfile changeModeHandler={() => changeModeHandler('기본')} selectedImage={selectedImage} setSelectedImage={setSelectedImage} imageInputRef={imageInputRef} />}
    {!isEditProfile && <BasicProfile changeModeHandler={() => changeModeHandler('수정')} selectedImage={selectedImage} />}
    </>
  );
};

export default Profile;