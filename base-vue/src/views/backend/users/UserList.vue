<template>
    <div>

    </div>
</template>

<script>
import {ACTION_SET_ACTIVE_SIDEBAR, ACTION_SET_PAGE_TITLE,} from "../../../stores/common/actions";

export default {
    name: "UserList",
    created() {
        this.$store.dispatch(ACTION_SET_ACTIVE_SIDEBAR, "users");
        this.$store.dispatch(ACTION_SET_PAGE_TITLE, "Users");
    },
}
</script>

<style scoped>

</style>