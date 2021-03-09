import React from 'react';
import { FormStyle, SelectFieldProps } from '../../utils/fieldTypes';
import { BSSelectField } from '../packs/bootstrap/BSSelectField';

interface Props extends SelectFieldProps {
  formStyle: FormStyle;
}

function SelectField(props: Props): JSX.Element {
  switch (props.formStyle) {
    case FormStyle.BOOTSTRAP:
      return <BSSelectField {...props} />;
    case FormStyle.MATERIAL:
      return <div></div>;
  }
}

export default SelectField;
