enum ROUTES {
    HOME = '/',
    LOGIN = '/login',
    BLOG = '/blog',
    REGISTER = '/register',

    USER_INFO = '/user',
    SETTING = '/setting',

    ADMIN = '/admin',

    ADMIN_POST = '/admin/post',
    ADMIN_POST_EDIT = '/admin/post/edit/:id',
    ADMIN_POST_CREATE = '/admin/post/create',

    ADMIN_PROJECT = '/admin/project',
    ADMIN_PROJECT_EDIT = '/admin/project/edit/:id',
    ADMIN_PROJECT_CREATE = '/admin/project/create',
}

export default ROUTES;
