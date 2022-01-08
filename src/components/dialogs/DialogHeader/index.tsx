import Button from 'components/Button';
import { TColor } from 'types';
import { Container, Icon } from './styles';

type TDialogHeaderProps = {
  onClose?: () => void;
  color?: TColor;
};

const DialogHeader = ({ onClose, color = 'primary' }: TDialogHeaderProps) => {
  return (
    <Container>
      <Icon color={color} className="material-icons">
        error
      </Icon>
      <Button onClick={onClose}>
        <span className="material-icons">close</span>
      </Button>
    </Container>
  );
};

export default DialogHeader;
