import React, { useCallback } from 'react';

const useValid = () => {

  const validateEmail = useCallback((email:string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if(emailPattern.test(email)){
      return true;
    }else {
      return false;
    }
  },[])
  const validatePassword = useCallback((password:string) => {
    if(password.length > 5 && password.length <= 20){
      return true;
    }else {
      return false;
    }

  },[])
  const validatePasswordConfirm = useCallback((passwordConfirm:string) => {
    if(passwordConfirm.length > 5 && passwordConfirm.length <= 20){
      return true;
    }else {
      return false;
    }
  },[])
  const validateNickname = useCallback((nickname:string) => {
    if(nickname.length > 2 && nickname.length <= 16){
      return true;
    }else {
      return false;
    }
  },[])
  const validateJob = useCallback((job:string) => {
    if(job){
      return true;
    }else {
      return false
    }
  },[])
  return {
    validateEmail,
    validateNickname,
    validatePassword,
    validatePasswordConfirm,
    validateJob
  }
};

export default useValid;