import Button from 'components/Button';
import { ButtonWrapper } from './styles';

interface IGoBackHeaderProps {
  onGoBack: () => void;
}

const GoBackHeader = ({ onGoBack }: IGoBackHeaderProps) => (
  <Button onClick={onGoBack}>
    <ButtonWrapper>
      <span className="material-icons">arrow_back</span>
      Voltar
    </ButtonWrapper>
  </Button>
);

export default GoBackHeader;
