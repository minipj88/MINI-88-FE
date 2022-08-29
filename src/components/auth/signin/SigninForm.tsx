import React, { ChangeEvent, useEffect, useState } from 'react';
import useValid from '../../../hooks/useValid';
import AuthLayout from '../../../shared/util/ui/AuthLayout';
import { useSigninMutation } from '../../../store/slices/authSlice';
import SigninFooter from './SigninFooter';
import SigninInputs from './SigninInputs';

export interface SigninFormValueTypes {
  email: string;
  password: string;
}

const SigninForm = () => {
  const [totalValid,setTotalValid] = useState(false)
  const [formValue,setFormValue] = useState<SigninFormValueTypes>({
    email:'',
    password:''
  })
  const {validateEmail,validatePassword} = useValid()
  const [login,{data,isLoading,error,isError}] = useSigninMutation()
  const changeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const {currentTarget:{value,name}} = e;
    
    setFormValue({
      ...formValue,
      [name]: value
    })
    console.log(formValue);
  }
  const signInHandler = () => {
    login(formValue)
  }
  useEffect(() => {
    setTotalValid(validateEmail(formValue.email) && validatePassword(formValue.password))
  },[formValue])

  return (
    <AuthLayout title="로그인" description='Eight에 로그인합니다.'>
      <SigninInputs setTotalValid={setTotalValid} changeHandler={changeHandler} formValue={formValue} setFormValue={setFormValue} />
      <SigninFooter totalValid={totalValid} onClick={signInHandler} />
    </AuthLayout>
  );
};

export default SigninForm;