import { Container } from './styles';

interface IBackdropProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
}

const Backdrop = ({ open, children, ...rest }: IBackdropProps) => {
  return (
    <Container open={open} {...rest}>
      {children}
    </Container>
  );
};

export default Backdrop;
