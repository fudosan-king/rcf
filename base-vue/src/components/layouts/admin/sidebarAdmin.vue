<template>
    <aside class="app-sidebar sidebar-scroll open ps ps--active-y">
        <div class="main-sidebar-header">
            <a class="desktop-logo logo-light active">
                <img src="../../../assets/svgs/logo/logo-green.svg" class="main-logo" alt="logo">
            </a>
            <a class="logo-icon mobile-logo icon-light active">
                <img src="../../../assets/svgs/logo/logo.svg" class="logo-icon" alt="logo">
            </a>
        </div>
        <div class="main-side-menu">
            <div class="app-sidebar__user">
                <div class="dropdown user-pro-body">
                    <a @click="goTo({name: 'homeAdmin'})">
                        <img alt="user-img" class="avatar avatar-xl rounded-circle bg-white "
                             :src="avatar">
                        <span class="avatar-status profile-status bg-green"></span>
                    </a>
                    <div class="user-info">
                        <h4 class="fw-semibold mt-3 mb-0">Petey Cruiser</h4>
                        <span class="mb-0 text-muted">Premium Member</span>
                    </div>
                </div>
            </div>
            <ul class="side-menu" id="menu-list-sidebar">
                <li class="slide"><a href="#"></a></li>
                <template v-for="(menu, index) in menus">
                    <li :key="'menu-' + index" class="slide"
                        :class="{'active': menu.activeName === activeSidebar}">
                        <a class="side-menu__item" data-toggle="slide"
                           @click="goTo(menu.router, menu.currentData, menu.activeName)"
                           @mouseover="hoverSidebar(index + 1)" @mouseleave="leaveSidebar()"
                        >
                            <img :src="menu.path_svg_dark" class="side-menu__image">
                            <span class="side-menu__label">{{ menu.title }}</span>
                            <i class="angle fe fe-chevron-down"
                               v-if="(menu.type === 'sub') && menu.children.length"></i>
                        </a>
                    </li>
                </template>
                <li class="">
                    <a class="bottom-sidebar"></a>
                </li>
            </ul>
        </div>
    </aside>
</template>


<script>
import menuAdmin from "../../../mixins/menuAdmin";
import {mapGetters} from "vuex";

export default {
    name: "sidebar",
    mixins: [menuAdmin],
    computed: {
        ...mapGetters({
            activeSidebar: 'activeSidebar'
        }),
        avatar() {
            if (this.userInfo && this.userInfo.profile && this.userInfo.profile.avatar) {
                return this.userInfo.profile.avatar
            }
            return require('../../../assets/svgs/icons/ic_ava.svg')
        }
    },
    created() {

    },
    watch: {
        $route() {
            this.styleSidebar()
            this.leaveSidebar()
        }
    },
    methods: {
        goTo(link, current, active) {
            localStorage.setItem('prev', active)
            this.$emit('click-out')
            if (this.$route.name === link.name) {
                this.$emit('refresh')
            } else {
                this.$router.push(link, () => {
                })
            }
        },

    },
    mounted() {
        this.styleSidebar()
    }

}
</script>

<style lang="scss">

</style>