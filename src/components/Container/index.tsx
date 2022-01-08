import { Wrapper } from './styles';

const Container = ({
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default Container;
