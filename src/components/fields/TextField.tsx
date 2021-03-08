import React from 'react';
import { BSTextField } from '../packs/bootstrap/BSTextField';
import { TextFieldProps } from '~/utils/fieldProps';
import { FormStyle } from '~/utils/formTypes';

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
