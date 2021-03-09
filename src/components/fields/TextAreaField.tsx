import React from 'react';
import { FormStyle, TextAreaFieldProps } from '../../utils/fieldTypes';
import { BSTextAreaField } from '../packs/bootstrap/BSTextAreaField';

interface Props extends TextAreaFieldProps {
  formStyle: FormStyle;
}

function TextAreaField(props: Props): JSX.Element {
  switch (props.formStyle) {
    case FormStyle.BOOTSTRAP:
      return <BSTextAreaField {...props} />;
    case FormStyle.MATERIAL:
      return <div></div>;
  }
}

export default TextAreaField;
