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
  const validateUsername = useCallback((username:string) => {
    if(username.length > 2 && username.length <= 16){
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
  const validateAge = useCallback((age:number) => {
    if(age){
      return true;
    }else {
      return false;
    }
  },[])
  return {
    validateEmail,
    validateUsername,
    validatePassword,
    validatePasswordConfirm,
    validateJob,
    validateAge
  }
};

export default useValid;