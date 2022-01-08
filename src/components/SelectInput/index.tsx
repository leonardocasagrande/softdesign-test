import InputBase from 'components/InputBase';
import { SelectHTMLAttributes, useState } from 'react';
import { Select } from './styles';

export interface IOption {
  value: any;
  label: string;
}

interface ISelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  errorText?: string;
  options: IOption[];
  emptyMessage?: string;
}

const SelectInput = ({
  label,
  name,
  errorText,
  options,
  emptyMessage = 'Selecione uma opção',
  ...rest
}: ISelectInputProps) => {
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
      <Select focused={focused} error={!!errorText} id={name} {...rest}>
        <option disabled selected value="">
          {emptyMessage}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Select>
    </InputBase>
  );
};

export default SelectInput;
