import * as yup from 'yup';

export const userSchema = yup.object({
  username: yup
    .string()
    .required('Login é obrigatório')
    .max(128, 'Máximo de caracteres permitidos é 128')
    .default('')
    .trim(),
  password: yup.string().required('Senha é obrigatória').default(''),
});

export const newUserSchema = yup.object({
  username: yup
    .string()
    .required('Login é obrigatório')
    .max(128, 'Máximo de caracteres permitidos é 128')
    .default('')
    .trim(),
  password: yup
    .string()
    .required('Senha é obrigatória')
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .max(32, 'A senha deve ter no máximo 32 caracteres')
    .default(''),
  confirmPassword: yup
    .string()
    .required('Confirmação de senha é obrigatória')
    .default('')
    .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais'),
});
