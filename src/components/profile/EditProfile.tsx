import React, { ChangeEvent, useRef } from 'react';
import ProfileLayout from '../../shared/util/ui/ProfileLayout';

interface EditProfileProps {
  selectedImage:string
  setSelectedImage: React.Dispatch<React.SetStateAction<string>>
  imageInputRef:React.RefObject<HTMLInputElement>
  changeModeHandler:() => void
}

const EditProfile = ({selectedImage,setSelectedImage,imageInputRef,changeModeHandler}:EditProfileProps) => {
  
  const imageChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    if(!e.currentTarget.files) return;
    const {currentTarget:{files:currentFile}} = e;
    let fileUrl:string = '';
    let fileReader = new FileReader();
    fileReader.onload = () => {
      fileUrl = fileReader.result as string;
      setSelectedImage(() => fileUrl);
    };
    
    fileReader.readAsDataURL(currentFile[0]);
  }

  return (
    <ProfileLayout selectedImage={selectedImage} changeModeHandler={changeModeHandler}>
      안녕 난 에디터
    </ProfileLayout>
  );
};

export default EditProfile;