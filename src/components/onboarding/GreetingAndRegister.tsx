import React from 'react';
import GreetingLayout from '../../shared/util/ui/GreetingLayout';

const GreetingAndRegister = () => {
  return (
    <div>
      <GreetingLayout
        title="환영합니다!"
        message="국내 최고 금융 어플 Eight"
        imageUrl="/onboarding3.gif"
        imageSize="320px"
        textMargin="32px auto 0px"
        textMargin2="0 auto"
      />
    </div>
  );
};

export default GreetingAndRegister;
