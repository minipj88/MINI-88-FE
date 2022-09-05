import React from 'react';
import styled from 'styled-components';
import ProfileLayout from '../../shared/util/ui/ProfileLayout';



interface BasicProfileProps {
  changeModeHandler: () => void;
  selectedImage:string;
  setSelectedImage: React.Dispatch<React.SetStateAction<string>>
}

const BasicProfile = ({changeModeHandler,selectedImage,setSelectedImage}:BasicProfileProps) => {

  
  return (
    <ProfileLayout selectedImage={selectedImage} changeModeHandler={changeModeHandler} onClick={changeModeHandler} setSelectedImage={setSelectedImage} type="basic">
  </ProfileLayout>
  );
};

export default BasicProfile;