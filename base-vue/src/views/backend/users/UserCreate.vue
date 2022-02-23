<template>
    <div>
        <div class="breadcrumb-header justify-content-between">
            <div class="my-auto">
                <div class="d-flex">
                    <router-link :to="{name: 'UserAdmin'}" class="content-title mb-0 my-auto tx-21 font-weight-bold">
                        {{ $t('pages.users.manage') }}
                    </router-link>
                    <span class="text-muted mt-1 tx-13 ml-2 mb-0">/ {{ $t('pages.users.add') }}</span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="card page-main">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="form-group mg-b-0">
                                    <label class="">{{ $t('pages.users.name.label') }}</label>
                                    <i class="required-note">*</i>
                                </div>
                            </div>
                            <div class="col-lg-6 mg-t-20 mg-lg-t-0">
                                <div class="form-group has-danger mg-b-0">
                                    <input class="form-control" :placeholder="$t('pages.users.name.placeholder')"
                                           required=""
                                           type="text">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="form-group mg-b-0">
                                    <label class="">{{ $t('pages.users.full_name.label') }}</label>
                                    <i class="required-note">*</i>
                                </div>
                            </div>
                            <div class="col-lg-6 mg-t-20 mg-lg-t-0">
                                <div class="form-group has-danger mg-b-0">
                                    <input class="form-control" :placeholder="$t('pages.users.full_name.placeholder')"
                                           required=""
                                           type="text">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="form-group mg-b-0">
                                    <label class="">{{ $t('pages.users.email.label') }}</label>
                                    <i class="required-note">*</i>
                                </div>
                            </div>
                            <div class="col-lg-6 mg-t-20 mg-lg-t-0">
                                <div class="form-group has-danger mg-b-0">
                                    <input class="form-control" :placeholder="$t('pages.users.email.placeholder')"
                                           required=""
                                           type="text">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="form-group mg-b-0">
                                    <label class="">{{ $t('pages.users.role.label') }}</label>
                                    <i class="required-note">*</i>
                                </div>
                            </div>
                            <div class="col-lg-6 mg-t-20 mg-lg-t-0">
                                <div class="dropdown w-100 text-end"
                                     id="dropdown-change"
                                     v-click-out="()=>closeDropdown('dropdown-change')">
                                    <button class="btn dropdown-toggle w-100 text-end" type="button"
                                            data-toggle="dropdown"
                                            @click="toggleDropdown('dropdown-change')">
                                        <span :class="{'placeholder-select': !dropDisplay(roles, user.role_id)}">{{
                                                dropDisplay(roles, user.role_id)
                                            }}</span>
                                    </button>
                                    <div class="dropdown-menu w-100" role="menu">
                                        <template v-for="(e, i) in roles">
                                            <a @click="getUserInformation(e, 'role_id', 'dropdown-role')"
                                               :key="'role' + i"
                                               v-if="e.id !== 1"
                                               :class="{'is-active': user.role_id === e.id}"
                                               class="dropdown-item text-end">
                                                {{ e.name }}
                                            </a>
                                        </template>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row text-end">
                            <div class="col-lg-9 pt-3">
                                <button class="btn background__green m__right--2 text-white">
                                    {{ $t('buttons.add') }}
                                </button>
                                <button class="btn btn-secondary">{{ $t('buttons.cancel') }}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {ACTION_SET_ACTIVE_SIDEBAR,} from "../../../stores/common/actions";
import User from "../../../mixins/user";
import common from "../../../mixins/common";
import {email, maxLength, minLength, required} from "vuelidate/lib/validators";

export default {
    name: "UserCreate",
    mixins: [User, common],
    data() {
        return {
            user: {
                role_id: null,
                name: '',
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
            name: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(50),
            },
            email: {
                required,
                email,
                minLength: minLength(3),
                maxLength: maxLength(50),
            },
            full_name: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(50),
            },
            role_id: {
                required,
            },
        }
    },
    methods: {
        getUserInformation(value, key, el = '') {
            if (this.user[key] !== value.id) {
                this.user[key] = value.id
            }
            el && this.closeDropdown(el)
        },
    },

    created() {
        this.$store.dispatch(ACTION_SET_ACTIVE_SIDEBAR, "users");
    }
}
</script>

<style lang="scss">

</style>