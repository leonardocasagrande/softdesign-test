import IconButton from 'components/IconButton';
import { IDragon } from 'types';
import { StyledTable, Td, Th, Tr, Wrapper } from './styles';

interface IDragonTableProps {
  data: IDragon[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const DragonTable = ({ data, onEdit, onDelete }: IDragonTableProps) => {
  return (
    <Wrapper>
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
                <IconButton icon="edit" rounded onClick={() => onEdit(el.id)} />
                <IconButton
                  icon="delete"
                  color="error"
                  rounded
                  onClick={() => onDelete(el.id)}
                />
              </Td>
            </Tr>
          ))}
        </tbody>
      </StyledTable>
    </Wrapper>
  );
};

export default DragonTable;
