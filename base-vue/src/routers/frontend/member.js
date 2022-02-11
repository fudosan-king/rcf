import i18n from "../../lang/i18n";
import MemberHome from "../../views/frontend/Member/MemberHome";
import MemberDetail from "../../views/frontend/Member/MemberDetail";
import MemberEcontract from "../../views/frontend/Member/MemberEcontract";
import MemberEcontractBefore from "../../views/frontend/Member/MemberEcontractBefore";
import MemberEcontractDocument from "../../views/frontend/Member/MemberEcontractDocument";
import MemberEcontractNow from "../../views/frontend/Member/MemberEcontractNow";
import MemberEcontractPolicy from "../../views/frontend/Member/MemberEcontractPolicy";

export default [
    {
        path: 'member',
        name: 'Member',
        component: MemberHome,
        meta: {
            title: i18n.t('frontend.member.titlehome'),
        }
    },
    {
        path: 'member/e-contracts',
        name: 'MemberEcontract',
        component: MemberEcontract,
        meta: {
            title: i18n.t('frontend.member.titledetail'),
        }
    },
    {
        path: 'member/e-contracts-before',
        name: 'MemberEcontractBefore',
        component: MemberEcontractBefore,
        meta: {
            title: i18n.t('frontend.member.titledetail'),
        }
    },
    {
        path: 'member/e-contracts-now',
        name: 'MemberEcontractNow',
        component: MemberEcontractNow,
        meta: {
            title: i18n.t('frontend.member.titledetail'),
        }
    },
    {
        path: 'member/e-contracts-document',
        name: 'MemberEcontractDocument',
        component: MemberEcontractDocument,
        meta: {
            title: i18n.t('frontend.member.titledetail'),
        }
    },
    {
        path: 'member/e-contracts-policy',
        name: 'MemberEcontractPolicy',
        component: MemberEcontractPolicy,
        meta: {
            title: i18n.t('frontend.member.titledetail'),
        }
    },
    {
        path: 'member/:id',
        name: 'MemberDetail',
        component: MemberDetail,
        meta: {
            title: i18n.t('frontend.member.titledetail'),
        }
    },
]