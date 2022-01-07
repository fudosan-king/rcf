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
                                                           v-model="contact.name"
                                                           type="text"
                                                           :placeholder="$t('frontend.contact.fields.name.placeholder')">
                                                </div>
                                            </div>
                                        </div>
                                        <div class=" form-group">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label>{{ $t('frontend.contact.fields.post_code.label') }} <span
                                                            class="i-required">{{
                                                            $t('frontend.require')
                                                        }}</span></label>
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="row align-items-center">
                                                        <div class="col-12 col-lg-6">
                                                            <input type="text" class="form-control"
                                                                   :placeholder="$t('frontend.register.post_code.placeholder')"
                                                                   v-on:keyup="getAddress"
                                                                   v-model="contact.postal_code">
                                                        </div>
                                                        <div class="col-12 col-lg-6">
                                                            <a class=" text-decoration-none">
                                                                <img src="../../../assets/images/svg/arrow_right.svg"
                                                                     alt="" class="img-fluid mr-2"
                                                                     width="20"> 郵便番号から住所を自動入力</a>
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
                                                                 :options="prefectures"
                                                                 :selected="validateSelection"
                                                                 :placeholder="$t('frontend.register.prefectures.placeholder')">
                                                    </Multiselect>
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
                                                    <input class="form-control required" type="text"
                                                           v-model="contact.address"
                                                           placeholder="">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label>{{ $t('frontend.contact.fields.number_room.label') }}</label>
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
                                                    <input class="form-control phonenumber" name="phonenumber"
                                                           type="text" v-model="contact.phone"
                                                           :placeholder="$t('frontend.contact.fields.phone.placeholder')">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label>メールアドレス <span class="i-required">{{
                                                            $t('frontend.require')
                                                        }}</span>
                                                    </label>
                                                </div>
                                                <div class="col-md-8">
                                                    <input class="form-control email" type="email" name="email"
                                                           v-model="contact.email" placeholder="例：◯◯◯◯◯◯@xxxxxxxx.jp">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label class="mb-2">その他お問い合わせ</label>
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
                                                            <label class="container">
                                                                <input class="required" id="ck_agree" type="checkbox"
                                                                       @click="checkbox">
                                                                <span class="checkmark"></span>
                                                                {{ $t('frontend.contact.agree') }}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-6 m-auto">
                                                    <button type="button" @click.prevent=" goToStep(2)"
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
                                                        都道府県
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
                                                        住所
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
                                                        建物名・号室
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
                                                        ご連絡先電話番号
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
                                                        メールアドレス
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
                                                        その他お問い合わせ
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
                                                                    @click="goToStep(1)"><span>戻る</span></button>

                                                            <button type="button"
                                                                    class="btn btn-form-action bg-cl-green text-white"
                                                                    id="action_submit"><span>送信</span></button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
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
import {required, maxLength, email} from "vuelidate/lib/validators";

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
                post_code: '',
                prefectures: '',
                address: '',
                building: '',
                phone: '',
                email: '',
                inquiry: '',
                checked: false,
            },
            selected: {name: null, id: null},
            submitAvailable: true
        }
    },
    validations: {
        contact: {
            name: required,
            post_code: required,
            prefectures: required,
            address: required,
            phone: {
                required,
                phone: value => /^[0-9]{2,4}-[0-9]{2,4}-[0-9]{3,4}$/.test(value),
                maxLength: maxLength(15)
            },
            email: {
                required, email
            }
        }
    },
    methods: {
        goToStep(step) {
            this.contact.prefectures = this.selected.name;
            this.currentStep = step;
        },
        validateSelection(selection) {
            this.selected = selection;
        },
        checkbox() {
            this.contact.checked = !this.contact.checked;
        },
        submit() {
            this.vuelidate.$touch();
            if (!this.vuelidate.$invalid && this.submitAvailable) {
                this.submitAvailable = false
            }
        },
        getAddress() {
            this.postalCode = this.contact.postal_code
            new YubinBangoCore(this.postalCode, (addr) => {
                console.log(addr);
                this.contact.prefectures = addr.region // 都道府県
                this.contact.address = addr.locality + ' ' + addr.street // 市区町村
            })
        },
    },
    mounted() {
        this.goToStep(1);
    },
    watch: {}

}
</script>

<style scoped>

</style>