<template>
    <div></div>
</template>

<script>

import {ACTION_LOGOUT} from "../../../stores/auth/actions";

export default {
    name: "Logout",
    created() {
        this.$store.dispatch(ACTION_LOGOUT)
                .then(() => {
                    this.$router.push({name: "login.admin"}, () => {
                    });
                })
                .catch((e) => console.log(e));
    },
};
</script>