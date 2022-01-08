import Button from 'components/Button';
import Form from 'components/Form';
import TextInput from 'components/TextInput';
import { useApp } from 'contexts/AppContext';
import { useAuth } from 'contexts/AuthContext';
import { getIn, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { newUserSchema } from 'schemas/user';
import authService from 'services/auth';

const CreateAccountForm = () => {
  const { setLoading, setErrorMessage, setSuccessMessage } = useApp();

  const { login } = useAuth();

  const navigate = useNavigate();

  const { handleSubmit, getFieldProps, touched, errors } = useFormik({
    validationSchema: newUserSchema,
    initialValues: newUserSchema.getDefault(),
    onSubmit: async (val) => {
      setLoading(true);
      try {
        await authService.signup({
          username: val.username,
          password: val.password,
        });
        login(val.username);
        setSuccessMessage(`Bem vindo, ${val.username}`);
        navigate('/app');
      } catch (err) {
        setErrorMessage('Erro ao criar usuário');
      }
      setLoading(false);
    },
  });
  const getErrorByKey = (key: string) => {
    const touch = getIn(touched, key);
    if (!touch) return '';
    const err = getIn(errors, key);
    if (!err) return '';
    return err as string;
  };
  return (
    <Form onSubmit={handleSubmit}>
      <TextInput
        label="Login"
        {...getFieldProps('username')}
        autoComplete="username"
        errorText={getErrorByKey('username')}
      />
      <TextInput
        label="Senha"
        {...getFieldProps('password')}
        type="password"
        autoComplete="new-password"
        errorText={getErrorByKey('password')}
      />
      <TextInput
        label="Confirmação"
        {...getFieldProps('confirmPassword')}
        type="password"
        autoComplete="new-password"
        errorText={getErrorByKey('confirmPassword')}
      />
      <Button variant="contained" type="submit">
        Confirmar
      </Button>
    </Form>
  );
};

export default CreateAccountForm;
