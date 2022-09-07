import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const [totalValid, setTotalValid] = useState(false);
  const [formValue, setFormValue] = useState<SigninFormValueTypes>({
    email: '',
    password: '',
  });
  const { validateEmail, validatePassword } = useValid();
  const [login, { data, isLoading, error, isError }] = useSigninMutation();
  const navigate = useNavigate();
  

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value, name },
    } = e;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  

  const signInHandler =  () => {
    
       login(formValue)
       .unwrap()
       .then((response) => {
        // alert('로그인이 완료되었습니다. 메인페이지로 이동합니다.');
        // navigate('/');
        // location.reload();
      })
      .catch((error) => alert(`알수없는 에러로 인해 로그인에 실패하였습니다.`));
    
  };
  useEffect(() => {
    if (!data) return;
    localStorage.setItem('user', JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    setTotalValid(validateEmail(formValue.email) && validatePassword(formValue.password));
  }, [formValue]);
  
  return (
    <AuthLayout title="로그인" description="Eight에 로그인합니다.">
      <SigninInputs
        setTotalValid={setTotalValid}
        changeHandler={changeHandler}
        formValue={formValue}
        setFormValue={setFormValue}
      />
      <SigninFooter totalValid={totalValid} onClick={signInHandler} />
    </AuthLayout>
  );
};

export default SigninForm;
