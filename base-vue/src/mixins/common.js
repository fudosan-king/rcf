// import i18n from "../lang/i18n";
export default {
    data() {
        return {
            prefectures: [
                '北海道',
                '青森県',
                '岩手県',
                '宮城県',
                '秋田県',
                '山形県',
                '福島県',
                '茨城県',
                '栃木県',
                '群馬県',
                '埼玉県',
                '千葉県',
                '東京都',
                '神奈川県',
                '新潟県',
                '山梨県',
                '長野県',
                '富山県',
                '石川県',
                '福井県',
                '岐阜県',
                '静岡県',
                '愛知県',
                '三重県',
                '滋賀県',
                '京都府',
                '大阪府',
                '兵庫県',
                '奈良県',
                '和歌山県',
                '鳥取県',
                '島根県',
                '岡山県',
                '広島県',
                '山口県',
                '徳島県',
                '香川県',
                '愛媛県',
                '高知県',
                '福岡県',
                '佐賀県',
                '長崎県',
                '熊本県',
                '大分県',
                '宮崎県',
                '鹿児島県',
                '沖縄県',
            ],
            prefecturePlaceholder: '都道府県を選択してください',
            modalOpened: false,
            professions: [
                '未取得',
                '営業／営業企画',
                '財務／会計／経理',
                '総務',
                '施設・設備管理',
                '人事／労務',
                '法務／知的財産',
                '売り場担当',
                'ホール/フロアスタッフ',
                '調理',
                '旅行手配/ツアーコンダクター',
                'ホテル/宿泊サービス',
                'ドライバー/配送スタッフ',
                '鉄道・航空・船舶乗務員',
                '倉庫管理',
                '警備/守衛',
                '清掃関連スタッフ',
                'ビル施設管理/メンテナンス',
                '不動産販売',
                'マンション管理',
                '購買／物流',
                '仕入／商品管理',
                '一般事務／営業事務',
                '企画',
                '広報／IR',
                '調査／マーケティング',
                '経営企画／事業企画',
                '経営管理／コンサルタント（会計／戦略など）',
                'コンサルタント（人事）',
                'コンサルタント（IT関係）',
                'カスタマーサポート',
                '情報システム',
                '研究／開発',
                '生産／製造',
                '生産技術／生産計画',
                '品質管理／検査',
                'インテリアデザイナー・インテリアコーディネーター',
                'クリエイター／デザイナー',
                '建築士',
                '設計',
                'プランニング・測量・積算',
                '施工管理',
                '工事',
                '大工',
                'MR／医療用具営業（医薬）',
                '管理栄養士、栄養士',
                '訪問介護員（ホームヘルパー）',
                '介護福祉士',
                '保健師',
                '医師（歯科・眼科医師以外）',
                '歯科医師',
                '眼科医師',
                '獣医師',
                '薬剤師',
                '看護師',
                '准看護師',
                '看護助手',
                '理学療法士',
                '作業療法士',
                '歯科衛生士',
                '歯科技工士',
                '医療事務',
                '介護事務',
                'その他医療機関従事者',
                '弁護士',
                '弁理士、司法書士、行政書士',
                '公認会計士、税理士',
                '美容師、理容師',
                '美容部員',
                '保育士',
                '幼稚園教員',
                '教員（小学校～大学院・専門学校）',
                '教員（その他）',
                '学校事務職員・用務員・教育委員会',
                'その他',
            ],
            professionPlaceholder: "選択してください",
            investmentPurposes: [
                "投資目的 1",
                "投資目的 2",
                "投資目的 3",
                "投資目的 4",
                "投資目的 5",
            ],
            investmentMethods: [
                "投資方法 1",
                "投資方法 2",
                "投資方法 3",
                "投資方法 4",
                "投資方法 5",
            ],
            investmentExperiences: [
                "投資のご経験 1",
                "投資のご経験 2",
                "投資のご経験 3",
                "投資のご経験 4",
                "投資のご経験 5",
            ],
            investmentTypes: [
                "投資資金の種類 1",
                "投資資金の種類 2",
                "投資資金の種類 3",
                "投資資金の種類 4",
                "投資資金の種類 5",
            ],
            documentTypes: [
                "Type 1",
                "Type 2",
                "Type 3",
                "Type 4",
                "Type 5",
            ],
            bankNames: [
                "Bank 1",
                "Bank 2",
                "Bank 3",
                "Bank 4",
                "Bank 5",
            ],
            accountTypes: [
                "Type 1",
                "Type 2",
                "Type 3",
                "Type 4",
                "Type 5",
            ],
            accountNames: [
                "Name 1",
                "Name 2",
                "Name 3",
                "Name 4",
                "Name 5",
            ]


        }
    },
    watch: {
        userInfo(val) {
            console.log(val)
        }
    },
    methods: {
        closeDropdown(id) {
            this.$nextTick(() => {
                let dropdown = this.$el.querySelector(`#${id}`)
                if (dropdown) {
                    dropdown.classList.remove('show')
                    let dropdownItem = dropdown.lastChild
                    dropdownItem.classList.remove('show')
                }
            })
        },
        toggleDropdown(id) {
            this.$nextTick(() => {
                let dropdown = this.$el.querySelector(`#${id}`)
                if (dropdown) {
                    dropdown.classList.toggle('show');
                    let dropdownItem = dropdown.lastChild
                    dropdownItem.classList.toggle('show')
                }
            })
        },
        closeModal(id) {
            if (this.modalOpened) {
                this.$nextTick(() => {
                    if (this.$el.querySelector(`#${id}`)) {
                        this.$el.querySelector(`#${id}`).classList.remove('show')
                    }
                })
                setTimeout(() => {
                    this.modalOpened = false
                })
            }
        },
        toggleModal(id) {
            this.$nextTick(() => {
                if (this.$el.querySelector(`#${id}`)) {
                    this.$el.querySelector(`#${id}`).classList.toggle('show')
                }
            })
        },
        dropDisplay(list, id) {
            let name = ''
            list.map((e) => {
                if (e.id === id) {
                    name = e.name
                }
            })
            return name
        },
        toggleDropPageRange(id) {
            this.$nextTick(() => {
                let dropdown = this.$el.querySelector(`#${id}`)
                if (dropdown) {
                    dropdown.classList.toggle('show');
                    let dropdownItem = dropdown.lastChild
                    dropdownItem.classList.toggle('show')
                }
            })
        },
        closeDropPageRange(id) {
            this.$nextTick(() => {
                let dropdown = this.$el.querySelector(`#${id}`)
                if (dropdown) {
                    dropdown.classList.remove('show')
                    let dropdownItem = dropdown.lastChild
                    dropdownItem.classList.remove('show')
                }
            })
        },
    },
    created() {
    },
    mounted() {
    }

}