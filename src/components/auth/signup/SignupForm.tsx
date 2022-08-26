import React, { useState } from 'react';
import AuthLayout from '../../../shared/util/ui/AuthLayout';
import Input from '../../../shared/util/ui/Input';
import SignupFooter from './SignupFooter';
import SignupInputs from './SignupInputs';

const SignupForm = () => {
  const [totalValid,setTotalValid] = useState(false)
  return (
    <AuthLayout title="계정 생성" description='세부 정보를 입력해주세요.'>
      <SignupInputs setTotalValid={setTotalValid} />
      <SignupFooter totalValid={totalValid}/>
    </AuthLayout>
  );
};

export default SignupForm;