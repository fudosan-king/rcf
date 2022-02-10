<template>
    <div>

    </div>
</template>

<script>
import {ACTION_SET_ACTIVE_SIDEBAR, ACTION_SET_PAGE_TITLE,} from "../../../stores/common/actions";

export default {
    name: "CustomerList",
    created() {
        this.$store.dispatch(ACTION_SET_ACTIVE_SIDEBAR, 'customers');
        this.$store.dispatch(ACTION_SET_PAGE_TITLE, 'Customers');
    },
}
</script>

<style scoped>

</style>