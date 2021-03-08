import React from 'react';
import { TextAreaFieldProps } from '../../utils/fieldProps';
import { BSTextAreaField } from '../packs/bootstrap/BSTextAreaField';
import { FormStyle } from '~/utils/formTypes';

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
