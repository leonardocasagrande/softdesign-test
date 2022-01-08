import Button from 'components/Button';
import Container from 'components/Container';
import { useNavigate } from 'react-router-dom';
import { Img, Text, Wrapper } from './styles';

const NotFound = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    if (localStorage.getItem('username')) {
      navigate('/app');
      return;
    }
    navigate('/');
  };

  return (
    <Container>
      <Wrapper>
        <Text>Página não encontrada</Text>
        <Img src="404.jpg" alt="not-found" />
        <Button onClick={handleGoBack}>Voltar</Button>
      </Wrapper>
    </Container>
  );
};

export default NotFound;
