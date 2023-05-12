import { ReactNode } from 'react';

import routes from '~/configs/route';

import PortfolioLayout from '~/layouts/PortfolioLayout/PortfolioLayout';

import Blog from '~/pages/Blog';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Register from '~/pages/Register';

type Route = {
  name: string;
  icon?: ReactNode;
  path: string;
  component: React.FC<any>;
  layout?: React.FC<any> | null;
};

const publicRoutes: Route[] = [
  {
    name: 'Home',
    icon: <i className="uil uil-estate"></i>,
    path: routes.home,
    component: Home,
    layout: PortfolioLayout,
  },
  {
    name: 'Blog',
    icon: <i className="uil uil-blogger-alt"></i>,
    path: routes.blog,
    component: Blog,
  },
  {
    name: 'Login',
    icon: <i className="bx bx-shield"></i>,
    path: routes.login,
    component: Login,
    layout: null,
  },
  {
    name: 'Register',
    icon: <i className="bx bxs-user-check"></i>,
    path: routes.register,
    component: Register,
    layout: null,
  },
];

const privateRoutes: Route[] = [];

export { publicRoutes, privateRoutes };
