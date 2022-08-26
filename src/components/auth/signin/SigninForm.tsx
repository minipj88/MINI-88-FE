import React from 'react';
import AuthLayout from '../../../shared/util/ui/AuthLayout';
import SigninFooter from './SigninFooter';
import SigninInputs from './SigninInputs';

const SigninForm = () => {
  return (
    <AuthLayout title="로그인" description='Eight에 로그인합니다.'>
      <SigninInputs />
      <SigninFooter />
    </AuthLayout>
  );
};

export default SigninForm;