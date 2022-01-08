import { ServiceAxios } from 'config/axios';
import { IDragon, IDragonResponse, INewDragon } from 'types';

const dragonService = {
  get: async () => {
    const { data } = await ServiceAxios.get<IDragonResponse[]>('dragon');
    const formattedData: IDragon[] = data.map((el) => ({
      ...el,
      createdAt: new Date(el.createdAt),
    }));
    formattedData.sort((a, b) =>
      a.name.localeCompare(b.name, 'br', { ignorePunctuation: true })
    );
    return formattedData;
  },
  getById: async (id: number) => {
    const { data } = await ServiceAxios.get<IDragonResponse>(`dragon/${id}`);
    const formattedData: IDragon = {
      ...data,
      createdAt: new Date(data.createdAt),
    };
    return formattedData;
  },
  save: async (dragon: INewDragon) => {
    await ServiceAxios.post('dragon', dragon);
  },
  edit: async (dragon: IDragon) => {
    await ServiceAxios.put(`dragon/${dragon.id}`, dragon);
  },
  delete: async (id: number) => {
    await ServiceAxios.delete(`dragon/${id}`);
  },
};

export default dragonService;
