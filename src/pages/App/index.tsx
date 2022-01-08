import Button from 'components/Button';
import Container from 'components/Container';
import ConfirmationDialog from 'components/dialogs/ConfirmationDialog';
import DragonTable from 'components/DragonTable';
import ParticlesBackground from 'components/ParticlesBackground';
import { useApp } from 'contexts/AppContext';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dragonService from 'services/dragon';
import { IDragon } from 'types';

const App = () => {
  const [dragons, setDragons] = useState<IDragon[]>([]);

  const [deletingDragon, setDeletingDragon] = useState<number | null>(null);

  const { setLoading, setErrorMessage, setSuccessMessage } = useApp();

  const fetchDragons = useCallback(async () => {
    setLoading(true);
    try {
      const data = await dragonService.get();
      setDragons(data);
    } catch (err) {
      setErrorMessage('Erro ao buscar dragões');
    }
    setLoading(false);
  }, [setLoading, setErrorMessage]);

  useEffect(() => {
    fetchDragons();
  }, [fetchDragons]);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/');
  };

  const handleNewDragon = () => {
    navigate('/app/new-dragon');
  };

  const handleEditDragon = (id: number) => {
    navigate(`/app/edit-dragon/${id}`);
  };

  const handleDeleteDragon = (id: number) => {
    setDeletingDragon(id);
  };

  const handleConfirmDeleteDragon = async () => {
    if (deletingDragon) {
      setLoading(true);
      try {
        await dragonService.delete(deletingDragon);
        await fetchDragons();
        setSuccessMessage('Dragão removido com sucesso');
      } catch (err) {
        setErrorMessage('Erro ao remover dragão');
      }
      setDeletingDragon(null);
      setLoading(false);
    }
  };

  return (
    <Container>
      <ParticlesBackground />
      <Button rounded variant="contained" onClick={handleLogout}>
        <span className="material-icons">logout</span>
      </Button>
      <Button rounded variant="contained" onClick={handleNewDragon}>
        <span className="material-icons">add</span>
      </Button>
      {!!dragons.length && (
        <DragonTable
          data={dragons}
          onEdit={handleEditDragon}
          onDelete={handleDeleteDragon}
        />
      )}
      <ConfirmationDialog
        open={!!deletingDragon}
        onClose={() => setDeletingDragon(null)}
        onConfirm={handleConfirmDeleteDragon}
        title="Deseja realmente remover o dragão?"
        description="O dragão será removido para sempre!"
      />
    </Container>
  );
};

export default App;
