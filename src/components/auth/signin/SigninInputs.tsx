import React, { ChangeEvent, useEffect, useState } from 'react';
import useValid from '../../../hooks/useValid';
import Input from '../../../shared/util/ui/Input';
import { SigninFormValueTypes } from './SigninForm';



interface SigninInputsProps {
  setTotalValid: React.Dispatch<React.SetStateAction<boolean>>
  changeHandler:(e:ChangeEvent<HTMLInputElement>) => void
  formValue: SigninFormValueTypes
  setFormValue: React.Dispatch<React.SetStateAction<SigninFormValueTypes>>
}

const SigninInputs = ({setTotalValid,changeHandler,formValue,setFormValue}:SigninInputsProps) => {

  return (
    <>
      <Input name="email" text="이메일" type="email" placeholder='이메일을 입력해주세요.' onChange={changeHandler} value={formValue.email} />
      <Input name="password" text="비밀번호" type="password" placeholder='비밀번호를 입력해주세요' onChange={changeHandler} value={formValue.password} />  
    </>
  );
};

export default SigninInputs;