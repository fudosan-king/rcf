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
                                            <label>{{ $t('frontend.register.email.label') }}</label>
                                        </div>
                                        <div class="col-12 col-lg-9">
                                            <input type="text" class="form-control"
                                                   :placeholder="$t('frontend.register.email.placeholder')"
                                                   v-model="customers.email">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-12 col-lg-3">
                                            <label>{{ $t('frontend.register.name.label') }}</label>
                                        </div>
                                        <div class="col-12 col-lg-9">
                                            <div class="row">
                                                <div class="col-6 col-lg-6">
                                                    <input type="text" class="form-control mr-2" placeholder="山田"
                                                           v-model="customers.first_name">
                                                </div>
                                                <div class="col-6 col-lg-6">
                                                    <input type="text" class="form-control" placeholder="太郎"
                                                           v-model="customers.last_name">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-12 col-lg-3">
                                            <label>{{ $t('frontend.register.katakana') }}</label>
                                        </div>
                                        <div class="col-12 col-lg-9">
                                            <div class="row">
                                                <div class="col-6 col-lg-6">
                                                    <input type="text" class="form-control" placeholder="ヤマダ"
                                                           v-model="customers.kata_first_name">
                                                </div>
                                                <div class="col-6 col-lg-6">
                                                    <input type="text" class="form-control" placeholder="タロウ"
                                                           v-model="customers.kata_last_name">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-12 col-lg-3">
                                            <label>{{ $t('frontend.register.genders.label') }}</label>
                                        </div>
                                        <div class="col-12 col-lg-9">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="genders"
                                                       :value="1"
                                                       v-model="customers.genders"
                                                >
                                                <label class="form-check-label">{{
                                                        $t('frontend.register.genders.male')
                                                    }}</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="genders"
                                                       :value="0"
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
                                            <label>{{ $t('frontend.register.birthday.label') }}</label>
                                        </div>
                                        <div class="col-12 col-lg-9">
                                            <input type="text" class="form-control"
                                                   :placeholder="$t('frontend.register.birthday.placeholder')"
                                                   v-model="customers.birthday">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-12 col-lg-3">
                                            <label>{{ $t('frontend.register.post_code.label') }}</label>
                                        </div>
                                        <div class="col-12 col-lg-9">
                                            <div class="row">
                                                <div class="col-7 col-lg-6 align-self-center">
                                                    <input type="text" class="form-control"
                                                           :placeholder="$t('frontend.register.post_code.placeholder')"
                                                           v-on:keyup="getAddress"
                                                           v-model="customers.postal_code">
                                                </div>
                                                <div class="col-5 col-lg-6 align-self-center">
                                                    <a class="zipcode_auto font-weight-bold" @click="getAddress()"><img
                                                            src="../../../assets/images/svg/arrow_right.svg" alt=""
                                                            class="img-fluid mr-2" width="20">
                                                        {{ $t('frontend.register.post_code.auto_complete') }}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-12 col-lg-3">
                                            <label>{{ $t('frontend.contact.fields.prefectures.label') }}</label>
                                        </div>
                                        <div class="col-12 col-lg-9">

                                            <Multiselect v-model="customers.prefectures"
                                                         :options="prefectures"
                                                         :selected="validateSelection"
                                                         :placeholder="$t('frontend.register.prefectures.placeholder')">
                                            </Multiselect>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-12 col-lg-3">
                                            <label>{{ $t('frontend.register.locality') }}</label>
                                        </div>
                                        <div class="col-12 col-lg-9">
                                            <input type="text" class="form-control" v-model="customers.locality">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-12 col-lg-3">
                                            <label>{{ $t('frontend.register.street') }}</label>
                                        </div>
                                        <div class="col-12 col-lg-9">
                                            <input type="text" class="form-control" v-model="customers.street">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-12 col-lg-3">
                                            <label>{{ $t('frontend.register.building') }}</label>
                                        </div>
                                        <div class="col-12 col-lg-9">
                                            <input type="text" class="form-control" placeholder="00000000000">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-12 col-lg-3">
                                            <label>{{ $t('frontend.register.phone_number.label') }}</label>
                                        </div>
                                        <div class="col-12 col-lg-9">
                                            <input type="text" class="form-control" placeholder="◯◯◯◯◯◯@xxxxxxxx.jp">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-12 col-lg-3 align-self-center">
                                            <label>{{ $t('frontend.register.confirm_document.label') }}</label>
                                        </div>
                                        <div class="col-12 col-lg-9 align-self-center">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                       id="customCheck1">
                                                <label class="form-check-label" for="customCheck1">
                                                    {{ $t('frontend.register.confirm_document.value_1') }}
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                       id="customCheck2">
                                                <label class="form-check-label" for="customCheck2">
                                                    {{ $t('frontend.register.confirm_document.value_2') }}
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                       id="customCheck3">
                                                <label class="form-check-label" for="customCheck3">
                                                    {{ $t('frontend.register.confirm_document.value_3') }}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-12 col-lg-6 m-auto text-center">
                                            <button @click="goToStep(2)" class="btn btn_confirm">
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
                                        <div class="col-6">
                                            <label>{{ $t('frontend.register.email.label') }}</label>
                                        </div>
                                        <div class="col-6">
                                            <span class="view_email">{{ customers.email }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-6">
                                            <label>{{ $t('frontend.register.name.label') }}</label>
                                        </div>
                                        <div class="col-6">
                                            <span class="view_name">{{ customers.name }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-6">
                                            <label>{{ $t('frontend.register.katakana') }}</label>
                                        </div>
                                        <div class="col-6">
                                            <span class="view_katakana">{{ customers.katakana_name }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-6">
                                            <label>{{ $t('frontend.register.genders.label') }}</label>
                                        </div>
                                        <div class="col-6">
                                            <span class="view_genders"> {{ customers.genders }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-6">
                                            <label>{{ $t('frontend.register.birthday.label') }}</label>
                                        </div>
                                        <div class="col-6">
                                            <span class="view_birthday"> {{ customers.birthday }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-6">
                                            <label>{{ $t('frontend.register.post_code.label') }}</label>
                                        </div>
                                        <div class="col-6">
                                            <span class="view_postal_code">{{ customers.postal_code }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-6">
                                            <label>{{ $t('frontend.register.prefectures.label') }}</label>
                                        </div>
                                        <div class="col-6">
                                            <span class="view_prefectures">{{ customers.prefectures }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-6">
                                            <label>{{ $t('frontend.register.locality') }}</label>
                                        </div>
                                        <div class="col-6">
                                            <span class="view_locality">{{ customers.locality }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-6">
                                            <label>{{ $t('frontend.register.street') }}</label>
                                        </div>
                                        <div class="col-6">
                                            <span class="view_street">{{ customers.street }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-6">
                                            <label>{{ $t('frontend.register.building') }}</label>
                                        </div>
                                        <div class="col-6">
                                            <span class="view_building">{{ customers.building }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-6">
                                            <label>{{ $t('frontend.register.phone_number.label') }}</label>
                                        </div>
                                        <div class="col-6">
                                            <span class="view_phone">{{ customers.phone }}</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-6">
                                            <label>{{ $t('frontend.register.confirm_document.label') }}</label>
                                        </div>
                                        <div class="col-6">
                                            <span class="view_document"> {{ customers.document }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-12 col-lg-4 offset-lg-2 text-center">
                                            <button class="btn btn_cancel btn_gray"> 戻る</button>
                                        </div>
                                        <div class="col-12 col-lg-4 text-center">
                                            <button class="btn btn_next"> 確認画面へ</button>
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
                                    <p class="text-center mt-5"><a href="#" class="btn btn_green">トップに戻る</a></p>
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
import {katakana} from "../../../helpers/utils";
import {Core as YubinBangoCore} from 'yubinbango-core'
import Multiselect from 'vue-multiselect';

export default {
    name: "Register",
    mixins: [common],
    components: {
        Multiselect
    },
    data: function () {
        return {
            customers: {
                email: "",
                name: "",
                full_name: "",
                katakana_name: "",
                genders: "",
                birthday: "",
                postal_code: "",
                prefectures: "",
                locality: "",
                street: "",
                building: "",
                phone: "",
                document: "",
                first_name: "",
                last_name: "",
                kata_first_name: "",
                kata_last_name: "",
            },
            currentStep: 1,
        };
    },
    validations: {
        customers: {
            name: {
                required,
                maxLength: maxLength(50)
            },
            full_name: {
                maxLength: maxLength(30),
            },
            postal_code: {
                required,
                maxLength: maxLength(10),
            },
            katakana_name: {
                katakana: (val) => {
                    return katakana(val)
                },
                maxLength: maxLength(50),
            },
            email: {
                required, email
            },
            phone: {
                maxLength: maxLength(13),
                minLength: minLength(9),
            },
        }
    },
    methods: {
        validateSelection(selection) {
            if (this.customers.prefectures === '') {
                this.customers.prefectures = selection;
            }
            this.selected = selection;
        },
        getAddress() {
            this.postalCode = this.customers.postal_code
            new YubinBangoCore(this.postalCode, (addr) => {
                this.customers.prefectures = addr.region // 都道府県
                this.customers.locality = addr.locality // 市区町村
                this.customers.street = addr.street // 町域
            })
        },
        goToStep(step) {
            this.currentStep = step;
        },
    }

}
</script>

<style scoped>

</style>