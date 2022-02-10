import i18n from "../../lang/i18n";
import TransactionList from "../../views/backend/transactions/TransactionList";

export default [
    {
        path: '/admin/transaction',
        name: 'AdminTransaction',
        component: TransactionList,
        meta: {
            title: i18n.t('pages.auth.login.title'),
        }
    },
]