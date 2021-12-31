import i18n from "../../lang/i18n";
import Flow from "../../views/frontend/Flow";

export default [
    {
        path: 'flow',
        name: 'Flow',
        component: Flow,
        meta: {
            title: i18n.t('frontend.flow.title'),
        }
    },

]