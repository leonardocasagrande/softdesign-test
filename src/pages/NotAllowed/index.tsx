import Button from 'components/Button';
import Container from 'components/Container';
import { useNavigate } from 'react-router-dom';
import { Img, Text, Wrapper } from './styles';

const NotAllowed = () => {
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
        <Text>Página não autorizada</Text>
        <Img src="401.jpg" alt="not-found" />
        <Button onClick={handleGoBack}>Voltar</Button>
      </Wrapper>
    </Container>
  );
};

export default NotAllowed;
