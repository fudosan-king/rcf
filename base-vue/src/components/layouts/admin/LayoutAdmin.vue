<template>
    <div class="page">
        <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
        <sidebarAdmin @refresh="refresh"></sidebarAdmin>
        <div class="main-content app-content">
            <navbarAdmin></navbarAdmin>
            <div class="jumps-prevent padding__top-63"></div>
            <div class="container-fluid">
                <router-view v-if="isRouterAlive" class="margin__top-20"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import sidebarAdmin from "./sidebarAdmin";
import navbarAdmin from "./navbarAdmin";


export default {
    name: "LayoutAdmin",
    components: {
        sidebarAdmin, navbarAdmin
    },
    data() {
        return {
            check: true,
            isRouterAlive: true
        }
    },
    created() {
        this.$nextTick(() => {
            this.toggleDropdown();
        });
    },
    methods: {
        refresh() {
            this.isRouterAlive = false
            setTimeout(() => {
                this.isRouterAlive = true
            })
        },
        toggleDropdown() {
            const _DropDowns = document.querySelectorAll('.main-header .dropdown a');
            _DropDowns.forEach((ele) => {
                ele.addEventListener('click', (event) => {
                    event.preventDefault();
                    const dropdowns = document.querySelectorAll('.main-header .dropdown');
                    dropdowns.forEach(ele => {
                        ele.classList.remove('show');
                    })
                    ele.parentElement.classList.toggle('show');
                    for (let sibling of ele.parentNode.children) {
                        if (sibling !== ele) sibling.classList.remove('show');
                    }
                })
            })
            document.addEventListener('click', this.closeDropdown);
            document.addEventListener('touchstart', this.closeDropdown);
        },
        closeDropdown(event) {
            event.stopPropagation();
            const dropTarg = event.target.closest('.main-header .dropdown');
            const dropdowns = document.querySelectorAll('.main-header .dropdown');
            if (!dropTarg) {
                dropdowns.forEach(ele => {
                    ele.classList.remove('show');
                })
            }
        },
        toggleSlideMenu() {
            this.$nextTick(() => {
                const slide = document.querySelectorAll('[data-toggle="slide"]')
                console.log(slide)
                if (slide.length > 0) {
                    slide.forEach((el) => {
                        el.addEventListener('click', function (e) {
                            e.preventDefault();
                            if (this.parentElement.classList.contains('is-expanded')) {
                                this.parentElement.classList.remove('is-expanded');
                            } else {
                                this.parentElement.classList.toggle('is-expanded');
                            }
                        });
                    })
                }
            })
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.toggleSlideMenu();
        });
    }
}
</script>

<style lang="scss">
@import "../../../assets/scss/index";
</style>