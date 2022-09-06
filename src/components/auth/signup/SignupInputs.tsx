import React, { ChangeEvent, useEffect, useReducer, useState } from 'react';
import useValid from '../../../hooks/useValid';
import Input from '../../../shared/util/ui/Input';
import JobDropdownList from './JobDropdownList';
import { FormValueTypes } from './SignupForm';

interface SignupInputsProps {
  setTotalValid: React.Dispatch<React.SetStateAction<boolean>>;
  changeHandler: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  formValue: FormValueTypes;
  setFormValue: React.Dispatch<React.SetStateAction<FormValueTypes>>;
}

const SignupInputs = ({ setTotalValid, changeHandler, formValue, setFormValue }: SignupInputsProps) => {
  return (
    <>
      <Input
        name="email"
        text="이메일"
        type="email"
        placeholder="이메일을 입력해주세요."
        onChange={changeHandler}
        value={formValue.email}
      />
      <Input
        name="password"
        text="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={changeHandler}
        value={formValue.password}
      />
      <Input
        name="passwordConfirm"
        text="비밀번호 확인"
        type="password"
        placeholder="위와 동일하게 한번 더 입력해주세요"
        onChange={changeHandler}
        value={formValue.passwordConfirm}
      />
      <Input
        name="name"
        text="성함"
        type="text"
        placeholder="본인의 성함을 기입해주세요."
        onChange={changeHandler}
        value={formValue.name}
      />
      <Input
        name="age"
        text="나이"
        type="number"
        placeholder="나이를 입력해주세요"
        onChange={changeHandler}
        value={formValue.age}
      />
      <JobDropdownList setFormValue={setFormValue} formValue={formValue} />
    </>
  );
};

export default SignupInputs;
