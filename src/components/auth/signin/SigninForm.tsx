import React, { useState } from 'react';
import AuthLayout from '../../../shared/util/ui/AuthLayout';
import SigninFooter from './SigninFooter';
import SigninInputs from './SigninInputs';

const SigninForm = () => {
  const [totalValid,setTotalValid] = useState(false)
  return (
    <AuthLayout title="로그인" description='Eight에 로그인합니다.'>
      <SigninInputs setTotalValid={setTotalValid} />
      <SigninFooter totalValid={totalValid} />
    </AuthLayout>
  );
};

export default SigninForm;