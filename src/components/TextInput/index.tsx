import InputBase from 'components/InputBase';
import React, { useState } from 'react';
import { Input } from './styles';

interface TTextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  errorText?: string;
}

const TextInput = ({ label, name, errorText, ...rest }: TTextInputProps) => {
  const [focused, setFocused] = useState(false);
  return (
    <InputBase
      label={label}
      name={name}
      errorText={errorText}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      focused={focused}
    >
      <Input id={name} focused={focused} error={!!errorText} {...rest} />
    </InputBase>
  );
};

export default TextInput;
