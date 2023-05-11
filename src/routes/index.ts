import { ReactNode } from 'react';

import routes from '~/configs/route';

import PortfolioLayout from '~/layouts/PortfolioLayout/PortfolioLayout';

import Blog from '~/pages/Blog';
import Home from '~/pages/Home';
import Login from '~/pages/Login';

type Route = {
  path: string;
  component: React.FC<any>;
  layout?: React.FC<any> | null;
};

const publicRoutes: Route[] = [
  {
    path: routes.home,
    component: Home,
    layout: PortfolioLayout,
  },
  {
    path: routes.login,
    component: Login,
  },
  {
    path: routes.blog,
    component: Blog,
  },
];

const privateRoutes: Route[] = [];

export { publicRoutes, privateRoutes };
