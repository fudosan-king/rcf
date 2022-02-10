import i18n from "../../lang/i18n";
import UserList from "../../views/backend/users/UserList";

export default [
    {
        path: '/admin/users',
        name: 'UserAdmin',
        component: UserList,
        meta: {
            title: i18n.t('pages.auth.login.title'),
        }
    },
]