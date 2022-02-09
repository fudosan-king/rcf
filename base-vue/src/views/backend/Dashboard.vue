<template>
    <div></div>
</template>

<script>
import {ACTION_SET_ACTIVE_SIDEBAR, ACTION_SET_PAGE_TITLE, } from "../../stores/common/actions";
export default {
    name: "Dashboard",
    created() {
        this.$store.dispatch(ACTION_SET_ACTIVE_SIDEBAR, "dashboard");
        this.$store.dispatch(ACTION_SET_PAGE_TITLE, "Dashboard");
    },
}
</script>

<style scoped>

</style>