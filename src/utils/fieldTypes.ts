export enum FieldTypes {
  TEXT,
  TEXTAREA,
  SELECT,
}

interface IFieldBase {
  label: string;
}

export interface ITextField extends IFieldBase {
  type: FieldTypes.TEXT;
  initialValue?: FieldValue<ITextField>;
  placeholder?: FieldValue<ITextField>;
}

export interface ITextAreaField extends IFieldBase {
  type: FieldTypes.TEXTAREA;
  initialValue?: FieldValue<ITextAreaField>;
  placeholder?: FieldValue<ITextAreaField>;
  rows: number;
}

export interface ISelectField extends IFieldBase {
  type: FieldTypes.SELECT;
  initialValue?: FieldValue<ISelectField>;
  placeholder?: { label: string; value: FieldValue<ISelectField> };
  options: { label: string; value: FieldValue<ISelectField> }[];
}

export type Field = ITextField | ITextAreaField | ISelectField;

export interface Fields {
  [field: string]: Field;
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
