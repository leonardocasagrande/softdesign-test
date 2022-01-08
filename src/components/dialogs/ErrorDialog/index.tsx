import Button from 'components/Button';
import Dialog from 'components/dialogs/Dialog';
import DialogHeader from '../DialogHeader';

type TErrorDialogProps = {
  open: boolean;
  onClose?: () => void;
  title: string;
  description?: string;
};

const ErrorDialog = ({
  open,
  onClose,
  title,
  description,
}: TErrorDialogProps) => {
  return (
    <Dialog open={open}>
      <DialogHeader onClose={onClose} color="error" />
      <h4>{title}</h4>
      <p>{description}</p>
      <Button variant="contained" color="error" onClick={onClose}>
        Entendi
      </Button>
    </Dialog>
  );
};

export default ErrorDialog;
