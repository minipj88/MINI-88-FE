import React from 'react';
import AuthFooterLayout from '../../../shared/util/ui/AuthFooterLayout';

const SignupFooter = () => {
  return (
    <AuthFooterLayout infoMessage="이미 Eight 계정이 있으신가요?" linkUrl="/signin" linkMessage="클릭하여 로그인하세요." buttonText="계정 생성" />
  );
};

export default SignupFooter;