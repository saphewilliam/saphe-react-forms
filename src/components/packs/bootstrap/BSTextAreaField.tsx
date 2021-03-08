import React from 'react';
import { TextAreaFieldProps } from '~/utils/fieldProps';

export function BSTextAreaField(props: TextAreaFieldProps): JSX.Element {
  return (
    <div>
      <label htmlFor={props.name} className="form-label">
        {props.label}
      </label>
      <textarea
        rows={props.rows}
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
