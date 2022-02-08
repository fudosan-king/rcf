export default {
    data() {
        return {
            menus: [
                {
                    path_svg: require('../../assets/svgs/icons/ic_chart_bar.svg'),
                    path_svg_active: require('../../assets/svgs/icons/ic_chart_bar_active.svg'),
                    title: this.$t('sidebar.dashboard'),
                    router: {name: 'Dashboard', path: '/admin'},
                    permissions: '',
                    children: [],
                    activeName: 'dashboard',
                    currentData: 'dashboard',
                },
                {
                    path_svg: require('../../assets/svgs/icons/ic_transaction.svg'),
                    path_svg_active: require('../../assets/svgs/icons/ic_transaction_active.svg'),
                    title: this.$t('sidebar.transactions.title'),
                    router: '',
                    permissions: '',
                    children: [
                        {
                            title: this.$t('sidebar.transactions.list'),
                            name: 'TransactionList',
                            path: '/admin/transaction'
                        },
                        {
                            title: this.$t('sidebar.transactions.title'),
                            name: 'CreateTransaction',
                            path: '/admin/transaction/create'
                        },
                    ],
                    activeName: 'transactions',
                    currentData: 'transactions',
                },
                {
                    path_svg: require('../../assets/svgs/icons/ic_fund.svg'),
                    path_svg_active: require('../../assets/svgs/icons/ic_fund_active.svg'),
                    title: this.$t('sidebar.fund'),
                    router: '',
                    permissions: '',
                    children: [
                        {
                            title: this.$t('sidebar.fund.title'),
                            name: 'FundList',
                            path: '/admin/fund'
                        },
                        {
                            title: this.$t('sidebar.fund.create'),
                            name: 'CreateFund',
                            path: '/admin/fund/create'
                        },
                    ],
                    activeName: 'funds',
                    currentData: 'funds',
                },
                {
                    path_svg: require('../../assets/svgs/icons/ic_customer.svg'),
                    path_svg_active: require('../../assets/svgs/icons/ic_customer_active.svg'),
                    title: this.$t('sidebar.customers'),
                    router: {name: 'Customer', path: '/admin/customer'},
                    permissions: '',
                    children: [],
                    activeName: 'customers',
                    currentData: 'customers',
                },
                {
                    path_svg: require('../../assets/svgs/icons/ic_user.svg'),
                    path_svg_active: require('../../assets/svgs/icons/ic_user_active.svg'),
                    title: this.$t('sidebar.user.title'),
                    router: '',
                    permissions: '',
                    children: [
                        {
                            title: this.$t('sidebar.user.list'),
                            name: 'UserList',
                            path: '/admin/user'
                        },
                        {
                            title: this.$t('sidebar.user.create'),
                            name: 'CreateUser',
                            path: '/admin/user/create'
                        },
                        {
                            title: this.$t('sidebar.user.permissions'),
                            name: 'RoleUser',
                            path: '/admin/user/role'
                        }
                    ],
                    activeName: 'customers',
                    currentData: 'customers',
                },
                {
                    path_svg: require('../../assets/svgs/icons/ic_faq.svg'),
                    path_svg_active: require('../../assets/svgs/icons/ic_faq_active.svg'),
                    title: this.$t('sidebar.faq.title'),
                    router: '',
                    children: [
                        {
                            title: this.$t('sidebar.faq.list'),
                            name: 'FaqList',
                            path: '/admin/faq'
                        },
                        {
                            title: this.$t('sidebar.faq.create'),
                            name: 'CreateFaq',
                            path: '/admin/faq/create'
                        },
                    ]
                },
                {
                    path_svg: require('../../assets/svgs/icons/ic_contract.svg'),
                    path_svg_active: require('../../assets/svgs/icons/ic_contract_active.svg'),
                    title: this.$t('sidebar.contract.title'),
                    router: '',
                    children: [
                        {
                            title: this.$t('sidebar.contract.list'),
                            name: 'ContractList',
                            path: '/admin/contract'
                        },
                        {
                            title: this.$t('sidebar.contract.create'),
                            name: 'CreateContract',
                            path: '/admin/contract/create'
                        },
                    ]

                },
                {
                    path_svg: require('../../assets/svgs/icons/ic_setting.svg'),
                    path_svg_active: require('../../assets/svgs/icons/ic_setting_active.svg'),
                    title: this.$t('sidebar.setting'),
                    router: {name: 'Settings', path: '/admin/setting'},
                    permissions: '',
                    children: [],
                    activeName: 'settings',
                    currentData: 'settings',
                }
            ],
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
                    sidebar.children[i].classList.remove('before-active')
                    sidebar.children[i].classList.remove('after-active')
                }
                for (let i = 0; i < sidebar.children.length; i++) {
                    if (this.activeSidebar) {
                        if (sidebar.children[i].classList.contains('active')) {
                            sidebar.children[i].querySelector('img').setAttribute('src', this.menus[i - 1].path_svg)
                            sidebar.children[i - 1] && sidebar.children[i - 1].classList.add('before-active')
                            sidebar.children[i + 1] && sidebar.children[i + 1].classList.add('after-active')
                            return
                        }
                    } else {
                        if (sidebar.children[i + 1] && sidebar.children[i + 1].querySelector('img')) {
                            sidebar.children[i + 1].querySelector('img').setAttribute('src', this.menus[i].path_svg_active)
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
                        sidebar.children[i + 1].querySelector('img') && sidebar.children[i + 1].querySelector('img').setAttribute('src', this.menus[i].path_svg_active)
                    }
                    if (sidebar.children[i - 1] && !sidebar.children[i - 1].classList.contains('active')) {
                        sidebar.children[i].classList.remove('after-active')
                    }
                    if (sidebar.children[i + 1] && !sidebar.children[i + 1].classList.contains('active')) {
                        sidebar.children[i].classList.remove('before-active')
                    }
                }
            })
        },
        hoverSidebar(index) {
            this.$nextTick(() => {
                const sidebar = this.$el.querySelector('#menu-list-sidebar')
                for (let i = 0; i < sidebar.children.length; i++) {
                    if (sidebar.children[i - 1] && !sidebar.children[i - 1].classList.contains('active')) {
                        sidebar.children[i].classList.remove('after-active')
                    }
                    if (sidebar.children[i + 1] && !sidebar.children[i + 1].classList.contains('active')) {
                        sidebar.children[i].classList.remove('before-active')
                    }
                }
                if (this.menus[index - 1]) {
                    sidebar.children[index].querySelector('img').setAttribute('src', this.menus[index - 1].path_svg)
                }
                sidebar.children[index - 1] && sidebar.children[index - 1].classList.add('before-active')
                sidebar.children[index + 1] && sidebar.children[index + 1].classList.add('after-active')
            })
        },
        setSidebarRoles(user) {
            console.log(user)
        }
    },
    created() {
        this.setSidebarRoles(this.userInfo)
    },
    mounted() {
        this.setSidebarRoles(this.userInfo)
    }
}