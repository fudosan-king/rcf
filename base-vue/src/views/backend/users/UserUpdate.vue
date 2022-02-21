<template>
    <div>
        <user-create :user-update="userUpdate" :title="$t('pages.users.update')"
                     :button-text="$t('buttons.update')"></user-create>
    </div>
</template>

<script>

import UserCreate from "./UserCreate";
import {UserService} from "../../../services";

export default {
    name: "UserUpdate",
    components: {UserCreate},
    data() {
        return {
            userUpdate: {}
        }
    },
    computed: {
        userId() {
            return this.$route.params.id
        }
    },
    created() {
        if (this.userId) {
            UserService.detail(this.userId).then((res) => {
                if (res && res.data) {
                    this.userUpdate = res.data
                }
            }).catch((err) => {
                this.$toast.error(err.data.message)
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>