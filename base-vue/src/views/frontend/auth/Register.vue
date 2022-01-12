<template>
    <div>
        <section class="section_template">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-12">
                        <template v-if="currentStep === 1">
                            <h2 class="title">{{ $t('frontend.register.title') }}</h2>
                            <h3 class="title_sub">{{ $t('frontend.register.sub_title') }}</h3>
                            <div class="box_content">
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-12 col-lg-3">
                                            <label>{{ $t('frontend.register.email.label') }}
                                                <span class="i-required">{{ $t('frontend.require') }}</span>
                                            </label>
                                        </div>
                                        <div class="col-12 col-lg-9">
                                            <input type="text" class="form-control"
                                                   :class="{'is-invalid': ((!vuelidate.customers.email.required || !vuelidate.customers.email.email) && vuelidate.$dirty)}"
                                                   :placeholder="$t('frontend.register.email.placeholder')"
                                                   v-model="customers.email">
                                            <template v-if="vuelidate.$dirty">
                                                <div class="invalid-feedback"
                                                     v-if="!vuelidate.customers.email.required && vuelidate.$dirty">
                                                    {{ $t('frontend.register.email.validation.required') }}
                                                </div>
                                                <div class="invalid-feedback"
                                                     v-if="!vuelidate.customers.email.email && vuelidate.$dirty">
                                                    {{ $t('frontend.register.email.validation.email') }}
                                                </div>
                                            </template>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-12 col-lg-3">
                                            <label>{{ $t('frontend.register.name.label') }}
                                                <span class="i-required">{{ $t('frontend.require') }}</span>
                                            </label>
                                        </div>
                                        <div class="col-12 col-lg-9">
                                            <div class="row">
                                                <div class="col-6 col-lg-6">
                                                    <input type="text" class="form-control mr-2"
                                                           placeholder="山田"
                                                           :class="{'is-invalid': ((!vuelidate.customers.first_name.required || !vuelidate.customers.first_name.nameJapanese) && vuelidate.$dirty)}"
                                                           v-model="customers.first_name">
                                                </div>
                                                <div class="col-6 col-lg-6">
                                                    <input type="text" class="form-control"
                                                           placeholder="太郎"
                                                           :class="{'is-invalid': ((!vuelidate.customers.last_name.required ||!vuelidate.customers.last_name.nameJapanese) && vuelidate.$dirty)}"
                                                           v-model="customers.last_name">
                                                </div>
                                            </div>
                                            <template v-if="vuelidate.$dirty">
                                                <div class="invalid-feedback d-block"
                                                     v-if="!vuelidate.customers.first_name.required && vuelidate.$dirty">
                                                    {{ $t('frontend.register.name.validation.required') }}
                                                </div>
                                                <div class="invalid-feedback d-block"
                                                     v-else-if="!vuelidate.customers.first_name.maxLength && vuelidate.$dirty">
                                                    {{ $t('frontend.register.name.validation.maxLength') }}
                                                </div>
                                                <div class="invalid-feedback d-block"
                                                     v-else-if="!vuelidate.customers.first_name.nameJapanese && vuelidate.$dirty">
                                                    {{ $t('frontend.register.name.validation.name_jp') }}
                                                </div>
                                                <div class="invalid-feedback d-block"
                                                     v-else-if="!vuelidate.customers.last_name.required && vuelidate.$dirty">
                                                    {{ $t('frontend.register.name.validation.required') }}
                                                </div>
                                                <div class="invalid-feedback d-block"
                                                     v-else-if="!vuelidate.customers.last_name.maxLength && vuelidate.$dirty">
                                                    {{ $t('frontend.register.name.validation.maxLength') }}
                                                </div>
                                                <div class="invalid-feedback d-block"
                                                     v-else-if="!vuelidate.customers.last_name.nameJapanese && vuelidate.$dirty">
                                                    {{ $t('frontend.register.name.validation.name_jp') }}
                                                </div>
                                            </template>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-12 col-lg-3">
                                            <label>{{ $t('frontend.register.katakana.label') }}
                                                <span class="i-required">{{ $t('frontend.require') }}</span>
                                            </label>
                                        </div>
                                        <div class="col-12 col-lg-9">
                                            <div class="row">
                                                <div class="col-6 col-lg-6">
                                                    <input type="text" class="form-control" placeholder="ヤマダ"
                                                           :class="{'is-invalid': (( !vuelidate.customers.first_name_kana.required||!vuelidate.customers.first_name_kana.katakana || !vuelidate.customers.first_name_kana.maxLength) && vuelidate.$dirty)}"
                                                           v-model="customers.first_name_kana">
                                                </div>
                                                <div class="col-6 col-lg-6">
                                                    <input type="text" class="form-control" placeholder="タロウ"
                                                           :class="{'is-invalid': ((!vuelidate.customers.last_name_kana.required||!vuelidate.customers.last_name_kana.katakana || !vuelidate.customers.last_name_kana.maxLength) && vuelidate.$dirty)}"
                                                           v-model="customers.last_name_kana">
                                                </div>
                                            </div>
                                            <template v-if="vuelidate.$dirty">
                                                <div class="invalid-feedback d-block"
                                                     v-if="!vuelidate.customers.first_name_kana.required && vuelidate.$dirty">
                                                    {{ $t('frontend.register.katakana.validation.required') }}
                                                </div>
                                                <div class="invalid-feedback d-block"
                                                     v-else-if="!vuelidate.customers.first_name_kana.katakana && vuelidate.$dirty">
                                                    {{ $t('frontend.register.katakana.validation.katakana') }}
                                                </div>
                                                <div class="invalid-feedback d-block"
                                                     v-else-if="!vuelidate.customers.first_name_kana.maxLength && vuelidate.$dirty">
                                                    {{ $t('frontend.register.katakana.validation.maxLength') }}
                                                </div>
                                                <div class="invalid-feedback d-block"
                                                     v-else-if="!vuelidate.customers.last_name_kana.required && vuelidate.$dirty">
                                                    {{ $t('frontend.register.katakana.validation.required') }}
                                                </div>
                                                <div class="invalid-feedback d-block"
                                                     v-else-if="!vuelidate.customers.last_name_kana.katakana && vuelidate.$dirty">
                                                    {{ $t('frontend.register.katakana.validation.katakana') }}
                                                </div>
                                                <div class="invalid-feedback d-block"
                                                     v-else-if="!vuelidate.customers.last_name_kana.maxLength && vuelidate.$dirty">
                                                    {{ $t('frontend.register.katakana.validation.maxLength') }}
                                                </div>
                                            </template>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-12 col-lg-3">
                                            <label>{{ $t('frontend.register.genders.label') }}
                                                <span class="i-required">{{ $t('frontend.require') }}</span>
                                            </label>
                                        </div>
                                        <div class="col-12 col-lg-9">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="genders"
                                                       value="男性"
                                                       v-model="customers.genders"
                                                >
                                                <label class="form-check-label"> {{
                                                        $t('frontend.register.genders.male')
                                                    }} </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="genders"
                                                       value="女性"
                                                       v-model="customers.genders">
                                                <label class="form-check-label">{{
                                                        $t('frontend.register.genders.female')
                                                    }}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-12 col-lg-3">
                                            <label>{{ $t('frontend.register.birthday.label') }}
                                                <span class="i-required">{{ $t('frontend.require') }}</span>
                                            </label>
                                        </div>
                                        <div class="col-12 col-lg-9">
                                            <date-picker format="YYYY-MM-DD" type="date" lang="ja"
                                                         :disabled-date="disabledDate"
                                                         :placeholder=" momentFormat(new Date ())"
                                                         v-model="customers.birthday"
                                                         :class="{'is-invalid': ((!vuelidate.customers.birthday.required && vuelidate.$dirty))}"
                                                         class="birthday">
                                            </date-picker>
                                            <template v-if="vuelidate.$dirty">
                                                <div class="invalid-feedback"
                                                     v-if="!vuelidate.customers.birthday.required && vuelidate.$dirty">
                                                    {{ $t('frontend.register.birthday.validation.required') }}
                                                </div>
                                            </template>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-12 col-lg-3">
                                            <label>{{ $t('frontend.register.postal_code.label') }}
                                                <span class="i-required">{{ $t('frontend.require') }}</span>
                                            </label>
                                        </div>
                                        <div class="col-12 col-lg-9">
                                            <div class="row">
                                                <div class="col-7 col-lg-6 align-self-center">
                                                    <input type="text" class="form-control"
                                                           :placeholder="$t('frontend.register.postal_code.placeholder')"
                                                           v-on:keyup="getAddress"
                                                           :class="{'is-invalid': ((!vuelidate.customers.postal_code.required || !vuelidate.customers.postal_code.maxLength ) && vuelidate.$dirty)}"
                                                           v-model="customers.postal_code">
                                                    <template v-if="vuelidate.$dirty">
                                                        <div class="invalid-feedback"
                                                             v-if="!vuelidate.customers.postal_code.required && vuelidate.$dirty">
                                                            {{
                                                                $t('frontend.register.postal_code.validation.required')
                                                            }}
                                                        </div>
                                                        <div class="invalid-feedback"
                                                             v-if="!vuelidate.customers.postal_code.maxLength && vuelidate.$dirty">
                                                            {{
                                                                $t('frontend.register.postal_code.validation.maxLength')
                                                            }}
                                                        </div>
                                                    </template>
                                                </div>
                                                <div class="col-5 col-lg-6 align-self-center">
                                                    <a class="zipcode_auto font-weight-bold" @click="getAddress()"><img
                                                            src="../../../assets/images/svg/arrow_right.svg" alt=""
                                                            class="img-fluid mr-2" width="20">
                                                        {{ $t('frontend.register.postal_code.auto_complete') }}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-12 col-lg-3">
                                            <label> {{ $t('frontend.contact.fields.prefectures.label') }}
                                                <span class="i-required">{{ $t('frontend.require') }}</span>
                                            </label>
                                        </div>
                                        <div class="col-12 col-lg-9">
                                            <Multiselect v-model="customers.prefectures"
                                                         :options="prefectures"
                                                         :class="{'is-invalid': ((!vuelidate.customers.prefectures.required) && vuelidate.$dirty)}"
                                                         :placeholder="$t('frontend.register.prefectures.placeholder')">
                                            </Multiselect>
                                            <template v-if="vuelidate.$dirty">
                                                <div class="invalid-feedback"
                                                     v-if="!vuelidate.customers.prefectures.required && vuelidate.$dirty">
                                                    {{ $t('frontend.contact.fields.prefectures.required') }}
                                                </div>
                                            </template>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-12 col-lg-3">
                                            <label>{{ $t('frontend.register.locality') }}
                                                <span class="i-required">{{ $t('frontend.require') }}</span>
                                            </label>
                                        </div>
                                        <div class="col-12 col-lg-9">
                                            <input type="text" class="form-control"
                                                   :class="{'is-invalid': ((!vuelidate.customers.locality.required) && vuelidate.$dirty)}"
                                                   v-model="customers.locality">
                                            <template v-if="vuelidate.$dirty">
                                                <div class="invalid-feedback"
                                                     v-if="!vuelidate.customers.locality.required && vuelidate.$dirty">
                                                    {{ $t('frontend.contact.fields.prefectures.required') }}
                                                </div>
                                            </template>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-12 col-lg-3">
                                            <label>{{ $t('frontend.register.street') }}
                                                <span class="i-required">{{ $t('frontend.require') }}</span>
                                            </label>
                                        </div>
                                        <div class="col-12 col-lg-9">
                                            <input type="text" class="form-control"
                                                   :class="{'is-invalid': ((!vuelidate.customers.street.required) && vuelidate.$dirty)}"
                                                   v-model="customers.street">
                                            <template v-if="vuelidate.$dirty">
                                                <div class="invalid-feedback"
                                                     v-if="!vuelidate.customers.street.required && vuelidate.$dirty">
                                                    {{ $t('frontend.contact.fields.prefectures.required') }}
                                                </div>
                                            </template>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-12 col-lg-3">
                                            <label>{{ $t('frontend.register.building') }}</label>
                                        </div>
                                        <div class="col-12 col-lg-9">
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-12 col-lg-3">
                                            <label>{{ $t('frontend.register.phone.label') }}
                                                <span class="i-required">{{ $t('frontend.require') }}</span>
                                            </label>
                                        </div>
                                        <div class="col-12 col-lg-9">
                                            <input type="text" class="form-control"
                                                   :class="{'is-invalid': ((!vuelidate.customers.phone.required || !vuelidate.customers.phone.maxLength || !vuelidate.customers.phone.minLength ) && vuelidate.$dirty)}"
                                                   :placeholder="$t('frontend.register.phone.placeholder')"
                                                   v-model="customers.phone">
                                            <template v-if="vuelidate.$dirty">
                                                <div class="invalid-feedback"
                                                     v-if="!vuelidate.customers.phone.required && vuelidate.$dirty">
                                                    {{ $t('frontend.register.phone.validate.required') }}
                                                </div>
                                                <div class="invalid-feedback"
                                                     v-if="!vuelidate.customers.phone.maxLength && vuelidate.$dirty">
                                                    {{ $t('frontend.register.phone.validate.maxLength') }}
                                                </div>
                                                <div class="invalid-feedback"
                                                     v-if="!vuelidate.customers.phone.minLength && vuelidate.$dirty">
                                                    {{ $t('frontend.register.phone.validate.minLength') }}
                                                </div>

                                            </template>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-12 col-lg-3 align-self-center">
                                            <label>{{ $t('frontend.register.document.label') }}
                                                <span class="i-required">{{ $t('frontend.require') }}</span>
                                            </label>
                                        </div>
                                        <div class="col-12 col-lg-9 align-self-center">
                                            <div class="form-check" v-for="(item, index) in customers.documents"
                                                 :key="index">
                                                <input class="form-check-input" type="checkbox" v-model="item.checked">
                                                <label class="form-check-label">
                                                    {{ item.document }}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-12 col-lg-6 m-auto text-center">
                                            <button @click.prevent="nextStep" class="btn btn_confirm">
                                                {{ $t('frontend.buttons.confirm_info') }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template v-if="currentStep === 2">
                            <h2 class="title">出資者基本情報確認</h2>

                            <div class="box_content">
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-4">
                                            <label>{{ $t('frontend.register.email.label') }}</label>
                                        </div>
                                        <div class="col-8">
                                            <span class="view_email">{{ customers.email }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-4">
                                            <label>{{ $t('frontend.register.name.label') }}</label>
                                        </div>
                                        <div class="col-8">
                                            <span class="view_name">{{ customers.name }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-4">
                                            <label>{{ $t('frontend.register.katakana.label') }}</label>
                                        </div>
                                        <div class="col-8">
                                            <span class="view_katakana">{{ customers.katakana_name }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-4">
                                            <label>{{ $t('frontend.register.genders.label') }}</label>
                                        </div>
                                        <div class="col-8">
                                            <span class="view_genders"> {{ customers.genders }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-4">
                                            <label>{{ $t('frontend.register.birthday.label') }}</label>
                                        </div>
                                        <div class="col-8">
                                            <span class="view_birthday"> {{ momentFormat(customers.birthday) }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-4">
                                            <label>{{ $t('frontend.register.postal_code.label') }}</label>
                                        </div>
                                        <div class="col-8">
                                            <span class="view_postal_code">{{ customers.postal_code }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-4">
                                            <label>{{ $t('frontend.register.prefectures.label') }}</label>
                                        </div>
                                        <div class="col-8">
                                            <span class="view_prefectures">{{ customers.prefectures }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-4">
                                            <label>{{ $t('frontend.register.locality') }}</label>
                                        </div>
                                        <div class="col-8">
                                            <span class="view_locality">{{ customers.locality }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-4">
                                            <label>{{ $t('frontend.register.street') }}</label>
                                        </div>
                                        <div class="col-8">
                                            <span class="view_street">{{ customers.street }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-4">
                                            <label>{{ $t('frontend.register.building') }}</label>
                                        </div>
                                        <div class="col-8">
                                            <span class="view_building">{{ customers.building }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-4">
                                            <label>{{ $t('frontend.register.phone.label') }}</label>
                                        </div>
                                        <div class="col-8">
                                            <span class="view_phone">{{ customers.phone }}</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-4">
                                            <label>{{ $t('frontend.register.document.label') }}</label>
                                        </div>
                                        <div class="col-8">
                                            <span class="view_document"> {{ customers.documents.join("\r\n") }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-12 col-lg-4 offset-lg-2 text-center mb-2">
                                            <button class="btn btn_cancel btn_gray text-white bg-cl-gray-light-white-2 w-100 p--15"
                                                    @click.prevent="prevStep">戻る
                                            </button>
                                        </div>
                                        <div class="col-12 col-lg-4 text-center ml-3 mb-2">
                                            <button class="btn btn_next text-white bg-cl-green w-100 p--15"
                                                    @click="nextStep()">
                                                次へ> 確認画面へ
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template v-if="currentStep === 3">
                            <h2 class="title">出資者基本情報確認</h2>
                            <div class="box_content px-lg-4">
                                <div class="box_send_completely text-center">
                                    <h3>送信完了</h3>
                                    <p>出資者情報登録ありがとうございます。送信内容を受け付けました。<br>
                                        追って担当者よりご連絡させていただきます。<br>
                                        連絡がない場合はメールが届いていない可能性がありますので、お手数ですが再度お問合わせください。</p>
                                    <p>※当社指定日を挟んだ場合や、お見積り内容により、回答が数日かかる場合があります。予めご了承ください。</p>
                                    <p class="text-center mt-5">
                                        <button href="#" class="btn btn_green bg-cl-green text-white">トップに戻る</button>
                                    </p>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import common from "../../../mixins/common";
import {email, maxLength, minLength, required} from "vuelidate/lib/validators";
import {katakana, nameJapanese} from "../../../helpers/utils";
import {Core as YubinBangoCore} from 'yubinbango-core'
import Multiselect from 'vue-multiselect';
import {momentFormat} from "../../../filters";


export default {
    name: "Register",
    mixins: [common],
    components: {
        Multiselect,
    },
    data: function () {
        return {
            customers: {
                email: "",
                name: "",
                full_name: "",
                katakana_name: "",
                genders: "男性",
                birthday: "",
                postal_code: "",
                prefectures: "",
                locality: "",
                street: "",
                building: "",
                phone: "",
                documents: [
                    {
                        document: "電子交付に関する同意",
                        checked: true
                    },
                    {
                        document: "反社勢力でない事の表明・確約に関する同意",
                        checked: true
                    },
                    {
                        document: "個人情報の取扱いに関する同意",
                        checked: true
                    },

                ],
                first_name: "",
                last_name: "",
                first_name_kana: "",
                last_name_kana: "",
            },
            currentStep: 1,
            submitAvailable: true,
        };
    },
    validations: {
        customers: {
            first_name: {
                required,
                nameJapanese: (val) => {
                    return nameJapanese(val)
                },
                maxLength: maxLength(30),
            },
            last_name: {
                required,
                nameJapanese: (val) => {
                    return nameJapanese(val)
                },
                maxLength: maxLength(30),
            },
            birthday: {
                required,
            },
            postal_code: {
                required,
                maxLength: maxLength(10),
            },
            prefectures: {
                required,
            },
            locality: {
                required,
            },
            street: {
                required,
            },
            first_name_kana: {
                required,
                katakana: (val) => {
                    return katakana(val)
                },
                maxLength: maxLength(50),
            },
            last_name_kana: {
                required,
                katakana: (val) => {
                    return katakana(val)
                },
                maxLength: maxLength(50),
            },
            email: {
                required, email
            },
            phone: {
                required,
                maxLength: maxLength(13),
                minLength: minLength(9),
            },
        }
    },
    methods: {
        momentFormat(date, format = 'YYYY-MM-DD') {
            return momentFormat(date, format)
        },
        disabledDate(date) {
            return date < new Date(1945, 1, 1) || date > new Date();
        },
        getAddress() {
            this.postalCode = this.customers.postal_code
            new YubinBangoCore(this.postalCode, (addr) => {
                this.customers.prefectures = addr.region // 都道府県
                this.customers.locality = addr.locality // 市区町村
                this.customers.street = addr.street // 町域
            })
        },
        prevStep() {
            this.currentStep--;
        },
        nextStep() {
            this.vuelidate.$touch();
            if (this.currentStep === 1) {
                if (!this.vuelidate.$invalid && this.submitAvailable) {
                    this.submitAvailable = false
                    this.customers.name = this.customers.first_name + " " + this.customers.last_name
                    this.customers.katakana_name = this.customers.first_name_kana + " " + this.customers.last_name_kana
                    this.customers.documents = this.customers.documents.filter(item => item.checked).map(item => item.document)
                    this.currentStep++;
                }
            } else if (this.currentStep === 2) {
                this.currentStep++;
            }
        },
    },
    mounted() {
        this.customers.name = this.customers.first_name + " " + this.customers.last_name
        this.customers.katakana_name = this.customers.first_name_kana + " " + this.customers.last_name_kana
    }

}
</script>

<style lang="scss" scoped>
.view_document {
    white-space: pre;
}
</style>