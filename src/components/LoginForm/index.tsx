import Button from 'components/Button';
import Form from 'components/Form';
import TextInput from 'components/TextInput';
import { useApp } from 'contexts/AppContext';
import { useAuth } from 'contexts/AuthContext';
import { getIn, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { userSchema } from 'schemas/user';
import authService from 'services/auth';

const LoginForm = () => {
  const { setLoading, setErrorMessage, setSuccessMessage } = useApp();

  const { login } = useAuth();

  const navigate = useNavigate();

  const { handleSubmit, getFieldProps, touched, errors } = useFormik({
    validationSchema: userSchema,
    initialValues: userSchema.getDefault(),
    onSubmit: async (val) => {
      setLoading(true);
      try {
        const username = await authService.signin(val);
        login(username);
        setSuccessMessage(`Bem vindo, ${username}`);
        navigate('/app');
      } catch (err) {
        if (err instanceof Error) {
          setErrorMessage(err.message);
        } else if (typeof err === 'string') {
          setErrorMessage(err);
        }
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
      <Button variant="contained" type="submit">
        Confirmar
      </Button>
    </Form>
  );
};

export default LoginForm;
