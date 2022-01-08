import { IRoute } from 'types/index';

const routes: IRoute[] = [
  {
    name: 'home',
    path: '/',
    component: 'Home',
    secure: false,
  },
  {
    name: 'app',
    path: '/app',
    component: 'App',
    secure: true,
  },
  {
    name: 'newDragon',
    path: '/app/new-dragon',
    component: 'NewDragon',
    secure: true,
  },
  {
    name: 'editDragon',
    path: '/app/edit-dragon/:id',
    component: 'EditDragon',
    secure: true,
  },
];

export default routes;
