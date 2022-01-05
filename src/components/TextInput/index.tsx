import React from 'react';
import styles from './styles.module.css';

interface TTextInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  id: string;
}

const TextInput = ({ label, id, ...rest }: TTextInputProps) => {
  return (
    <div>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input className={styles.input} id={id} type="text" {...rest} />
    </div>
  );
};

export default TextInput;
