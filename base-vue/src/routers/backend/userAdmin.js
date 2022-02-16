import i18n from "../../lang/i18n";
import UserList from "../../views/backend/users/UserList";
import UserCreate from "../../views/backend/users/UserCreate";

export default [
    {
        path: '/admin/users',
        name: 'UserAdmin',
        component: UserList,
        meta: {
            title: i18n.t('pages.auth.login.title'),
        }
    },
    {
        path: '/admin/users',
        name: 'UserAdminCreate',
        component: UserCreate,
        meta: {
            title: i18n.t('pages.auth.login.title'),
        }
    },
]