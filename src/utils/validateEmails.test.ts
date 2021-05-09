import { emailValidation, passwordValidation } from './validateEmails';

describe('emailValidation', () => {
  it('should return error for email verification', () => {
    const error = emailValidation('test@');
    expect(error).toBe('This email is invalid');
  });
  it('should return no error for valid email', () => {
    const error = emailValidation('test@test.com');
    expect(error).toBe('');
  });
});

describe('passwordValidation', () => {
  it('should return error for password verification', () => {
    const error = passwordValidation('test');
    expect(error).toBe('This password does not match our standard');
  });

  it('should return no error for valid password', () => {
    const error = passwordValidation('Sripra1724');
    expect(error).toBe('');
  });
});
