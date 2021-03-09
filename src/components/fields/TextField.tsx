import React from 'react';
import { FormStyle, TextFieldProps } from '../../utils/fieldTypes';
import { BSTextField } from '../packs/bootstrap/BSTextField';

interface Props extends TextFieldProps {
  formStyle: FormStyle;
}

function TextField(props: Props): JSX.Element {
  switch (props.formStyle) {
    case FormStyle.BOOTSTRAP:
      return <BSTextField {...props} />;
    case FormStyle.MATERIAL:
      return <div></div>;
  }
}

export default TextField;
