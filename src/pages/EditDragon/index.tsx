import Container from 'components/Container';
import DragonContainer from 'components/DragonContainer';
import IconButton from 'components/IconButton';
import { useApp } from 'contexts/AppContext';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import dragonService from 'services/dragon';
import { IDragon } from 'types';

const EditDragon = () => {
  const { setLoading, setErrorMessage } = useApp();
  const navigate = useNavigate();

  const [dragon, setDragon] = useState<IDragon | null>(null);

  const { id } = useParams();

  const handleGoBack = () => {
    navigate('/app');
  };

  const fetchDragonById = useCallback(
    async (dragonId: number) => {
      setLoading(true);
      try {
        const data = await dragonService.getById(dragonId);
        setDragon(data);
      } catch (err) {
        setErrorMessage('Erro ao buscar dragão');
      }
      setLoading(false);
    },
    [setErrorMessage, setLoading]
  );

  useEffect(() => {
    if (!id) {
      navigate('/app');
      return;
    }
    fetchDragonById(Number(id));
  }, [id, fetchDragonById, navigate]);

  return (
    <Container>
      <IconButton onClick={handleGoBack} icon="arrow_back">
        Voltar
      </IconButton>
      {!!dragon && <DragonContainer data={dragon} />}
    </Container>
  );
};

export default EditDragon;
