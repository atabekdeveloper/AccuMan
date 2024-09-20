import { Home, Users, NotFound } from 'src/components/pages';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/users', element: <Users /> },
  { path: '*', element: <NotFound /> },
];

export { routes };
