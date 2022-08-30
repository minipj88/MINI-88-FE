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
  username: string;
  job: string;
  age: number;
  profilePhoto: string;
}

const SignupForm = () => {
  const [totalValid,setTotalValid] = useState(false)
  const [createUser,{data:userData,isLoading,error,isError}] = useSignupMutation()
  const [formValue,setFormValue] = useState<FormValueTypes>({
    email: '',
    password: '',
    passwordConfirm: '',
    username: '',
    job:'',
    age:0,
    profilePhoto: ''
  })
  const {validateEmail,validatePassword,validateJob,validateUsername,validatePasswordConfirm,validateAge} = useValid()
  
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
      && validateUsername(formValue.username)
      && validatePasswordConfirm(formValue.passwordConfirm) && formValue.password === formValue.passwordConfirm && validateAge(formValue.age))
  },[formValue])

  const registHandler = () => {
    
    createUser({
      email: formValue.email,
      nickname: formValue.username,
      job: formValue.job,
      age: formValue.age,
      password: formValue.password,
      profilePhoto:formValue.profilePhoto
    })
  }
  
  
  return (
    <AuthLayout title="계정 생성" description='세부 정보를 입력해주세요.'>
      <SignupInputs setTotalValid={setTotalValid} changeHandler={changeHandler} formValue={formValue} setFormValue={setFormValue} />
      <SignupFooter totalValid={totalValid} onClick={registHandler}/>
    </AuthLayout>
  );
};

export default SignupForm;