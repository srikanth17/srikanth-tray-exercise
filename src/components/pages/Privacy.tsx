import React from 'react';
import {
  Field,
  InjectedFormProps,
  reduxForm,
  WrappedFieldProps,
} from 'redux-form';
import styled from 'styled-components';

const Input = styled.input`
  position: inherit !important;
  opacity: inherit !important;
  margin-right: 5px;
  pointer-events: inherit !important;
`;

interface CheckboxProps {
  label: string;
}

const Checkbox = ({
  input,
  label,
  meta: { touched, error },
}: WrappedFieldProps & CheckboxProps) => (
  <div style={{ border: touched && error ? '1px solid red' : 'none' }}>
    <Input type="checkbox" {...input} />
    <label>{label}</label>
  </div>
);

interface PrivacyProps extends InjectedFormProps {
  onSubmit: (values: any) => void;
}

export const Privacy = ({
  handleSubmit,
  submitting,
  onSubmit,
}: PrivacyProps) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field
        name="Receive updates about Tray product by email"
        component={Checkbox}
        label="Receive updates about Tray product by email"
      />
      <Field
        name="Receive communication by email for other products created by the Tray team"
        component={Checkbox}
        label="Receive communication by email for other products created by the Tray team"
      />
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

export default reduxForm<{}, PrivacyProps>({
  form: 'contact',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(Privacy);
