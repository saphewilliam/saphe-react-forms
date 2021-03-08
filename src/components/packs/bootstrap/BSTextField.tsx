import React from 'react';
import { TextFieldProps } from '~/utils/fieldProps';

export function BSTextField(props: TextFieldProps): JSX.Element {
  return (
    <div className="mb-3">
      <label htmlFor={props.name} className="form-label">
        {props.label}
      </label>
      <input
        type="text"
        className={`form-control${props.touched && Boolean(props.error) ? ' is-invalid' : ''}`}
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.touched && Boolean(props.error) && (
        <div className="invalid-feedback">{props.error}</div>
      )}
    </div>
  );
}
