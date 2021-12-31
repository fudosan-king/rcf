export default {
    computed: {
        vuelidate() {
            return this.$v
        }
    },
    methods: {
        isRequired(val) {
            return val !== null && val !== '' && val !== undefined
        }
    }
}