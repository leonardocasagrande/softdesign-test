import Container from 'components/Container';
import DragonContainer from 'components/DragonContainer';
import GoBackHeader from 'components/GoBackHeader';
import { useNavigate } from 'react-router-dom';

const NewDragon = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate('/app');
  };
  return (
    <Container>
      <GoBackHeader onGoBack={handleGoBack} />
      <DragonContainer />
    </Container>
  );
};

export default NewDragon;
