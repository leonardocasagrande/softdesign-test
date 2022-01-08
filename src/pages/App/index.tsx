import Button from 'components/Button';
import Container from 'components/Container';
import ConfirmationDialog from 'components/dialogs/ConfirmationDialog';
import DragonTable from 'components/DragonTable';
import IconButton from 'components/IconButton';
import Pagination from 'components/Pagination';
import ParticlesBackground from 'components/ParticlesBackground';
import { useApp } from 'contexts/AppContext';
import { useAuth } from 'contexts/AuthContext';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dragonService from 'services/dragon';
import { IDragon } from 'types';
import { AddWrapper, Header } from './styles';

const App = () => {
  const [dragons, setDragons] = useState<IDragon[]>([]);

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const [deletingDragon, setDeletingDragon] = useState<number | null>(null);

  const { setLoading, setErrorMessage, setSuccessMessage } = useApp();

  const { logout, username } = useAuth();

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
    setSuccessMessage(`Volte sempre, ${username}!`);
    logout();
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

  const handleChangeRowsPerPage = (rows: number) => {
    setRowsPerPage(rows);
    setPage(0);
  };

  return (
    <Container>
      <Header>
        <IconButton icon="logout" variant="contained" onClick={handleLogout}>
          Sair
        </IconButton>
      </Header>
      <ParticlesBackground />
      <AddWrapper>
        <Button rounded variant="contained" onClick={handleNewDragon}>
          <span className="material-icons big-icon">add</span>
        </Button>
      </AddWrapper>
      {!!dragons.length && (
        <div>
          <DragonTable
            data={dragons.slice(page * rowsPerPage, (page + 1) * rowsPerPage)}
            onEdit={handleEditDragon}
            onDelete={handleDeleteDragon}
          />
          <Pagination
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            page={page}
            onPageChange={setPage}
            count={dragons.length}
          />
        </div>
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
