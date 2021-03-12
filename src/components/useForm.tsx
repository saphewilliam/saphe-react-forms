import React, { useState } from 'react';
import { Fields, FormValues, ValidationModes } from '../utils/fieldTypes';
import FormComponent from './Form';

interface Config<T extends Fields> {
  /** The fields declaration */
  fields: T;

  /** The void function that fires on a form submission event */
  onSubmit: (formValues: FormValues<T>) => void | Promise<void>;

  /** The global form validation mode, defaults to ValidationModes.AFTER_BLUR */
  validationMode?: ValidationModes;
}

interface State {
  /** The form component generated by the hook */
  Form: () => JSX.Element;

  /** Helper state that indicates whether the form is submitting or not */
  submitting: boolean;
}

function useForm<T extends Fields>(config: Config<T>): State {
  //, deps?: DependencyList): State { // TODO add dependency list
  const [submitting, setSubmitting] = useState(false);
  const { fields, validationMode, onSubmit } = config;

  const Form = () => (
    <FormComponent
      fields={fields}
      onSubmit={onSubmit}
      validationMode={validationMode}
      submitting={submitting}
      setSubmitting={setSubmitting}
    />
  );

  return { Form, submitting };
}

export default useForm;
