import * as yup from 'yup';

const dragonSchema = yup.object({
  name: yup.string().required('Nome é obrigatório').default('').trim().max(128),
  type: yup.string().required('Tipo é obrigatório').default(''),
});

export default dragonSchema;
