<template>
    <div class="main-body app sidebar-mini">
        <Loading :loading="isLoading"/>
        <router-view/>
    </div>
</template>

<script>

import Loading from "./components/common/Loading";
import {mapGetters} from "vuex";
import {ACTION_SAVE_AUTH_USER} from "./stores/auth/actions";

export default {
    name: 'App',
    components: {
        Loading
    },
    computed: {
        ...mapGetters(["isAuthenticated", "isLoading", "error", "message", 'authUser']),
    },
    data() {
        return {};
    },
    watch: {
        error(error) {
            if (error !== null && error.message !== "") {
                this.$toasted.show(error.message)
            }
        },
        message(value) {
            if (value) {
                this.$toasted.show(value)
            }
        },
        isAuthenticated(value) {
            if (!value) {
                this.$router.push({name: "login.admin"}, () => {
                })
            }
        },
    },
    created() {
        if (!this.authUser || !this.authUser.id) {
            this.$store.dispatch(ACTION_SAVE_AUTH_USER)
        }
    },
    mounted() {
    },
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
