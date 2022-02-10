<template>
    <div>

    </div>
</template>

<script>
import {ACTION_SET_ACTIVE_SIDEBAR, ACTION_SET_PAGE_TITLE,} from "../../../stores/common/actions";
export default {
    name: "FaqList",
    created() {
        this.$store.dispatch(ACTION_SET_ACTIVE_SIDEBAR, 'faqs');
        this.$store.dispatch(ACTION_SET_PAGE_TITLE, 'FAQs');
    },
}
</script>

<style scoped>

</style>