export interface RequiredFormValues {
  email: string;
  password: string;
  name: string;
}

export interface FormFields {
  label: string;
  name: string;
  type: string;
  required: string;
}

export const tabItems = ['User', 'Privacy', 'Done'];
