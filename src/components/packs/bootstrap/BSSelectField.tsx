import React from 'react';
import { SelectFieldProps } from '../../../utils/fieldTypes';

export function BSSelectField(props: SelectFieldProps): JSX.Element {
  return (
    <div className="mb-3">
      {props.label && (
        <label htmlFor={props.name} className="form-label">
          {props.label}
        </label>
      )}

      <select
        className={`form-select${props.touched && Boolean(props.error) ? ' is-invalid' : ''}`}
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      >
        <option selected>{props.placeholder ?? 'Select an option'}</option>
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {props.touched && Boolean(props.error) && (
        <div className="invalid-feedback">{props.error}</div>
      )}
    </div>
  );
}
