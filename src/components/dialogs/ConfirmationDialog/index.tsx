import Button from 'components/Button';
import Dialog from '../Dialog';
import DialogHeader from '../DialogHeader';
import { Actions } from './styles';

type TConfirmationDialog = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description?: string;
};

const ConfirmationDialog = ({
  open,
  onClose,
  onConfirm,
  title,
  description,
}: TConfirmationDialog) => {
  return (
    <Dialog open={open}>
      <DialogHeader onClose={onClose} color="primary" />
      <h4>{title}</h4>
      <p>{description}</p>
      <Actions>
        <Button variant="contained" color="primary" onClick={onConfirm}>
          Sim
        </Button>
        <Button variant="outlined" color="primary" onClick={onClose}>
          Não
        </Button>
      </Actions>
    </Dialog>
  );
};

export default ConfirmationDialog;
