<template>
    <div id="app" class="main-body app sidebar-mini">
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
        Loading,
      
    },
    computed: {
        ...mapGetters({
            isLoading: 'isLoading'
        })
    },
}
</script>

<style lang="scss">

</style>
