import Button, { IButtonProps } from 'components/Button';
import { ButtonWrapper } from './styles';

interface IIconButtonProps extends IButtonProps {
  icon: string;
  big?: boolean;
}

const IconButton = ({
  onClick,
  big,
  children,
  icon,
  ...rest
}: IIconButtonProps) => (
  <Button onClick={onClick} {...rest}>
    <ButtonWrapper>
      <span className={`material-icons ${big ? 'big-icon' : ''}`}>{icon}</span>
      {children}
    </ButtonWrapper>
  </Button>
);

export default IconButton;
