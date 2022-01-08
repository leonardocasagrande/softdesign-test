import { ReactNode } from 'react';
import { ErrorText, Label } from './styles';

interface TInputBaseProps {
  label: string;
  name: string;
  errorText?: string;
  children: ReactNode;
  focused: boolean;
  onFocus: () => void;
  onBlur: () => void;
}

const InputBase = ({
  label,
  name,
  errorText,
  children,
  focused,
  onFocus,
  onBlur,
}: TInputBaseProps) => {
  return (
    <div onFocus={onFocus} onBlur={onBlur}>
      <Label error={!!errorText} focused={focused} htmlFor={name}>
        {label}
        {children}
      </Label>
      {!!errorText && <ErrorText>{errorText}</ErrorText>}
    </div>
  );
};

export default InputBase;
