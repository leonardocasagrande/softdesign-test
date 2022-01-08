import Container from 'components/Container';
import DragonContainer from 'components/DragonContainer';
import IconButton from 'components/IconButton';
import { useNavigate } from 'react-router-dom';

const NewDragon = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate('/app');
  };
  return (
    <Container>
      <IconButton onClick={handleGoBack} icon="arrow_back">
        Voltar
      </IconButton>
      <DragonContainer />
    </Container>
  );
};

export default NewDragon;
