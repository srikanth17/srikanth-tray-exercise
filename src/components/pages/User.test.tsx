import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import User, { validate } from './User';
import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import { RequiredFormValues } from '../../types/types';

let wrapper: ReactWrapper;
let onSubmitSpy: jest.Mock;

describe('validate', () => {
  it('should validate & return errors', () => {
    const values = {
      name: 'your name',
      email: 'test@test.com',
      password: 'test',
    } as RequiredFormValues;
    const errors = validate(values);
    expect(errors).toMatchObject({
      password: 'This password does not match our standard',
    });
  });

  it('should validate & return no errors', () => {
    const values = {
      name: 'your name',
      email: 'test@test.com',
      password: 'Abcdef123',
    } as RequiredFormValues;
    const errors = validate(values);
    expect(errors).toMatchObject({});
  });
});

describe('User component', () => {
  beforeEach(() => {
    const store = configureStore({
      reducer: {
        form: formReducer,
      },
    });

    onSubmitSpy = jest.fn();
    wrapper = mount(
      <Provider store={store}>
        {/*
                  // @ts-ignore} */}
        <User onSubmit={onSubmitSpy} />
      </Provider>
    );
  });

  it('should not call onSubmit for empty form submission', () => {
    wrapper.find('form').simulate('submit');
    expect(onSubmitSpy).not.toHaveBeenCalled();
  });

  it('should not call onSubmit for invalid form submission', () => {
    const name = 'your name';
    wrapper.find('Field').at(0).simulate('change', name);
    wrapper.find('form').simulate('submit');
    expect(onSubmitSpy).not.toHaveBeenCalled();
  });

  it('should not call onSubmit for invalid email address', () => {
    const name = 'your name';
    const email = 'test@';
    const password = 'Abcdef123';
    wrapper.find('Field').at(0).simulate('change', name);
    wrapper.find('Field').at(2).simulate('change', email);
    wrapper.find('Field').at(3).simulate('change', password);
    wrapper.find('form').simulate('submit');
    expect(onSubmitSpy).not.toHaveBeenCalled();
  });

  it('should not call onSubmit for invalid password', () => {
    const name = 'your name';
    const email = 'test@test.com';
    const password = 'test';
    wrapper.find('Field').at(0).simulate('change', name);
    wrapper.find('Field').at(2).simulate('change', email);
    wrapper.find('Field').at(3).simulate('change', password);
    wrapper.find('form').simulate('submit');
    expect(onSubmitSpy).not.toHaveBeenCalled();
  });

  it('should call onSubmit and submit form', () => {
    const name = 'your name';
    const email = 'test@test.com';
    const password = 'Abcdef123';
    wrapper.find('Field').at(0).simulate('change', name);
    wrapper.find('Field').at(2).simulate('change', email);
    wrapper.find('Field').at(3).simulate('change', password);
    wrapper.find('form').simulate('submit');
    expect(onSubmitSpy).not.toHaveBeenCalled();
  });
});
