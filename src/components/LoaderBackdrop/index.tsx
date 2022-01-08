import Backdrop from 'components/Backdrop';
import Spinner from 'components/Spinner';

type TLoaderBackdrop = {
  open: boolean;
};

const LoaderBackdrop = ({ open }: TLoaderBackdrop) => (
  <Backdrop open={open}>
    <Spinner />
  </Backdrop>
);

export default LoaderBackdrop;
