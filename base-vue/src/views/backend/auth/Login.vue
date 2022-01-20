<template>
    <div class="padding-y--7 login-page">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6 text-center mb-5">
                    <a class="logo">
                        <img src="../../../assets/svgs/logo/logo-green.svg" alt="">
                    </a>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="column col-lg-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="form-group mb-3">
                                <label class="col-form-label">Username or Email</label>
                                <input type="text" class="form-control" placeholder="Email ...">
                            </div>
                            <div class="form-group mb-5">
                                <label>Password</label>
                                <div class="input-group" id="show_hide_password">
                                    <input v-if="showPassword" type="text" class="form-control" v-model="password"/>
                                    <input v-else type="password" class="form-control" v-model="password">
                                    <div class="input-group-addon p-0">
                                        <button class="btn" @click="toggleShow">
                                            <i class="fa"
                                               :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"
                                               aria-hidden="true"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mb-4">
                                <router-link :to="{name: 'homeAdmin'}"
                                             class="form-control btn bg-cl-green text-white rounded submit px-3">Sign In
                                </router-link>
                            </div>
                            <div class="form-group d-md-flex">
                                <div class="w-50 text-left">
                                    <label class="text-center custom-checkbox">
                                        <input class="required" id="ck_agree" type="checkbox">
                                        <span class="checkmark"></span>
                                        Remember Me
                                    </label>
                                </div>
                                <div class="w-50 text-right">
                                    <a href="#">Forgot Password</a>
                                </div>
                            </div>
                            <div class="form-group d-md-flex mt-5">
                                <div class="w-100 text-center">
                                    <a href="#">Back to Rimawaru</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            username: '',
            showPassword: false,
            password: null
        };
    },
    computed: {
        buttonLabel() {
            return (this.showPassword) ? "Hide" : "Show";
        }
    },
    methods: {
        toggleShow() {
            this.showPassword = !this.showPassword;
        }
    }
}
</script>

<style lang="scss">
@import "../../../assets/scss/index.scss";
@import "../../../assets/scss/main.scss";
</style>