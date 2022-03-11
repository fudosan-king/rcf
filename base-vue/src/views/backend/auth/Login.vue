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
                        <div class="card-body" @keyup.enter.stop="login()">
                            <div class="form-group mb-3">
                                <label class="col-form-label">{{ $t('pages.auth.login.email.label') }} </label>
                                <input type="text" class="form-control" v-model="email"
                                       :placeholder="$t('pages.auth.login.email.placeholder')"
                                       :class="{'parsley-error' : (!$v.email.required && $v.$dirty)||  (!$v.email.maxLength && $v.$dirty) ||(error_server.email && error_server.email.length)}"
                                >
                                <span class="is-error" v-if="error_server.email && error_server.email.length">
                                    {{ error_server.email[0] }}
                                </span>
                                <template v-if="$v.$dirty">
                                    <span class="is-error" v-if="!$v.email.required">
                                        {{ $t('pages.auth.login.email.required') }}
                                    </span>
                                    <span class="is-error" v-if="!$v.email.email">
                                        {{ $t('validation.required', {attribute: $t('validation.attributes.email')}) }}
                                    </span>
                                    <span class="is-error" v-if="!$v.email.maxLength">
                                       {{ $t('pages.auth.login.email.max_length') }}
                                    </span>
                                </template>
                            </div>
                            <div class="form-group mb-5">
                                <label>{{ $t('pages.auth.login.password.label') }}</label>
                                <div class="input-group" id="show_hide_password">
                                    <input v-if="showPassword" type="text" class="form-control"
                                           :placeholder="$t('pages.auth.login.password.placeholder')"
                                           :class="{'parsley-error' : (!$v.password.required && $v.$dirty)||  (!$v.password.maxLength && $v.$dirty) ||  (!$v.password.minLength && $v.$dirty) ||(error_server.password && error_server.password.length)}"
                                           v-model="password"/>
                                    <input v-else type="password" class="form-control"
                                           :placeholder="$t('pages.auth.login.password.placeholder')"
                                           :class="{'parsley-error' : (!$v.password.required && $v.$dirty)||  (!$v.password.maxLength && $v.$dirty) ||  (!$v.password.minLength && $v.$dirty) ||(error_server.password && error_server.password.length)}"
                                           v-model="password">
                                    <div class="input-group-addon p-0">
                                        <button class="btn" @click="toggleShow">
                                            <i class="fa"
                                               :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"
                                               aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>
                                <span class="is-error pt-1"
                                      v-if="error_server.password && error_server.password.length">
                                        {{ error_server.password[0] }}
                                    </span>
                                <template v-else-if="$v.$dirty">
                                        <span class="is-error pt-1" v-if="!$v.password.required">
                                            {{ $t('pages.auth.login.password.required') }}
                                        </span>
                                    <span class="is-error pt-1" v-if="!$v.password.maxLength">
                                            {{ $t('pages.auth.login.password.max_length') }}
                                        </span>
                                    <span class="is-error pt-1" v-if="!$v.password.minLength">
                                            {{ $t('pages.auth.login.password.min_length') }}
                                        </span>
                                </template>
                            </div>
                            <div class="form-group mb-4">
                                <button @click="login"
                                        class="form-control btn bg-cl-green text-white rounded submit px-3">Sign In
                                </button>
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
import {ACTION_LOGIN} from "@/stores/auth/actions";
import {mapGetters} from "vuex";
import {email, maxLength, minLength, required} from "vuelidate/lib/validators";
export default {
    name: "Login",
    data() {
        return {
            email: '',
            showPassword: false,
            password: null,
            submitted: false,
            error_server: {},
            submitAvailable: true,
        };
    },
    validations: {
        email: {
            required,
            email,
            maxLength: maxLength(255),
        },
        password: {
            required,
            maxLength: maxLength(16),
            minLength: minLength(8),
        },
    },
    methods: {
        toggleShow() {
            this.showPassword = !this.showPassword;
        },
        async login(e) {
            e.preventDefault();
            if (this.submitAvailable) {
                this.error_server = {}
                this.submitted = true;
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }
                this.submitAvailable = false
                let data = {
                    email: this.email,
                    password: this.password,
                }
                this.$store.dispatch(ACTION_LOGIN, data).then(() => {
                    this.submitAvailable = true
                }, error => {
                    console.log(error)
                    this.submitAvailable = true
                    this.error_server = error.data ? error.data.errors : ''
                    if (this.error_server && this.error_server.unauthenticate) {
                        this.$toast.error(error.data.errors.unauthenticate)
                    }
                })
            }
        },

    },
    computed: {
        ...mapGetters(["isAuthenticated", "authUser"]),
    },
    watch: {
        isAuthenticated(value) {
            if (value) {
                this.$router.push({name: "Dashboard"});
            }
        },
    },

}
</script>

<style lang="scss">
@import "../../../assets/scss/index.scss";
@import "../../../assets/scss/main.scss";

.login-page {
    .forgot-pass {
        text-decoration: none;
        color: #14122d;
        font-weight: 700;

        &:hover {
            color: #0162e8
        }

        &:focus {
            color: #0162e8
        }
    }

    .input-group {
        .input-group-addon {
            padding: 0.5rem 0.75rem;
            margin-bottom: 0;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.25;
            color: #495057;
            text-align: center;
            background-color: #e9ecef;
            border: 1px solid rgba(0, 0, 0, .15);
            border-radius: 0.25rem;

            a {
                color: #333;

                &:hover {
                    color: #333
                }
            }
        }
    }

    .custom-checkbox {
        display: block;
        position: relative;
        padding-left: 30px;
        cursor: pointer;
        font-size: 0.875rem;
        line-height: 24px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        text-align: center;
        max-width: 135px !important;
        margin: 0 auto 0 0;
        color: #000000;
        font-weight: 300;

        input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;

        }

        input:checked ~ .checkmark {
            background-color: #73886B;
        }

        input:checked ~ .checkmark:after {
            display: block;
        }

        .checkmark {
            position: absolute;
            top: 3px;
            left: 0;
            height: 20px;
            width: 20px;
            background-color: transparent;
            border: 1px solid #828282;

            &:after {
                content: "";
                position: absolute;
                display: none;
                left: 7px;
                top: 3px;
                width: 5px;
                height: 10px;
                border: solid white;
                border-width: 0 3px 3px 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
            }
        }
    }

    .text-right {
        text-align: right !important;
    }

    a {
        color: #50575e;

        &:hover {
            color: #135e96
        }
    }
}
</style>