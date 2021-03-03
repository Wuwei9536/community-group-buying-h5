import { ReactElement } from 'react';
import Test from '../pages/test';
import Home from '../pages/home';
import { lazy } from 'react';

// const Home = lazy(() => import('../pages/home'));

interface IRoutes {
  path: string;
  Component: any;
}

export default [
  {
    path: '/:id',
    Component: Test,
  },
  {
    path: '/',
    Component: Home,
  },
] as IRoutes[];
