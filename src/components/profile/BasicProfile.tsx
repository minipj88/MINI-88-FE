import React from 'react';
import styled from 'styled-components';
import ProfileLayout from '../../shared/util/ui/ProfileLayout';



interface BasicProfileProps {
  changeModeHandler: () => void;
  selectedImage:string;
  
}

const BasicProfile = ({changeModeHandler,selectedImage}:BasicProfileProps) => {

  
  return (
    <ProfileLayout selectedImage={selectedImage} changeModeHandler={changeModeHandler} onClick={changeModeHandler} type="basic">
    

    
  </ProfileLayout>
  );
};

export default BasicProfile;