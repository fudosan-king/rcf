<template>
    <div class="main-header sticky side-header nav nav-item">
        <div class="container-fluid">
            <div class="main-header-left ">
                <div class="responsive-logo">
                    <router-link :to="{name: 'Dashboard'}">
                        <img src="../../../assets/svgs/logo/logo.svg" class="logo-1"
                             alt="logo">
                    </router-link>
                </div>
                <div class="app-sidebar__toggle" data-toggle="sidebar">
                    <a class="open-toggle"><i class="header-icon fe fe-align-left"></i></a>
                    <span class="close-toggle"><i class="header-icons fe fe-x"></i></span>
                </div>
            </div>
            <div class="main-header-right">
                <div class="dropdown main-profile-menu" id="main-profile-menu"
                     v-click-out="() => closeDropdown('main-profile-menu')">
                    <a class="profile-user d-flex" @click="toggleDropdown('main-profile-menu')">
                        <img :src="avatar">
                    </a>
                    <div class="dropdown-menu">
                        <div class="main-header-profile background__green p-3">
                            <div class="d-flex wd-100p">
                                <div class="main-img-user text-center">
                                    <img :src="avatar" alt=""></div>
                                <div class="m__left--2 my-auto">
                                    <h6>{{
                                            userInfo && (userInfo.profile && userInfo.profile.full_name || userInfo.first_name + userInfo.last_name)
                                        }} </h6>
                                    <span> {{ userInfo && (userInfo.role && userInfo.role.name) }}</span>
                                </div>
                            </div>
                        </div>
                        <router-link :to="{name: 'profile.admin'}" class="dropdown-item">
                            <i class="bx bx-user-circle"></i>Profile
                        </router-link>
                        <a class="dropdown-item" @click="logout()"><i class="bx bx-log-out"></i> Sign Out</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import {mapGetters} from "vuex";
import common from "@/mixins/common";
import {ACTION_LOGOUT} from "@/stores/auth/actions";

export default {
    name: "navbarAdmin",
    mixins: [common],
    methods: {
        async logout() {
            await this.$store.dispatch(ACTION_LOGOUT).then(() => {
                this.$router.push({name: "login.admin"}, () => {
                });
            }).catch((e) => console.log(e));
        },
        profile() {
            this.$router.push({name: "profile.admin"}, () => {
            });
        }
    },
    mounted() {
    },
    computed: {
        ...mapGetters({
            pageTitle: 'pageTitle',
        }),
        avatar() {
            if (this.userInfo && this.userInfo.profile && this.userInfo.profile.avatar) {
                return this.userInfo.profile.avatar
            }
            return require('../../../assets/svgs/icons/ic_ava.svg')
        },
    },
}
</script>
<style lang="scss">
</style>