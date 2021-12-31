<template>
    <div class="main-body app sidebar-mini">
        <Loading :loading="isLoading"/>
        <router-view/>
    </div>
</template>

<script>

import Loading from "./components/common/Loading";
import  { mapGetters } from "vuex";

export default {
    name: 'App',
    components: {
        Loading
    },
    computed: {
        ...mapGetters({
            isLoading: 'isLoading'
        })
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
