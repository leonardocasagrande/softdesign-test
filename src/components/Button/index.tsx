import { TColor } from 'types';
import Container from './styles';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'text';
  color?: TColor;
  rounded?: boolean;
}

const Button = ({
  variant = 'text',
  color = 'primary',
  rounded = false,
  ...rest
}: IButtonProps) => {
  return (
    <Container rounded={rounded} color={color} variant={variant} {...rest}>
      {rest.children}
    </Container>
  );
};

export default Button;
