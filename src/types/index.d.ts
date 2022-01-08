export interface IRoute {
  name: string;
  path: string;
  component: string;
  secure: boolean;
}

export interface IUser {
  username: string;
  password: string;
}

export interface INewDragon {
  name: string;
  type: string;
}

export interface IDragonResponse {
  id: number;
  name: string;
  type: string;
  createdAt: string;
}

export interface IDragon extends INewDragon {
  id: number;
  createdAt: Date;
}

export type TColor = 'primary' | 'secondary' | 'error' | 'warning';
