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
                    <a @click="goTo({name: 'dashboard'})">
                        <img alt="user-img" class="avatar avatar-xl rounded-circle bg-white "
                             :src="avatar">
                        <span class="avatar-status profile-status bg-green"></span>
                    </a>
                    <div class="user-info">
                        <h4 class="fw-semibold mt-3 mb-0">
                            {{
                                userInfo && (userInfo.profile && userInfo.profile.full_name || userInfo.first_name + userInfo.last_name)
                            }}
                        </h4>
                        <span class="mb-0 text-muted"> {{ userInfo && (userInfo.role && userInfo.role.name) }}</span>
                    </div>
                </div>
            </div>
            <ul class="side-menu" id="menu-list-sidebar">
                <li class="slide"><a href="#"></a></li>
                <template v-for="(menu, index) in menus">
                    <li :key="'menu-' + index" class="slide"
                        v-if="menu.isShown"
                        :class="{'active': menu.activeName === activeSidebar}">
                        <a class="side-menu__item" data-toggle="slide"
                           @mouseover="hoverSidebar(index + 1)" @mouseleave="leaveSidebar()"
                        >
                            <img :src="menu.path_svg_dark" class="side-menu__image">
                            <span class="side-menu__label">{{ menu.title }}</span>
                            <i class="angle fe fe-chevron-down" v-if="menu.children.length"></i>
                        </a>
                        <ul class="slide-menu open" v-if="menu.children.length>0">
                            <template v-for="(child, index) in menu.children">
                                <li :key="'child-' + index">
                                    <a class="slide-item">
                                        <span>{{ child.title }}</span>
                                    </a>
                                </li>
                            </template>
                            >
                        </ul>
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
        },
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
@import '../../../assets/scss/sidemenu';

.app-sidebar {
    background: #fff;
    border-right: 1px solid #e3e3e3;
    bottom: 0;
    color: #14112d;
    left: 0;
    max-height: 100%;
    position: fixed;
    top: 0 !important;
    transition: left .3s ease, width .3s ease;
    width: 240px;
    z-index: 1029 !important;

    .main-sidebar-header {
        background: #fff;
        border-bottom: 1px solid #eae8f1;
        border-right: 1px solid #eae8f1;
        height: 64px;
        left: 0;
        padding: 15px 20px;
        position: fixed;
        right: 0;
        top: 0;
        transition: left .3s ease, width .3s ease;
        width: 240px;
        z-index: 999;

        img {
            transition: none;
            transform: none;
        }
    }

    .main-side-menu {
        height: 90%;
        margin-top: 70px;
        overflow: hidden;
        overflow-y: auto;
        @media (max-width: 767px) {
            margin-top: 0;
        }

        .app-sidebar__user {
            align-items: center;
            background-position: 0;
            background-size: cover;
            color: #a8a8a8;
            display: inline-block;
            width: 100%;

            .user-pro-body {
                display: block;
                padding: 15px 0;

                img {
                    display: block;
                    margin: 0 auto 0;
                    border: 2px solid #c9d2e8;
                    box-shadow: 0 5px 5px 0 rgba(44, 44, 44, 0.2);
                    padding: 3px;
                    background: $white;
                }

                .u-dropdown {
                    color: #97999f;
                }

                .user-info span.text-gray {
                    color: #969696 !important;
                }

                .avatar-xl {
                    font-size: 36px !important;
                    height: 72px !important;
                    width: 72px !important;
                }

                .avatar {
                    align-items: center;
                    background-color: #0162e8;
                    border-radius: 100%;
                    color: #fff;
                    display: flex;
                    font-size: 16px;
                    font-weight: 600;
                    height: 36px;
                    justify-content: center;
                    position: relative;
                    width: 36px;
                }
            }

            .user-info {
                margin: 0 auto;
                text-align: center;

                h4 {
                    color: #14112d;
                    font-size: 15px;
                }
            }
        }
    }
}

.side-menu {
    list-style: none;
    margin-bottom: 0;
    padding: 0;

    .side-item-category {
        color: #2c364c;
        font-size: 11px;
        font-weight: 700;
        height: 15px;
        letter-spacing: .5px;
        margin-bottom: 12px;
        padding: 0 20px 0 25px;
        text-transform: uppercase;
    }

    .side-menu__item {
        border-radius: 0;
        margin: 0;
        padding: 10px 20px 10px 22px;

        .side-menu__image {
            width: 20px !important;
            height: 20px !important;
            margin-right: 10px;
        }

    }
}
</style>