import React, { ChangeEvent, useReducer, useState } from 'react';
import Input from '../../../shared/util/ui/Input';




const SignupInputs = () => {
  // inputs - 이메일 , 패스워드, 닉네임, 직업, 나이, 주소
 
  const [formValue,setFormValue] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    nickname: ''
  })
  const changeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const {currentTarget:{value,name}} = e;
    setFormValue({
      ...formValue,
      [name]: value
    })
    console.log(formValue);
  }
  return (
    <>
     <Input name="email" text="이메일" type="email" placeholder='이메일을 입력해주세요.' onChange={changeHandler} value={formValue.email} /> 
     <Input name="password" text="비밀번호" type="password" placeholder='비밀번호를 입력해주세요' onChange={changeHandler} value={formValue.password} /> 
     <Input name="passwordConfirm" text="비밀번호 확인" type="password" placeholder='위와 동일하게 한번 더 입력해주세요' onChange={changeHandler} value={formValue.passwordConfirm} /> 
     <Input name="nickname" text="닉네임" type="text" placeholder='Eight에서 사용할 닉네임을 설정해주세요.' onChange={changeHandler} value={formValue.nickname} /> 
     {/* 직업 / 나이 / 주소  */}
    </>
  );
};

export default SignupInputs;