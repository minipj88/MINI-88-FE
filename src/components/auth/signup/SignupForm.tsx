import React, { ChangeEvent, useEffect, useState } from 'react';
import useValid from '../../../hooks/useValid';
import AuthLayout from '../../../shared/util/ui/AuthLayout';
import Input from '../../../shared/util/ui/Input';
import { useSignupMutation } from '../../../store/slices/authSlice';
import SignupFooter from './SignupFooter';
import SignupInputs from './SignupInputs';


export interface FormValueTypes {
  email: string;
  password: string;
  passwordConfirm: string;
  nickname: string;
  job: string;
  age: number;
}

const SignupForm = () => {
  const [totalValid,setTotalValid] = useState(false)
  const [createUser,{data:userData,isLoading,error,isError}] = useSignupMutation()
  const [formValue,setFormValue] = useState<FormValueTypes>({
    email: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
    job:'',
    age:0
  })
  const {validateEmail,validatePassword,validateJob,validateNickname,validatePasswordConfirm} = useValid()
  
  const changeHandler = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {currentTarget:{value,name}} = e;
    setFormValue({
      ...formValue,
      [name]: value
    })
    console.log(formValue);
  }
  useEffect(() => {
    setTotalValid(
      validateEmail(formValue.email)
      && validatePassword(formValue.password)
      && validateJob(formValue.job)
      && validateNickname(formValue.nickname)
      && validatePasswordConfirm(formValue.passwordConfirm)
      && formValue.password === formValue.passwordConfirm)

  },[formValue])

  const registHandler = () => {
    createUser(formValue)
  }
  
  
  return (
    <AuthLayout title="계정 생성" description='세부 정보를 입력해주세요.'>
      <SignupInputs setTotalValid={setTotalValid} changeHandler={changeHandler} formValue={formValue} setFormValue={setFormValue} />
      <SignupFooter totalValid={totalValid} onClick={registHandler}/>
    </AuthLayout>
  );
};

export default SignupForm;