import IconButton from 'components/IconButton';
import SelectInput from 'components/SelectInput';
import { Container } from './styles';

interface IPaginationProps {
  pageOptions?: number[];
  rowsPerPage: number;
  onRowsPerPageChange: (val: number) => void;
  count: number;
  page: number;
  onPageChange: (val: number) => void;
}

const DEFAULT_PAGE_OPTIONS: number[] = [2, 5, 10, 15, 25];

const Pagination = ({
  pageOptions = DEFAULT_PAGE_OPTIONS,
  rowsPerPage,
  onRowsPerPageChange,
  count,
  page,
  onPageChange,
}: IPaginationProps) => {
  return (
    <Container>
      <SelectInput
        label="Linhas por página"
        name="rows-per-page"
        options={pageOptions.map((el) => ({ value: el, label: el.toString() }))}
        onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
        value={rowsPerPage}
      />
      <span>
        {`${rowsPerPage * page + 1} - ${
          count < rowsPerPage * (page + 1) ? count : rowsPerPage * (page + 1)
        } de ${count}`}
      </span>
      <IconButton
        onClick={() => onPageChange(page - 1)}
        style={{ padding: 0 }}
        icon="arrow_back_ios"
        disabled={page <= 0}
      />
      <IconButton
        onClick={() => onPageChange(page + 1)}
        style={{ padding: 0 }}
        icon="arrow_forward_ios"
        disabled={(page + 1) * rowsPerPage >= count}
      />
    </Container>
  );
};

export default Pagination;
