import React, { ChangeEvent, useState } from 'react';
import Input from '../../../shared/util/ui/Input';

const SigninInputs = () => {
  const [formValue,setFormValue] = useState({
    email:'',
    password:''
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
    </>
  );
};

export default SigninInputs;