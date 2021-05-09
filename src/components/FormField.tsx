import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import styled from 'styled-components';

const Label = styled.label`
  font-size: 14px;
`;

interface FormFieldProps {
  label: string;
  type: string;
  require: string;
}

const FormField = ({
  input,
  label,
  type,
  require,
  meta: { touched, error },
}: WrappedFieldProps & FormFieldProps) => (
  <>
    <Label className={require}>{label}</Label>
    <div>
      <input
        {...input}
        placeholder={label}
        type={type}
        style={{ marginBottom: '5px' }}
      />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  </>
);

export default FormField;
