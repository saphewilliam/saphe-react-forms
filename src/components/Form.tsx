import React, { FormEvent, useState } from 'react';
import { FormField, FormFieldTypes } from '~/types/formFieldTypes';

type FormValue = string | boolean | number;
type FormValues = Record<string, FormValue>;

export interface FormState {
  touched: Record<string, boolean>;
  errors: Record<string, string>;
  values: FormValues;
}

interface Props {
  fields: FormField[];
  onSubmit: (formValues: any) => void;
}

function getInitialState(fields: FormField[]): FormState {
  const touched: Record<string, boolean> = {};
  const errors: Record<string, string> = {};
  const values: FormValues = {};

  fields.forEach((field) => {
    if (field.initialValue !== undefined) {
      values[field.name] = field.initialValue;
    } else {
      switch (field.type) {
        case FormFieldTypes.TEXT:
        case FormFieldTypes.TEXTAREA:
          values[field.name] = '';
          break;
        case FormFieldTypes.SELECT:
          values[field.name] = '-1';
          break;
      }
    }
    touched[field.name] = false;
    errors[field.name] = '';
  });

  return { touched, errors, values };
}

export default function Form(props: Props): JSX.Element {
  const [formState, setFormState] = useState<FormState>(getInitialState(props.fields));
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await props.onSubmit(formState.values);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <button type="submit" disabled={submitting} className="btn btn-primary">
        {submitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
