import Button from 'components/Button';
import Card from 'components/Card';
import CreateAccountForm from 'components/CreateAccountForm';
import Divider from 'components/Divider';
import LoginForm from 'components/LoginForm';
import { useState } from 'react';
import { Footer } from './styles';

const AccountCard = () => {
  const [create, setCreate] = useState(false);

  return (
    <Card>
      <h4>{create ? 'Criar conta' : 'Entrar'}</h4>
      {create ? <CreateAccountForm /> : <LoginForm />}
      <Divider />
      <Footer>
        {create ? (
          <>
            Já possui conta?
            <Button
              onClick={() => setCreate(false)}
              style={{ padding: 0, paddingLeft: '8px' }}
            >
              Entrar
            </Button>
          </>
        ) : (
          <>
            Não possui conta?
            <Button
              onClick={() => setCreate(true)}
              style={{ padding: 0, paddingLeft: '8px' }}
            >
              Criar conta
            </Button>
          </>
        )}
      </Footer>
    </Card>
  );
};

export default AccountCard;
