import ClickOut from './click-out'
import { VBTooltip } from 'bootstrap-vue'
export default (Vue) => {
    Vue.directive('click-out', ClickOut);
    Vue.directive('tooltip', VBTooltip)
};