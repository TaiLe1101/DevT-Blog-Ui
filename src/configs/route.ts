import { RouteConfigType } from '~/types/route.type';

const routes: RouteConfigType = {
    home: '/',
    login: '/login',
    blog: '/blog',
    register: '/register',

    userInfo: '/user',
    setting: '/setting',

    admin: '/admin',
    adminPost: '/admin/post',
    adminPostDetail: '/admin/post/:id',
};

export default routes;
