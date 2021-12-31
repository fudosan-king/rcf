import Loading from "./Loading"
import multiselect from "./multiselect"
import Pagination from "./pagination"
import Dropdown from './Dropdown.vue';

export default (Vue) => {
    Vue.component('loading', Loading)
    Vue.component('pagination', Pagination)
    Vue.component('multiselect', multiselect)
    Vue.component('Dropdown', Dropdown)
}