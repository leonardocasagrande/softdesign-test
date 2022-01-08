import Button from 'components/Button';
import { IDragon } from 'types';
import { StyledTable, Td, Th, Tr } from './styles';

interface IDragonTableProps {
  data: IDragon[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const DragonTable = ({ data, onEdit, onDelete }: IDragonTableProps) => {
  return (
    <div>
      <StyledTable>
        <thead>
          <tr>
            <Th>Nome</Th>
            <Th>Tipo</Th>
            <Th>Data de criação</Th>
            <Th>Ações</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <Tr key={el.id}>
              <Td>{el.name}</Td>
              <Td>{el.type}</Td>
              <Td>{el.createdAt.toLocaleDateString('pt-br')}</Td>
              <Td>
                <Button variant="text" rounded onClick={() => onEdit(el.id)}>
                  <span className="material-icons">edit</span>
                </Button>
                <Button
                  variant="text"
                  color="error"
                  rounded
                  onClick={() => onDelete(el.id)}
                >
                  <span className="material-icons">delete</span>
                </Button>
              </Td>
            </Tr>
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
};

export default DragonTable;
