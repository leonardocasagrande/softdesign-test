import Button from 'components/Button';
import { useEffect } from 'react';
import { Container } from './styles';

interface ISuccessSnackbar {
  title: string;
  onClose: () => void;
  timerToAutoClose?: number;
}

const SuccessSnackbar = ({
  title,
  onClose,
  timerToAutoClose = 5000,
}: ISuccessSnackbar) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, timerToAutoClose);
    return () => clearInterval(timer);
  }, [onClose, timerToAutoClose]);

  return (
    <Container>
      {title}
      <Button style={{ padding: 0, color: 'white' }} onClick={onClose}>
        <span className="material-icons">close</span>
      </Button>
    </Container>
  );
};

export default SuccessSnackbar;
