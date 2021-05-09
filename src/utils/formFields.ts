import { FormFields } from '../types/types';

export const formFields = [
  { label: 'name', name: 'name', type: 'text', required: 'required' },
  { label: 'role', name: 'role', type: 'text', required: '' },
  { label: 'email', name: 'email', type: 'text', required: 'required' },
  {
    label: 'password',
    name: 'password',
    type: 'password',
    required: 'required',
  },
] as FormFields[];
