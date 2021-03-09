import React from 'react';
import { TextFieldProps } from '../../../utils/fieldTypes';

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
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.touched && Boolean(props.error) && (
        <div className="invalid-feedback">{props.error}</div>
      )}
    </div>
  );
}
