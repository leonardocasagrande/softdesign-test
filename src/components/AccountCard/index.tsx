import Button from 'components/Button';
import Divider from 'components/Divider';
import TextInput from 'components/TextInput';
import { useState } from 'react';
import styles from './styles.module.css';

const AccountCard = () => {
  const [create, setCreate] = useState(false);
  return (
    <div className={styles.root}>
      <h4>{create ? 'Criar conta' : 'Entrar'}</h4>
      <form className={styles.form}>
        <TextInput label="Login" id="username" autoComplete="username" />
        <TextInput
          label="Senha"
          id="password"
          type="password"
          autoComplete={create ? 'new-password' : 'current-password'}
        />
        <Button variant="contained" type="submit">
          Confirmar
        </Button>
        <Divider />
        <div className={styles.footer}>
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
        </div>
      </form>
    </div>
  );
};

export default AccountCard;
