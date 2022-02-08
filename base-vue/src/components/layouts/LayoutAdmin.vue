<template>
    <div class="main-body app sidebar-mini">
        <!-- Page -->
        <div class="page">
            <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
            <sidebarAdmin></sidebarAdmin>
            <div class="main-content app-content">
                <navbarAdmin></navbarAdmin>
                <div class="container-fluid">
                    <router-view v-if="isRouterAlive"></router-view>
                </div>
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
            this.init(); 

        });
    },
    methods: {

        refresh() {
            this.isRouterAlive = false
            setTimeout(() => {
                this.isRouterAlive = true
            })
        },

        toggleSidebar() {
            this.check = !this.check
        },

        init() {
            
        },
    }
  
}
</script>

<style lang="scss" scoped>
@import "../../assets/plugins/feather/feather.css";    
@import "../../assets/scss/index.scss";
</style>