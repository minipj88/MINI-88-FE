import React from 'react';
import AuthFooterLayout from '../../../shared/util/ui/AuthFooterLayout';

interface SigninFooterProps {
  totalValid : boolean;
  onClick: () => void
}

const SigninFooter = ({totalValid,onClick}:SigninFooterProps) => {
  return (
    <AuthFooterLayout infoMessage="Eight 계정이 없으신가요?" linkUrl="/signup" linkMessage="클릭하여 계정을 생성하세요." buttonText="로그인" totalValid={totalValid} onClick={onClick} />
  );
};

export default SigninFooter;