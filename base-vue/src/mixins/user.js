import MixinService from "../services/MixinService";

export default {
    data() {
        return {
            roles: [
                {id: 1, name: 'System Admin'},
                {id: 2, name: '管理者'},
                {id: 3, name: '役職者'},
                {id: 4, name: '一般従業員'},
            ],
            modalOpened: false,
        }
    },
    methods: {
        closeDropdown(id) {
            this.$nextTick(() => {
                if (this.$el.querySelector(`#${id}`)) {
                    this.$el.querySelector(`#${id}`).classList.remove('show')
                    this.$el.querySelector('.dropdown-menu').classList.remove('show')
                }
            })
        },
        toggleDropdown(id) {
            this.$nextTick(() => {
                if (this.$el.querySelector(`#${id}`)) {
                    this.$el.querySelector(`#${id}`).classList.toggle('show')
                    this.$el.querySelector('.dropdown-menu').classList.toggle('show')
                }
            })
        },
        closeModal(id) {
            if (this.modalOpened) {
                this.$nextTick(() => {
                    if (this.$el.querySelector(`#${id}`)) {
                        this.$el.querySelector(`#${id}`).classList.remove('show')
                        document.querySelector('.modal-backdrop').classList.remove('show')

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
                    document.querySelector('.modal-backdrop').classList.toggle('show')
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
        // call API list
        async getData(type) {
            await MixinService[type]()
                .then((res) => {
                    if (res) {
                        if (res.data[type].length) {
                            this[type] = res.data[type]
                        }
                    }
                })
                .catch((err) => {
                    this.$toast.error(err.data.message)
                })
        }
    },
    created() {
    }
}