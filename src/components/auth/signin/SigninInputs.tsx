import React, { ChangeEvent, useEffect, useState } from 'react';
import useValid from '../../../hooks/useValid';
import Input from '../../../shared/util/ui/Input';



interface SigninInputsProps {
  setTotalValid: React.Dispatch<React.SetStateAction<boolean>>
}

const SigninInputs = ({setTotalValid}:SigninInputsProps) => {
  const [formValue,setFormValue] = useState({
    email:'',
    password:''
  })
  const {validateEmail,validatePassword} = useValid()
  const changeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const {currentTarget:{value,name}} = e;
    setFormValue({
      ...formValue,
      [name]: value
    })
    console.log(formValue);
  }
  useEffect(() => {
    setTotalValid(validateEmail(formValue.email) && validatePassword(formValue.password))
  },[formValue])
  return (
    <>
      <Input name="email" text="이메일" type="email" placeholder='이메일을 입력해주세요.' onChange={changeHandler} value={formValue.email} />
      <Input name="password" text="비밀번호" type="password" placeholder='비밀번호를 입력해주세요' onChange={changeHandler} value={formValue.password} />  
    </>
  );
};

export default SigninInputs;