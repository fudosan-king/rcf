<template>
    <div class="main-header sticky side-header nav nav-item">
        <div class="container-fluid">
            <div class="main-header-left ">
                <div class="responsive-logo">
                    <a href="index.html"><img src="../../../assets/svgs/logo/logo.svg" class="logo-1"
                                              alt="logo"></a>
                    <a href="index.html"><img src="../../../assets/svgs/logo/logo.svg" class="dark-logo-1"
                                              alt="logo"></a>
                </div>
                <div class="app-sidebar__toggle" data-toggle="sidebar">
                    <a class="open-toggle"><i class="header-icon fe fe-align-left"></i></a>
                    <span class="close-toggle"><i class="header-icons fe fe-x"></i></span>
                </div>
            </div>
            <div class="main-header-right">
                <div class="nav nav-item  navbar-nav-right ml-auto">
                    <div class="dropdown main-profile-menu nav nav-item nav-link">
                        <a class="profile-user d-flex" href=""><img :src="avatar"></a>
                        <div class="dropdown-menu">
                            <div class="main-header-profile bg-primary p-3">
                                <div class="d-flex wd-100p">
                                    <div class="main-img-user text-center">
                                        <img :src="avatar" alt=""></div>
                                    <div class="m__left--2 my-auto">
                                        <h6>Petey Cruiser</h6><span>Premium Member</span>
                                    </div>
                                </div>
                            </div>
                            <a class="dropdown-item" href=""><i class="bx bx-user-circle"></i>Profile</a>
                            <a class="dropdown-item" href=""><i class="bx bx-cog"></i> Edit Profile</a>
                            <a class="dropdown-item" href=""><i class="bx bx-slider-alt"></i> Account Settings</a>
                            <a class="dropdown-item" href="page-signin.html"><i class="bx bx-log-out"></i> Sign Out</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import {mapGetters} from "vuex";

export default {
    name: "navbarAdmin",
    methods: {},
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
            return require('../../../assets/svgs/ic_ava.svg')
        }
    },
}
</script>
<style lang="scss">
</style>