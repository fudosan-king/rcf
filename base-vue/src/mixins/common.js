// import i18n from "../lang/i18n";
export default {
    data() {
        return {
            prefectures: [
                {id: 1, name: '愛知県'},
                {id: 2, name: '秋田県'},
                {id: 3, name: '東京都'},
                {id: 4, name: '香川県'},
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