<!--suppress JSValidateTypes -->
<template>
    <div>
        <nav aria-label="breadcrumb">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link :to="{name: 'home'}" class="homepage">{{ $t('frontend.top') }}</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">{{ $t('frontend.contact.contact_title') }}
                    </li>
                </ol>
            </div>
        </nav>
        <div class="main_content">
            <section class="section-request-doc">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-12">
                            <h1 class="title">{{ $t('frontend.contact.contact_title') }}</h1>
                            <div class="request-doc">
                                <div class="request-doc_form">
                                    <template id="form-contact" v-if="currentStep === 1">
                                        <h3>{{ $t('frontend.contact.notes') }}</h3>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label>{{ $t('frontend.contact.fields.name.label') }}
                                                        <span class="i-required">{{ $t('frontend.require') }}</span>
                                                    </label>
                                                </div>
                                                <div class="col-md-8">
                                                    <input name="name_customer" class="form-control required"
                                                           :class="{'is-invalid': ((!vuelidate.contact.name.required || !vuelidate.contact.name.maxLength) && vuelidate.$dirty)}"
                                                           v-model="contact.name"
                                                           type="text"
                                                           :placeholder="$t('frontend.contact.fields.name.placeholder')">
                                                    <template v-if="vuelidate.$dirty">
                                                        <div class="invalid-feedback"
                                                             v-if="!vuelidate.contact.name.required && vuelidate.$dirty">
                                                            {{ $t('frontend.contact.fields.name.required') }}
                                                        </div>
                                                        <div class="invalid-feedback"
                                                             v-if="!vuelidate.contact.name.maxLength && vuelidate.$dirty">
                                                            {{ $t('frontend.contact.fields.name.max') }}
                                                        </div>
                                                    </template>
                                                </div>
                                            </div>
                                        </div>
                                        <div class=" form-group">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label>{{ $t('frontend.contact.fields.postal_code.label') }}
                                                        <span class="i-required">{{ $t('frontend.require') }}</span>
                                                    </label>
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="row align-items-center">
                                                        <div class="col-12 col-lg-6">
                                                            <input type="text" class="form-control"
                                                                   :placeholder="$t('frontend.register.postal_code.placeholder')"
                                                                   v-on:keyup="getAddress"
                                                                   :class="{'is-invalid': ((!vuelidate.contact.postal_code.required || !vuelidate.contact.postal_code.maxLength ) && vuelidate.$dirty)}"
                                                                   v-model="contact.postal_code">
                                                            <template v-if="vuelidate.$dirty">
                                                                <div class="invalid-feedback"
                                                                     v-if="!vuelidate.contact.postal_code.required && vuelidate.$dirty">
                                                                    {{
                                                                        $t('frontend.register.postal_code.validation.required')
                                                                    }}
                                                                </div>
                                                                <div class="invalid-feedback"
                                                                     v-if="!vuelidate.contact.postal_code.maxLength && vuelidate.$dirty">
                                                                    {{
                                                                        $t('frontend.register.postal_code.validation.maxLength')
                                                                    }}
                                                                </div>
                                                            </template>
                                                        </div>
                                                        <div class="col-12 col-lg-6">
                                                            <a class=" text-decoration-none">
                                                                <img src="../../../assets/images/svg/arrow_right.svg"
                                                                     alt="" class="img-fluid mr-2"
                                                                     width="20"> {{ $t('frontend.contact.import') }}</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label>{{ $t('frontend.contact.fields.prefectures.label') }}
                                                        <span class="i-required">{{ $t('frontend.require') }}</span>
                                                    </label>
                                                </div>
                                                <div class="col-md-8">
                                                    <Multiselect v-model="contact.prefectures"
                                                                 :class="{'is-invalid': (!vuelidate.contact.prefectures.required && vuelidate.$dirty)}"
                                                                 :options="prefectures"
                                                                 :placeholder="$t('frontend.register.prefectures.placeholder')">
                                                    </Multiselect>
                                                    <template v-if="vuelidate.$dirty">
                                                        <div class="invalid-feedback"
                                                             v-if="!vuelidate.contact.prefectures.required && vuelidate.$dirty">
                                                            {{ $t('frontend.contact.fields.prefectures.required') }}
                                                        </div>
                                                    </template>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label>{{ $t('frontend.contact.fields.address.label') }}
                                                        <span class="i-required">{{ $t('frontend.require') }}</span>
                                                    </label>
                                                </div>
                                                <div class="col-md-8">
                                                    <input class="form-control required address" type="text"
                                                           v-model="contact.address"
                                                           :class="{'is-invalid': (!vuelidate.contact.address.required && vuelidate.$dirty)}"
                                                           placeholder="">
                                                    <template v-if="vuelidate.$dirty">
                                                        <div class="invalid-feedback"
                                                             v-if="!vuelidate.contact.address.required && vuelidate.$dirty">
                                                            {{ $t('frontend.contact.fields.address.required') }}
                                                        </div>
                                                    </template>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label>{{ $t('frontend.contact.fields.building.label') }}</label>
                                                </div>
                                                <div class="col-md-8">
                                                    <input class="form-control" v-model="contact.building"
                                                           type="text">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label>{{ $t('frontend.contact.fields.phone.label') }}
                                                        <span class="i-required">{{ $t('frontend.require') }}</span>
                                                    </label>
                                                </div>
                                                <div class="col-md-8">
                                                    <input class="form-control phone_number" name="phone"
                                                           type="text" v-model="contact.phone"
                                                           :class="{'is-invalid': ((!vuelidate.contact.phone.required || !vuelidate.contact.phone.maxLength || !vuelidate.contact.phone.minLength ) && vuelidate.$dirty)}"
                                                           :placeholder="$t('frontend.contact.fields.phone.placeholder')">
                                                    <template v-if="vuelidate.$dirty">
                                                        <div class="invalid-feedback"
                                                             v-if="!vuelidate.contact.phone.required && vuelidate.$dirty">
                                                            {{ $t('frontend.contact.fields.phone.validate.required') }}
                                                        </div>
                                                        <div class="invalid-feedback"
                                                             v-if="!vuelidate.contact.phone.maxLength && vuelidate.$dirty">
                                                            {{ $t('frontend.contact.fields.phone.validate.maxLength') }}
                                                        </div>
                                                        <div class="invalid-feedback"
                                                             v-if="!vuelidate.contact.phone.minLength && vuelidate.$dirty">
                                                            {{ $t('frontend.contact.fields.phone.validate.minLength') }}
                                                        </div>

                                                    </template>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label>{{ $t('frontend.contact.fields.email.label') }}
                                                        <span class="i-required">{{ $t('frontend.require') }}</span>
                                                    </label>
                                                </div>
                                                <div class="col-md-8">
                                                    <input class="form-control email" type="email" name="email"
                                                           v-model="contact.email"
                                                           :class="{'is-invalid': ((!vuelidate.contact.email.required || !vuelidate.contact.email.email) && vuelidate.$dirty)}"
                                                           :placeholder="$t('frontend.contact.fields.email.placeholder')">
                                                    <template v-if="vuelidate.$dirty">
                                                        <div class="invalid-feedback"
                                                             v-if="!vuelidate.contact.email.required && vuelidate.$dirty">
                                                            {{ $t('frontend.contact.fields.email.validate.required') }}
                                                        </div>
                                                        <div class="invalid-feedback"
                                                             v-if="!vuelidate.contact.email.email && vuelidate.$dirty">
                                                            {{ $t('frontend.contact.fields.email.validate.email') }}
                                                        </div>
                                                    </template>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label class="mb-2">{{
                                                            $t('frontend.contact.fields.inquiry')
                                                        }}</label>
                                                </div>
                                                <div class="col-md-12">
                                                <textarea name="inquiry" class="form-control"
                                                          v-model="contact.inquiry"
                                                          placeholder="ご質問やご希望があればご記入ください。" rows="5"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-lg-12">
                                                    <div class="request-doc_form_footer">
                                                        <p class="text-center">ご入力いただいた情報は、当社のプライバシーポリシーに従って厳重に管理いたします。
                                                            <br>下記の
                                                            <a href="https://www.prostyle-residence.com/privacy-policy/"
                                                               class="text-decoration-none"
                                                               target="_blank">プライバシーポリシー
                                                            </a> を必ずご一読頂き、同意のうえお問い合わせください。
                                                        </p>

                                                        <div class="request-doc_custom-checkbox agree-privacy">
                                                            <label class="container"
                                                                   :class="{'is-invalid': (!contact.agree_privacy && vuelidate.$dirty)}">
                                                                <input class="required" id="ck_agree" type="checkbox"
                                                                       v-model="contact.agree_privacy"
                                                                       @click="checkbox">
                                                                <span class="checkmark"></span>
                                                                {{ $t('frontend.contact.agree') }}

                                                            </label>
                                                            <template v-if="vuelidate.$dirty">
                                                                <div class="invalid-feedback"
                                                                     v-if="!contact.agree_privacy && vuelidate.$dirty">
                                                                    {{
                                                                        $t('frontend.contact.fields.checkbox.required')
                                                                    }}
                                                                </div>
                                                            </template>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-6 col-8 m-auto">
                                                    <button type="button" @click.prevent="nextStep"
                                                            class="btn btn-form-action bg-cl-green text-white js-submit-cfr"
                                                            id=""><span>{{ $t('frontend.buttons.agree') }}</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                    <template id="form-confirm" v-if="currentStep === 2">
                                        <h3></h3>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-6">
                                                    <label>{{ $t('frontend.contact.fields.name.label') }}</label>
                                                </div>
                                                <div class="col-6">
                                                    <span class="view_name_customer">{{ contact.name }}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-6">
                                                    <label>
                                                        {{ $t('frontend.contact.fields.prefectures.label') }}
                                                    </label>
                                                </div>
                                                <div class="col-6">
                                                    <span class="view_prefecture">{{ contact.prefectures }}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-6">
                                                    <label>
                                                        {{ $t('frontend.contact.fields.address.label') }}
                                                    </label>
                                                </div>
                                                <div class="col-6">
                                                    <span class="view_city">{{ contact.address }}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-6">
                                                    <label>
                                                        {{ $t('frontend.contact.fields.building.label') }}
                                                    </label>
                                                </div>
                                                <div class="col-6">
                                                    <span class="view_building">{{ contact.building }}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-6">
                                                    <label>
                                                        {{ $t('frontend.contact.fields.phone.label') }}
                                                    </label>
                                                </div>
                                                <div class="col-6">
                                                    <span class="view_phone_number">{{ contact.phone }}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-6">
                                                    <label>
                                                        {{ $t('frontend.contact.fields.email.label') }}
                                                    </label>
                                                </div>
                                                <div class="col-6">
                                                    <span class="view_email"> {{ contact.email }}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>
                                                        {{ $t('frontend.contact.fields.inquiry') }}
                                                    </label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p class="view_inquiry">{{ contact.inquiry }}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-12 col-lg-12">
                                                    <div class="request-doc_form_footer">
                                                        <div class="action_back_submit">
                                                            <button type="button"
                                                                    class="btn btn-form-action text-white bg-cl-gray-light-white-2"
                                                                    @click="prevStep"><span>戻る</span></button>

                                                            <button type="button" @click="nextStep"
                                                                    class="btn btn-form-action bg-cl-green text-white"
                                                                    id="action_submit"><span>送信</span></button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                    <template id="form-thank-you" v-if="currentStep === 3">
                                        <div class="thank-you">
                                            <h3>送信完了</h3>
                                            <p>
                                                お問い合わせありがとうございます。送信内容を受け付けました。<br>
                                                追って担当者よりご連絡させていただきます。<br>連絡がない場合はメールが届いていない可能性がありますので、お手数ですが再度お問合わせください。
                                            </p>
                                            <p>※当社指定日を挟んだ場合や、お見積り内容により、回答が数日かかる場合があります。予めご了承ください。</p>

                                            <button type="button"
                                                    class="btn btn-form-action bg-cl-green text-white">
                                                <span>トップに戻る</span></button>
                                        </div>

                                    </template>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import common from "../../../mixins/common";
