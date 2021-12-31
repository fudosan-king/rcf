export default {
    data() {
        return {
            menus: [
                {
                    title: this.$t('frontend.navbar.register'),
                    router: {name: 'registerUser', path: '/register'},
                    permissions: '',
                    children: [],
                    activeName: 'home',
                        currentData: 'home',
                },
                {
                    title: this.$t('frontend.navbar.login'),
                    router: {name: 'registerUser', path: '/home'},
                    permissions: '',
                    children: [],
                    activeName: 'login',
                    currentData: 'login',
                },
                {
                    title: this.$t('frontend.navbar.transition.info'),
                    router: {name: 'transition', path: '/transition'},
                    type: 'sub',
                    permissions: '',
                    children: [
                        {
                            title: this.$t('frontend.navbar.transition.fund_condition'),
                            name: 'FundCondition',
                            path: '/fund'
                        },
                        {
                            title: this.$t('frontend.navbar.transition.portfolio'),
                            name: 'TransPortfolio',
                            path: '/portfolio'
                        },
                        {
                            title: this.$t('frontend.navbar.transition.transaction_history'),
                            name: 'TransitionHistory',
                            path: '/history'
                        },
                        {
                            title: this.$t('frontend.navbar.transition.document'),
                            name: 'TransitionDocument',
                            path: '/document'
                        },
                    
                    ],
                    activeName: 'transition',
                    currentData: 'transition',
                },
                {
                    title: this.$t('frontend.navbar.customers.title'),
                    router: '',
                    permissions: '',
                    type: 'sub',
                    children: [
                        {
                            title: this.$t('frontend.navbar.customers.info'),
                            name: 'CustomerInfo', path: 'customer/profile'
                        },
                        {
                            title: this.$t('frontend.navbar.customers.logout'),
                            name: 'Logout', path: '/logout'
                        },
                    ],
                    activeName: 'customers',
                    currentData: 'customers',
                },
                {
                    title: this.$t('frontend.navbar.fund.title'),
                    router: '',
                    permissions: '',
                    type: 'sub',
                    children: [
                        {
                            title: this.$t('frontend.navbar.fund.list'),
                            name: 'FundList', path: '/fund'
                        },
                    ],
                    activeName: 'fund',
                    currentData: 'fund',
                },
                {
                    title: this.$t('frontend.navbar.use.title'),
                    router: '',
                    permissions: '',
                    type: 'sub',
                    children: [
                        {
                            title: this.$t('frontend.navbar.use.faq'),
                            name: 'Faq', path: '/faq'
                        },
                        {
                            title: this.$t('frontend.navbar.use.contact'),
                            name: 'Contact', path: '/contact'
                        },
                    ],
                    activeName: 'home',
                    currentData: 'home',
                }
            ],
            menuShow: {},
            menuRight: [
                {
                    title: 'ファンド一覧',
                    router: {name: 'Dashboard', path: '/home'},
                },
                {
                    title: 'ご利用の流れ',
                    router: {name: 'Dashboard', path: '/home'},
                },
                {
                    title: 'FAQ',
                    router: {name: 'Dashboard', path: '/home'},
                },
                {
                    title: 'お問い合わせ',
                    router: {name: 'Dashboard', path: '/home'},
                },
                {
                    title: '金融商品勧誘方針',
                    router: {name: 'Dashboard', path: '/home'},
                },
                {
                    title: '反社会的勢力に対する基本方針',
                    router: {name: 'Dashboard', path: '/home'},
                },
                {
                    title: '電子情報処理組織の管理に関する基本方針',
                    router: {name: 'Dashboard', path: '/home'},
                },
                {
                    title: 'クーリングオフ及び中途解約の流れ',
                    router: {name: 'Dashboard', path: '/home'},
                },
            ],
            menuLeft: [
                {
                    title: '個人情報保護方針',
                    router: {name: 'Dashboard', path: '/home'},
                },
                {
                    title: 'サイト利用規約',
                    router: {name: 'Dashboard', path: '/home'},
                },
                {
                    title: '業務管理者名簿',
                    router: {name: 'Dashboard', path: '/home'},
                },
            ]
        }
    },
    watch: {
        userInfo(val) {
            // this.setSidebarRoles(val)
            console.log(val)
        }
    },
    methods: {
        // setSidebarRoles(user) {
        //     if (user) {
        //         this.menuShow = {}
        //         this.menus.map((e) => {
        //             this.$set(e, 'isShown', this.menuShow[e.activeName])
        //         })
        //     }
        // }
    },
    created() {
        // this.setSidebarRoles(this.userInfo)
    },
    mounted() {
        // this.setSidebarRoles(this.userInfo)
    }
}