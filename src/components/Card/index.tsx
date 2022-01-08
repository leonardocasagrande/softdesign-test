import { Container } from './styles';

const Card = ({ children, ...rest }: React.HTMLAttributes<HTMLDivElement>) => (
  <Container {...rest}>{children}</Container>
);

export default Card;
