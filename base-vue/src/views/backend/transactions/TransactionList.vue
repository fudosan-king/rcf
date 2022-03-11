<template>
    <div>

    </div>
</template>

<script>
import {ACTION_SET_ACTIVE_SIDEBAR, ACTION_SET_PAGE_TITLE,} from "../../../stores/common/actions";

export default {
    name: "TransactionList",
    created() {
        this.$store.dispatch(ACTION_SET_ACTIVE_SIDEBAR, "transactions");
        this.$store.dispatch(ACTION_SET_PAGE_TITLE, "Transactions");
    },
}
</script>

<style scoped>

</style>