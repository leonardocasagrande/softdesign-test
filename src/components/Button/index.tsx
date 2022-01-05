import styles from './styles.module.css';

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'contained' | 'outlined' | 'text';
  // type?: 'button' | 'submit' | 'reset';
}

const Button = ({ variant = 'text', className, ...rest }: IButtonProps) => {
  let classes: string;
  switch (variant) {
    case 'contained':
      classes = `${styles.root} ${styles.contained}`;
      break;
    case 'outlined':
      classes = `${styles.root} ${styles.outlined}`;
      break;
    case 'text':
      classes = styles.root;
      break;
    default:
      classes = '';
  }
  return (
    <button className={`${classes} ${className}`} type="button" {...rest}>
      {rest.children}
    </button>
  );
};

export default Button;
