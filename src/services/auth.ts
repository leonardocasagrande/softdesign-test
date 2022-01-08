import { AuthAxios } from 'config/axios';
import { IUser } from 'types';

const authService = {
  signup: async (body: IUser) => {
    await AuthAxios.post('/users', body);
  },
  signin: async (body: IUser) => {
    const params = {
      username: body.username,
    };
    const { data } = await AuthAxios.get('/users', { params });
    if (!data.length) throw new Error('Usuário não existe');
    if (data[0].password !== body.password) throw new Error('Senha incorreta');
    return data[0];
  },
};

export default authService;
