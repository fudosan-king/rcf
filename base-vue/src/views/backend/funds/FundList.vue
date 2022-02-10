<template>
    <div></div>
</template>

<script>
import {ACTION_SET_ACTIVE_SIDEBAR, ACTION_SET_PAGE_TITLE,} from "../../../stores/common/actions";

export default {
    name: "FundList",
    created() {
        this.$store.dispatch(ACTION_SET_ACTIVE_SIDEBAR, 'funds');
        this.$store.dispatch(ACTION_SET_PAGE_TITLE, 'Funds');
    },
}
</script>

<style scoped>

</style>