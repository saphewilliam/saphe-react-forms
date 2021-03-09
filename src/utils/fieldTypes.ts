import { ChangeEvent, FocusEvent } from 'react';

export enum FieldTypes {
  TEXT,
  TEXTAREA,
  SELECT,
}

export enum FormStyle {
  BOOTSTRAP,
  MATERIAL,
}

// Unique properties of the fields

interface IText {
  placeholder?: FieldValue<ITextField>;
}

interface ITextArea {
  placeholder?: FieldValue<ITextAreaField>;
  rows: number;
}

interface ISelect {
  placeholder?: FieldValue<ISelectField>;
  options: { label: string; value: FieldValue<ISelectField> }[];
}

// Interfaces used by the user to declare fields

interface IField {
  label: string;
}

export interface ITextField extends IField, IText {
  type: FieldTypes.TEXT;
  initialValue?: FieldValue<ITextField>;
}

export interface ITextAreaField extends IField, ITextArea {
  type: FieldTypes.TEXTAREA;
  initialValue?: FieldValue<ITextAreaField>;
}

export interface ISelectField extends IField, ISelect {
  type: FieldTypes.SELECT;
  initialValue?: FieldValue<ISelectField>;
}

// Interfaces used by a developer to develop field components

interface FieldProps<T extends Field, E extends HTMLField> {
  name: string;
  label: string;
  touched: boolean;
  error: string;
  value: FieldValue<T>;
  onChange: (e: ChangeEvent<E>) => void;
  onBlur: (e: FocusEvent<E>) => void;
}

export type TextFieldProps = IText & FieldProps<ITextField, HTMLInputElement>;

export type TextAreaFieldProps = ITextArea & FieldProps<ITextAreaField, HTMLTextAreaElement>;

export type SelectFieldProps = ISelect & FieldProps<ISelectField, HTMLSelectElement>;

// Helpers

export type HTMLField = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
export type Field = ITextField | ITextAreaField | ISelectField;

export interface Fields {
  [fieldName: string]: Field;
}

export type FieldValue<T extends Field> = T extends ITextField
  ? string
  : T extends ITextAreaField
  ? string
  : T extends ISelectField
  ? string
  : 'Unkown Form Field';

export type FormValues<T extends Fields> = {
  [P in keyof T]: FieldValue<T[P]>;
};
