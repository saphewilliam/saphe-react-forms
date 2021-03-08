import React from 'react';
import { BSSelectField } from '../packs/bootstrap/BSSelectField';
import { SelectFieldProps } from '~/utils/fieldProps';
import { FormStyle } from '~/utils/formTypes';

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
