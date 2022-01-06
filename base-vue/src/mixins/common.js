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
                if (this.$el.querySelector(`#${id}`)) {
                    this.$el.querySelector(`#${id}`).classList.remove('show')
                }
            })
        },
        toggleDropdown(id) {
            this.$nextTick(() => {
                if (this.$el.querySelector(`#${id}`)) {
                    this.$el.querySelector(`#${id}`).classList.toggle('show')
                    // this.$refs['dropdown-keyword'] && this.$refs['dropdown-keyword'].focus()
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
    },
    created() {
    },
    mounted() {
    }

}