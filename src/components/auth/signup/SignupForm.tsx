import React from 'react';
import AuthLayout from '../../../shared/util/ui/AuthLayout';
import Input from '../../../shared/util/ui/Input';
import SignupFooters from './SignupFooters';
import SignupInputs from './SignupInputs';

const SignupForm = () => {
  return (
    <AuthLayout title="계정 생성" description='세부 정보를 입력해주세요.'>
      <SignupInputs />
      <SignupFooters/>
    </AuthLayout>
  );
};

export default SignupForm;