import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { Fields, FieldTypes, FormValues, FormStyle, HTMLField } from '../utils/fieldTypes';
import Field from './Field';

export interface FormState<T extends Fields> {
  touched: Record<string, boolean>;
  error: Record<string, string>;
  values: FormValues<T>;
}

interface Props<T extends Fields> {
  fields: T;
  onSubmit: (formValues: FormValues<T>) => void | Promise<void>;
  submitting: boolean;
  setSubmitting: Dispatch<SetStateAction<boolean>>;
}

function getInitialState<T extends Fields>(fields: T): FormState<T> {
  const touched: Record<string, boolean> = {};
  const error: Record<string, string> = {};
  const values: Record<string, string | number | boolean> = {};

  for (const fieldName in fields) {
    const field = fields[fieldName];
    if (field === undefined) continue;

    switch (field.type) {
      case FieldTypes.TEXT:
      case FieldTypes.TEXTAREA:
        values[fieldName] = '';
        break;
      case FieldTypes.SELECT:
        values[fieldName] = '-1';
        break;
    }

    touched[fieldName] = false;
    error[fieldName] = '';
  }

  return { touched, error, values: values as FormValues<T> };
}

function Form<T extends Fields>(props: Props<T>): JSX.Element {
  const [formState, setFormState] = useState<FormState<T>>(getInitialState(props.fields));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.setSubmitting(true);
    await props.onSubmit(formState.values);
    props.setSubmitting(false);
  };

  const handleChange = (e: ChangeEvent<HTMLField>, fieldName: string) => {
    setFormState({
      ...formState,
      values: {
        ...formState.values,
        [fieldName]: e.target.value,
      },
    });
  };

  const handleBlur = (fieldName: string) => {
    setFormState({
      ...formState,
      touched: {
        ...formState.touched,
        [fieldName]: true,
      },
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {Object.keys(props.fields).map((fieldName, index) => {
        const field = props.fields[fieldName];
        if (field === undefined) return <></>;
        return (
          <Field
            key={index}
            field={field}
            name={fieldName}
            formStyle={FormStyle.BOOTSTRAP} // TODO make variable
            error={formState.error[fieldName] ?? 'Field name not found'} // TODO fix defaults
            touched={formState.touched[fieldName] ?? true} // TODO fix defaults
            value={formState.values[fieldName] ?? ''} // TODO fix defaults
            onChange={(e) => handleChange(e, fieldName)}
            onBlur={() => handleBlur(fieldName)}
          />
        );
      })}
      <button type="submit" disabled={props.submitting} className="btn btn-primary">
        {props.submitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

export default Form;
