import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import FormField from '../FormField';
import {
  emailValidation,
  passwordValidation,
} from '../../utils/validateEmails';
import { formFields } from '../../utils/formFields';
import { RequiredFormValues } from '../../types/types';
import { compose } from 'redux';

// creating dynamic fields
const renderFields = () =>
  formFields.map(field => (
    <Field
      key={field.name}
      label={field.label}
      type={field.type}
      name={field.name}
      component={FormField}
      require={field.required}
    />
  ));

interface UserProps extends InjectedFormProps {
  onSubmit: (values: any) => void;
}

export const User = ({ handleSubmit, submitting, onSubmit }: UserProps) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {renderFields()}
      <button
        type="submit"
        className="teal btn-flat right white-text"
        disabled={submitting}
      >
        Submit
      </button>
    </form>
  );
};

export const validate = (values: RequiredFormValues) => {
  const errors = {} as RequiredFormValues;
  errors.email = emailValidation(values.email || '');
  errors.password = passwordValidation(values.password || '');
  if (!values.name) {
    errors.name = 'Required';
  }
  return errors;
};

export default compose(
  reduxForm<{}, UserProps>({
    form: 'contact',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate,
  })
)(User);
