export enum FormFieldTypes {
  TEXT,
  TEXTAREA,
  SELECT,
}

interface FormFieldBase<T> {
  label: string;
  name: string;
  value: T;
  initialValue?: T; // Default: field-specific
  placeholder?: T; // Default: field-specific
  required?: boolean; // Default: false
}

export interface FormFieldInput extends FormFieldBase<string> {
  type: FormFieldTypes.TEXT;
}

export interface FormFieldTextarea extends FormFieldBase<string> {
  type: FormFieldTypes.TEXTAREA;
  rows: number;
}

export interface FormFieldSelect extends FormFieldBase<string> {
  type: FormFieldTypes.SELECT;
  options: { label: string; value: string }[];
}

export type FormField = FormFieldInput | FormFieldTextarea | FormFieldSelect;
