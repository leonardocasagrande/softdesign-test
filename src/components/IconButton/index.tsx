import Button, { IButtonProps } from 'components/Button';
import { ButtonWrapper } from './styles';

interface IIconButtonProps extends IButtonProps {
  icon: string;
}

const IconButton = ({ onClick, children, icon, ...rest }: IIconButtonProps) => (
  <Button onClick={onClick} {...rest}>
    <ButtonWrapper>
      <span className="material-icons">{icon}</span>
      {children}
    </ButtonWrapper>
  </Button>
);

export default IconButton;
