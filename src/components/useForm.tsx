import React, { DependencyList, useState } from 'react';
import { Fields, FormValues } from '../utils/fieldTypes';
import FormComponent from './Form';

interface Config<T extends Fields> {
  fields: T;
  onSubmit: (formValues: FormValues<T>) => void;
}

interface State {
  Form: () => JSX.Element;
  submitting: boolean;
}

function useForm<T extends Fields>(config: Config<T>, deps?: DependencyList): State {
  const [submitting, setSubmitting] = useState(false);
  const { fields, onSubmit } = config;

  const Form = () => (
    <FormComponent
      fields={fields}
      onSubmit={onSubmit}
      submitting={submitting}
      setSubmitting={setSubmitting}
    />
  );

  return { Form, submitting };
}

export default useForm;
