<template>
    <div>
        <div class="breadcrumb-header justify-content-between">
            <div class="my-auto">
                <div class="d-flex">
                    <router-link :to="{name: 'Dashboard'}" class="content-title mb-0 my-auto tx-21 font-weight-bold">
                        {{ $t('pages.users.manage') }}
                    </router-link>
                    <span class="text-muted mt-1 tx-13 ml-2 mb-0">/ {{ $t('pages.profile.title') }}</span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="card page-main">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-3 m-auto">
                                <div class="personal-image">
                                    <label class="label">
                                        <input type="file" @change="changeAvatar" accept=".jpg,.jpeg,.png,.gif"/>
                                        <figure class="personal-figure">
                                            <img :src="avatar " v-if="avatar"
                                                 class="personal-avatar" alt="avatar">
                                            <img src="https://bulma.io/images/placeholders/256x256.png " v-else
                                                 class="personal-avatar" alt="avatar">
                                            <figcaption class="personal-figcaption">
                                                <img src="../../../assets/images/camera-white.png">
                                            </figcaption>
                                        </figure>
                                        <span class="error pt-1"
                                              v-if="!vuelidate.profile.avatar.fileSizeValidation && vuelidate.$dirty">
                                            {{ $t('profile.messages.validation.avatar.file_size') }}
                                        </span>
                                        <span class="error pt-1"
                                              v-if="!vuelidate.profile.avatar.extension && vuelidate.$dirty">
                                            {{ $t('profile.messages.validation.avatar.format') }}
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
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
                                           v-model.trim="profile.username"
                                           disabled
                                           type="text">
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
import findIndex from "lodash/findIndex";
import i18n from "@/lang/i18n";
import {email, maxLength, minLength, required, requiredIf, sameAs} from "vuelidate/lib/validators";
import {extension, fileSizeValidation, katakana} from "@/helpers/utils";
import ProfileService from "@/services/ProfileService";
import {ACTION_SET_ACTIVE_SIDEBAR} from "@/stores/common/actions";

export default {
    name: "Profile",
    data() {
        return {
            profile: {
                avatar: '',
                username: '',
                email: '',
                phone: '',
                katakana_name: '',
                full_name: '',
                password: '',
                new_password: '',
                password_confirmation: '',
            },
            oldProfile: {},
            avatar: null,
            imgExt: ['png', 'jpeg', 'jpg', 'gif'],
            error_server: {},
            submitAvailable: true,
        }
    },
    validations: {
        profile: {
            avatar: {
                fileSizeValidation,
                extension: extension(['png', 'jpeg', 'bmp', 'jpg', 'gif'])
            },
            email: {
                required,
                email,
            },
            username: {
                required,
                maxLength: maxLength(64),
            },
            katakana_name: {
                katakana: (val) => {
                    return katakana(val)
                },
                maxLength: maxLength(50),
            },
            full_name: {
                maxLength: maxLength(50),
            },
            phone: {
                maxLength: maxLength(13),
                minLength: minLength(9),
            },
            password: {
                required: requiredIf(function () {
                    return this.profile.new_password || this.profile.password_confirmation
                }),
                minLength: minLength(8),
                maxLength: maxLength(255),
            },
            new_password: {
                required: requiredIf(function () {
                    return this.profile.password || this.profile.password_confirmation
                }),
                minLength: minLength(8),
                maxLength: maxLength(16),
            },
            password_confirmation: {
                required: requiredIf(function () {
                    return this.profile.password || this.profile.new_password
                }),
                sameAs: sameAs(function () {
                    return this.profile.new_password
                })
            },
        },
    },
    methods: {
        changeAvatar(e) {
            let avt = e.target.files[0];
            const ext = avt.name.split('.').pop()
            if (findIndex(this.imgExt, (e) => e === ext.toLowerCase()) >= 0) {
                this.avatar = URL.createObjectURL(avt)
                this.profile.avatar = avt
            } else {
                this.$toast.warning(i18n.t('profile.messages.validation.avatar.format_invalid'))
            }
        },
        async getProfile() {
            ProfileService.detail().then((res) => {
                this.profile = Object.assign(this.profile, res.data)
                console.log(this.profile)
                this.avatar = this.profile.avatar
                this.profile.avatar = null
                this.profile.username = this.profile.username || ''
                this.profile.phone = this.profile.phone || ''
                this.profile.full_name = this.profile.full_name || ''
                this.profile.katakana_name = this.profile.katakana_name || ''
                this.oldProfile = res.data;
            }).catch((err) => {
                this.$toast.error(err.data.message)
            })
        },
    },
    created() {
        this.$store.dispatch(ACTION_SET_ACTIVE_SIDEBAR, '')
        this.getProfile();
    }
}
</script>

<style lang="scss" scoped>
.personal-image {
    text-align: center;

    input[type="file"] {
        display: none;
    }

    label {
        width: 120px;
        margin: auto;

    }

    .personal-figure {
        position: relative;
        width: 120px;
        height: 120px;

        .personal-figcaption {
            cursor: pointer;
            position: absolute;
            top: 0px;
            width: inherit;
            height: inherit;
            border-radius: 100%;
            opacity: 0;
            background-color: rgba(0, 0, 0, 0);
            transition: all ease-in-out .3s;

            &:hover {
                opacity: 1;
                background-color: rgba(0, 0, 0, .5);
            }

            img {
                margin-top: 32.5px;
                width: 50px;
                height: 50px;
            }
        }
    }

    .personal-avatar {
        cursor: pointer;
        width: 120px;
        height: 120px;
        box-sizing: border-box;
        border-radius: 100%;
        border: 2px solid transparent;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
        transition: all ease-in-out .3s;

        &:hover {
            box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
        }
    }
}
</style>