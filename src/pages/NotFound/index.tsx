import Button from 'components/Button';
import Container from 'components/Container';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

const NotFound = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <Container>
      <div className={styles.wrapper}>
        <h1 className={styles.text}>Página não encontrada</h1>
        <img className={styles.img} src="404.jpg" alt="not-found" />
        <Button onClick={handleGoBack}>Voltar</Button>
      </div>
    </Container>
  );
};

export default NotFound;
