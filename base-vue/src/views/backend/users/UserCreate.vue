<template>
    <div>
        <div class="breadcrumb-header justify-content-between">
            <div class="my-auto">
                <div class="d-flex">
                    <router-link :to="{name: 'UserAdmin'}" class="content-title mb-0 my-auto tx-21 font-weight-bold">
                        {{ $t('pages.users.manage') }}
                    </router-link>
                    <span class="text-muted mt-1 tx-13 ml-2 mb-0">/ {{ title || $t('pages.users.add') }}</span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="card page-main">
                    <div class="card-body" @keyup.enter="submit()">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="form-group mg-b-0">
                                    <label class="">{{ $t('pages.users.name.label') }}</label>
                                    <i class="required-note"
                                       v-tooltip.right="{ customClass: 'tooltip-danger' }"
                                       :title="$t('tooltip.required')"
                                    >*</i>
                                </div>
                            </div>
                            <div class="col-lg-6 mg-t-20 mg-lg-t-0">
                                <div class="form-group has-danger mg-b-0">
                                    <input class="form-control" :placeholder="$t('pages.users.name.placeholder')"
                                           :class="{'parsley-error': (!vuelidate.user.username.maxLength || !vuelidate.user.username.minLength || !vuelidate.user.username.required) && vuelidate.$dirty}"
                                           v-model.trim="user.username"
                                           type="text">
                                    <span class="is-error pt-1"
                                          v-if="error_server.username && error_server.username.length">
                                        {{ error_server.username[0] }}
                                    </span>
                                    <template v-else-if="vuelidate.$dirty">
                                        <span class="is-error pt-1" v-if="!vuelidate.user.username.required">
                                            {{ $t('pages.users.name.validation.required') }}
                                        </span>
                                        <span class="is-error pt-1" v-if="!vuelidate.user.username.minLength">
                                            {{ $t('pages.users.name.validation.min_length') }}
                                        </span>
                                        <span class="is-error pt-1" v-if="!vuelidate.user.username.maxLength">
                                            {{ $t('pages.users.name.validation.max_length') }}
                                        </span>
                                    </template>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="form-group mg-b-0">
                                    <label class="">{{ $t('pages.users.full_name.label') }}</label>
                                    <!--                                    <i class="required-note">*</i>-->
                                </div>
                            </div>
                            <div class="col-lg-6 mg-t-20 mg-lg-t-0">
                                <div class="form-group has-danger mg-b-0">
                                    <input class="form-control" :placeholder="$t('pages.users.full_name.placeholder')"
                                           v-model.trim="user.full_name"
                                           :class="{'parsley-error': (!vuelidate.user.full_name.maxLength || !vuelidate.user.full_name.minLength) && vuelidate.$dirty}"
                                           type="text">
                                    <template v-if="vuelidate.$dirty">
                                        <span class="is-error pt-1" v-if="!vuelidate.user.full_name.minLength">
                                            {{ $t('pages.users.name.validation.min_length') }}
                                        </span>
                                        <span class="is-error pt-1" v-if="!vuelidate.user.full_name.maxLength">
                                            {{ $t('pages.users.name.validation.max_length') }}
                                        </span>
                                    </template>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="form-group mg-b-0">
                                    <label class="">{{ $t('pages.users.email.label') }}</label>
                                    <i class="required-note"
                                       v-tooltip.right="{ customClass: 'tooltip-danger' }"
                                       :title="$t('tooltip.required')">*</i>
                                </div>
                            </div>
                            <div class="col-lg-6 mg-t-20 mg-lg-t-0">
                                <div class="form-group has-danger mg-b-0">
                                    <input class="form-control" :placeholder="$t('pages.users.email.placeholder')"
                                           v-model.trim="user.email"
                                           :class="{'parsley-error': (!vuelidate.user.email.required || !vuelidate.user.email.email) && vuelidate.$dirty}"
                                           type="text">
                                    <span class="is-error pt-1" v-if="error_server.email && error_server.email.length">
                                        {{ error_server.email[0] }}
                                    </span>
                                    <template v-else-if="vuelidate.$dirty">
                                        <span class="is-error pt-1" v-if="!vuelidate.user.email.email">
                                            {{ $t('pages.users.name.validation.required') }}
                                        </span>
                                        <span class="is-error pt-1" v-if="!vuelidate.user.email.required">
                                            {{ $t('pages.users.name.validation.min_length') }}
                                        </span>
                                    </template>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="form-group mg-b-0">
                                    <label class="">{{ $t('pages.users.role.label') }}</label>
                                    <i class="required-note"
                                       v-tooltip.right="{ customClass: 'tooltip-danger' }"
                                       :title="$t('tooltip.required')"
                                    >*</i>
                                </div>
                            </div>
                            <div class="col-lg-6 mg-t-20 mg-lg-t-0">
                                <div class="dropdown w-100 text-end"
                                     id="dropdown-role"
                                     v-click-out="()=>closeDropdown('dropdown-role')">
                                    <button class="btn dropdown-toggle w-100 text-end" type="button"
                                            :class="{'parsley-error': (!vuelidate.user.role_id.required && vuelidate.$dirty)  || (error_server.role_id && error_server.role_id.length)}  "
                                            data-toggle="dropdown"
                                            @click="toggleDropdown('dropdown-role')">
                                        <span :class="{'placeholder-select': !dropDisplay(roles, user.role_id)}">
                                            {{ dropDisplay(roles, user.role_id) }}
                                        </span>
                                    </button>
                                    <div class="dropdown-menu w-100" role="menu">
                                        <template v-for="(e, i) in roles">
                                            <a @click="getUserInformation(e, 'role_id', 'dropdown-role')"
                                               :key="'role' + i"
                                               v-if="e.id !== 1"
                                               :class="{'show': user.role_id === e.id}"
                                               class="dropdown-item text-end">
                                                {{ e.name }}
                                            </a>
                                        </template>
                                    </div>
                                </div>
                                <span class="error pt-1" v-if="error_server.role_id && error_server.role_id.length">
                                        {{ error_server.role_id[0] }}
                                    </span>
                                <template v-else-if="vuelidate.$dirty">
                                        <span class="is-error pt-1" v-if="!vuelidate.user.role_id.required">
                                            {{ $t('pages.users.role.required') }}
                                        </span>
                                </template>
                            </div>
                        </div>
                        <div class="row text-end">
                            <div class="col-lg-9 pt-3">
                                <button class="btn background__green m__right--2 text-white" @click="submit">
                                    {{ buttonText || $t('buttons.add') }}
                                </button>
                                <button class="btn btn-secondary" @click="backToList">
                                    {{ $t('buttons.cancel') }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {ACTION_SET_ACTIVE_SIDEBAR, ACTION_SET_PAGE_TITLE,} from "@/stores/common/actions";
import User from "@/mixins/user";
import i18n from "@/lang/i18n";
import {email, maxLength, minLength, required} from "vuelidate/lib/validators";
import UserService from "@/services/UserService";

export default {
    name: "UserCreate",
    mixins: [User],
    data() {
        return {
            user: {
                role_id: null,
                username: '',
                email: '',
                full_name: '',
            },
            isUpdate: false,
            error_server: {},
            submitAvailable: true,
        }
    },
    validations: {
        user: {
            username: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(50),
            },
            email: {
                required,
                email,
            },
            full_name: {
                minLength: minLength(3),
                maxLength: maxLength(50),
            },
            role_id: {
                required,
            }
        },
    },
    methods: {
        backToList() {
            this.$router.push({name: 'UserAdmin'}, () => {
            })
        },
        getUserInformation(value, key, el = '') {
            if (this.user[key] !== value.id) {
                this.user[key] = value.id
                // if (!this.isUpdate) {
                //     this.user.role_id = value.role ? value.role.id : 2
                // }
            }
            el && this.closeDropdown(el)
        },
        submit() {
            this.error_server = {}
            this.vuelidate.$touch();
            if (!this.vuelidate.$invalid && this.submitAvailable) {
                this.submitAvailable = false
                if (this.isUpdate) {
                    UserService.update(this.user.id, this.user)
                            .then(() => {
                                this.submitAvailable = true
                                this.$toast.success(i18n.t('pages.users.message.update_success'))
                                this.$router.push({name: 'UserAdmin'}, () => {
                                })
                            })
                            .catch((err) => {
                                this.submitAvailable = true
                                this.error_server = err.data.errors
                            })
                } else {
                    UserService.create(this.user)
                            .then(() => {
                                this.submitAvailable = true
                                this.$toast.success(this.$t('pages.users.message.create_success'))
                                this.$router.push({name: 'UserAdmin'}, () => {
                                })
                            })
                            .catch((err) => {
                                this.submitAvailable = true
                                // this.$toast.error(err.data.errors)
                                this.error_server = err.data.errors
                            })
                }
            }
        },
    },
    watch: {
        userUpdate(val) {
            if (val) {
                this.user = {...val}
                this.isUpdate = true
                this.$nextTick(() => {
                    this.user = {...val}
                    this.$set(this.user, 'role_id', this.user.role ? this.user.role.id : null)
                })
            } else {
                this.isUpdate = false
            }
        },
    },

    created() {
        this.$store.dispatch(ACTION_SET_ACTIVE_SIDEBAR, "users");
    },
    mounted() {
        if (this.title) {
            this.$store.dispatch(ACTION_SET_PAGE_TITLE, this.title)
        } else {
            this.$store.dispatch(ACTION_SET_PAGE_TITLE, this.$t('pages.users.add'))
        }
    },
    props: {
        userUpdate: {
            type: Object,
            default: () => {
            },
        },
        title: {
            type: String,
            default: '',
        },
        buttonText: {
            type: String,
            default: '',
        }
    },
}
</script>

<style lang="scss">

</style>