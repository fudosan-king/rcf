<template>
    <div>

    </div>
</template>

<script>
import {ACTION_SET_ACTIVE_SIDEBAR, ACTION_SET_PAGE_TITLE,} from "../../../stores/common/actions";

export default {
    name: "Setting",
    created() {
        this.$store.dispatch(ACTION_SET_ACTIVE_SIDEBAR, 'settings');
        this.$store.dispatch(ACTION_SET_PAGE_TITLE, 'Settings');
    },
}
</script>

<style scoped>

</style>