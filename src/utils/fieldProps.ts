import { ChangeEvent, FocusEvent } from 'react';
import { FieldValue, ISelectField, ITextAreaField, ITextField, Field } from './fieldTypes';

interface FieldProps<T extends Field, E> {
  name: string;
  label: string;
  touched: boolean;
  error: string;
  value: FieldValue<T>;
  onChange: (e: ChangeEvent<E>) => void;
  onBlur: (e: FocusEvent<E>) => void;
}

export interface TextFieldProps extends FieldProps<ITextField, HTMLInputElement> {
  placeholder?: FieldValue<ITextField>;
}

export interface TextAreaFieldProps extends FieldProps<ITextAreaField, HTMLTextAreaElement> {
  placeholder?: FieldValue<ITextAreaField>;
  rows: number;
}

export interface SelectFieldProps extends FieldProps<ISelectField, HTMLSelectElement> {
  placeholder?: { label: string; value: FieldValue<ISelectField> };
  options: { label: string; value: FieldValue<ISelectField> }[];
}
