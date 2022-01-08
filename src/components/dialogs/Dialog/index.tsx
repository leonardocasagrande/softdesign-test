import Backdrop from 'components/Backdrop';
import Card from 'components/Card';
import { CSSProperties, ReactNode } from 'react';

type TDialogProps = {
  open: boolean;
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
};

const Dialog = ({ open, children, style, className }: TDialogProps) => {
  return (
    <Backdrop open={open}>
      <Card style={style} className={className}>
        {children}
      </Card>
    </Backdrop>
  );
};

export default Dialog;
