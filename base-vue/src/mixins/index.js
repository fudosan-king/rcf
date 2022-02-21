import Validator from './validator'
import authUserAdmin from "@/mixins/authUserAdmin";

export default (Vue) => {
    Vue.mixin(Validator)
    Vue.mixin(authUserAdmin)
}