const regexEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{9,})/;

export const emailValidation = (email: string) => {
  const invalidEmail = regexEmail.test(email) === false;

  if (invalidEmail) return `This email is invalid`;
  else return '';
};

export const passwordValidation = (pwd: string) => {
  const invalidPwd = regexPassword.test(pwd) === false;

  if (invalidPwd) return `This password does not match our standard`;
  else return '';
};