import {required, maxLength, email, minLength} from "vuelidate/lib/validators";

import {Core as YubinBangoCore} from 'yubinbango-core'
import Multiselect from "vue-multiselect";

export default {
    name: "Contact",
    mixins: [common],
    components: {
        Multiselect
    },
    data() {
        return {
            currentStep: 1,
            contact: {
                name: '',
                postal_code: '',
                prefectures: '',
                address: '',
                building: '',
                phone: '',
                email: '',
                inquiry: '',
                agree_privacy: false,
            },
            selected: {name: null, id: null},
            submitAvailable: true,
        }
    },
    validations: {
        contact: {
            name: {
                required,
                maxLength: maxLength(50)
            },
            postal_code: {
                required,
                maxLength: maxLength(10)
            },
            prefectures: {
                required
            },
            address: {
                required
            },
            phone: {
                required,
                maxLength: maxLength(13),
                minLength: minLength(9)
            },
            email: {
                required, email
            }
        }
    },
    methods: {
        prevStep() {
            this.currentStep--;
            this.submitAvailable = true
        },
        nextStep() {
            this.vuelidate.$touch();
            if (this.currentStep === 1) {
                if (!this.vuelidate.$invalid && this.submitAvailable && this.contact.agree_privacy) {
                    this.submitAvailable = false
                    this.agree_privacy = true
                    this.currentStep++;
                }
            } else {
                this.currentStep++
            }
        },
        checkbox() {
            this.contact.agree_privacy = !this.contact.agree_privacy;
        },
        getAddress() {
            this.postalCode = this.contact.postal_code
            new YubinBangoCore(this.postalCode, (addr) => {
                this.contact.prefectures = addr.region // 都道府県
                this.contact.address = addr.locality + ' ' + addr.street // 市区町村

            })
        },
    },
    mounted() {
    },
    watch: {
        'contact.postal_code': function () {
            this.getAddress()
        }
    }
}
</script>

<style scoped>

</style>