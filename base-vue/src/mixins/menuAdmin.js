export default {
    data() {
        return {
            menus: [
                {
                    path_svg: require('../assets/svgs/icons/ic_chart_bar_active.svg'),
                    path_svg_dark: require('../assets/svgs/icons/ic_chart_bar.svg'),
                    title: this.$t('sidebar.dashboard'),
                    router: {name: 'Dashboard', path: '/admin'},
                    permissions: '',
                    children: [],
                    activeName: 'dashboard',
                    currentData: 'dashboard',
                },
                {
                    path_svg: require('../assets/svgs/icons/ic_transaction_active.svg'),
                    path_svg_dark: require('../assets/svgs/icons/ic_transaction.svg'),
                    title: this.$t('sidebar.transactions.title'),
                    router: {name: 'AdminTransaction', path: '/admin/transactions'},
                    permissions: '',
                    children: [],
                    activeName: 'transactions',
                    currentData: 'transactions',
                },
                {
                    path_svg: require('../assets/svgs/icons/ic_fund_active.svg'),
                    path_svg_dark: require('../assets/svgs/icons/ic_fund.svg'),
                    title: this.$t('sidebar.fund.title'),
                    router: '',
                    permissions: '',
                    children: [
                        {
                            title: this.$t('sidebar.fund.title'),
                            name: 'AdminFund',
                            path: '/admin/funds'
                        },
                        {
                            title: this.$t('sidebar.fund.create'),
                            name: 'CreateFund',
                            path: '/admin/fund/create'
                        },
                    ],
                    activeName: 'funds',
                    currentData: 'funds',
                    type: 'sub',
                },
                {
                    path_svg: require('../assets/svgs/icons/ic_customer_active.svg'),
                    path_svg_dark: require('../assets/svgs/icons/ic_customer.svg'),
                    title: this.$t('sidebar.customers'),
                    router: {name: 'Customer', path: '/admin/customers'},
                    permissions: '',
                    children: [],
                    activeName: 'customers',
                    currentData: 'customers',
                    type: '',
                },
                {
                    path_svg: require('../assets/svgs/icons/ic_user_active.svg'),
                    path_svg_dark: require('../assets/svgs/icons/ic_user.svg'),
                    title: this.$t('sidebar.user.title'),
                    router: '',
                    permissions: '',
                    children: [
                        {
                            title: this.$t('sidebar.user.title'),
                            name: 'UserAdmin',
                            path: '/admin/users'
                        },
                        {
                            title: this.$t('sidebar.user.create'),
                            name: 'CreateUser',
                            path: '/admin/user/create'
                        },
                    ],
                    activeName: 'users',
                    currentData: 'users',
                    type: 'sub',
                },
                {
                    path_svg: require('../assets/svgs/icons/ic_faq_active.svg'),
                    path_svg_dark: require('../assets/svgs/icons/ic_faq.svg'),
                    title: this.$t('sidebar.faq.title'),
                    router: '',
                    children: [
                        {
                            title: this.$t('sidebar.fund.title'),
                            name: 'AdminFaq',
                            path: '/admin/faqs'
                        },
                        {
                            title: this.$t('sidebar.fund.create'),
                            name: 'CreateFaq',
                            path: '/admin/faq/create'
                        },
                        {
                            title: this.$t('sidebar.faq.category'),
                            name: 'AdminFaqCategory',
                            path: '/admin/faq-categories'
                        },
                    ],
                    permissions: '',
                    activeName: 'faqs',
                    currentData: 'faqs',
                    type: "sub"
                },
                {
                    path_svg: require('../assets/svgs/icons/ic_setting_active.svg'),
                    path_svg_dark: require('../assets/svgs/icons/ic_setting.svg'),
                    title: this.$t('sidebar.setting'),
                    router: {name: 'AdminSetting', path: '/admin/setting'},
                    permissions: '',
                    children: [],
                    activeName: 'settings',
                    currentData: 'settings',
                }
            ],
            menuShow: {
                dashboard: true,
                transactions: true,
                funds: true,
                customers: true,
                users: true,
                faqs: true,
                settings: true,
            }
        }
    },
    watch: {
        userInfo(val) {
            this.setSidebarRoles(val)
        }
    },
    methods: {
        styleSidebar() {
            this.$nextTick(() => {
                const sidebar = this.$el.querySelector('#menu-list-sidebar')
                for (let i = 0; i < sidebar.children.length; i++) {
                    if (this.activeSidebar) {
                        if (sidebar.children[i].classList.contains('active')) {
                            sidebar.children[i].querySelector('img').setAttribute('src', this.menus[i - 1].path_svg)
                            return
                        }
                    } else {
                        if (sidebar.children[i + 1] && sidebar.children[i + 1].querySelector('img')) {
                            sidebar.children[i + 1].querySelector('img').setAttribute('src', this.menus[i].path_svg_dark)
                        }
                    }
                }
            })
        },
        leaveSidebar() {
            this.$nextTick(() => {
                const sidebar = this.$el.querySelector('#menu-list-sidebar')
                for (let i = 0; i < sidebar.children.length; i++) {
                    if (this.menus[i] && sidebar.children[i + 1] && !sidebar.children[i + 1].classList.contains('active')) {
                        sidebar.children[i + 1].querySelector('img') && sidebar.children[i + 1].querySelector('img').setAttribute('src', this.menus[i].path_svg_dark)
                    }
                }
            })
        },
        hoverSidebar(index) {
            this.$nextTick(() => {
                const sidebar = this.$el.querySelector('#menu-list-sidebar')
                if (this.menus[index - 1]) {
                    sidebar.children[index].querySelector('img').setAttribute('src', this.menus[index - 1].path_svg)
                }
            })
        },
        setSidebarRoles(user) {
            if (user) {
                this.menuShow = {
                    dashboard: true,
                    transactions: true,
                    funds: true,
                    customers: true,
                    faqs: true,
                    settings: true,
                    users: user.role_id === 1 || user.role_id === 2,
                }
                this.menus.map((e) => {
                    this.$set(e, 'isShown', this.menuShow[e.activeName])
                })
            }
        },
    },
    created() {
        this.setSidebarRoles(this.userInfo)
    },
    mounted() {
        this.setSidebarRoles(this.userInfo)
    }
}