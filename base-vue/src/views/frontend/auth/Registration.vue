<template>
    <div>
        <section class="section_template">
            <div class="container" id="registration">
                <div class="row">
                    <div class="col-12 col-lg-12">
                        <ul class="steps" id="list-step">
                            <template v-for="(step, index) in steps">
                                <li :key="'step-' + index"
                                    :class="{'active': index + 1 === currentStep, 'actived': index + 1 < currentStep}">
                                    <a @click="gotoStep(index + 1)">
                                        <span>{{ step.numberStep }}</span>
                                        <span>{{ step.stepName }}</span>
                                    </a>
                                </li>
                            </template>
                        </ul>
                    </div>
                </div>

                <template v-if="currentStep===1">
                    <h2 class="title">{{ $t('frontend.register.register_investor.title') }}</h2>
                    <h3 class="title_sub">{{ $t('frontend.register.register_investor.sub_title') }}</h3>
                </template>
                <template v-if="currentStep===2">
                    <h2 class="title">{{ $t('frontend.register.register_document.title') }}</h2>
                    <h3 class="title_sub">{{ $t('frontend.register.register_document.sub_title') }}</h3>
                    <div class="row mb-5">
                        <div class="col-12 col-lg-6 m-auto">
                            <ul class="m-auto list-inline">
                                <li>運転免許証（裏・表）</li>
                                <li>マイナンバーカード（裏・表）</li>
                                <li>〇〇カードの場合は△△の提出も必要です。</li>
                            </ul>
                        </div>
                    </div>
                </template>
                <template v-if="currentStep===3">
                    <h2 class="title">{{ $t('frontend.register.register_document.title') }}</h2>
                    <h3 class="title_sub">{{ $t('frontend.register.register_document.sub_title') }}</h3>
                </template>
                <template v-if="currentStep===4">
                    <h2 class="title">{{ $t('frontend.register.register_confirmation.title') }}</h2>
                    <h3 class="title_sub white-space-pre">{{
                            $t('frontend.register.register_confirmation.sub_title')
                        }}</h3>
                </template>
                <template v-if="currentStep===5">
                    <h3 class="title">{{ $t('frontend.register.register_completed.title') }}</h3>
                </template>
                <div class="card" v-if="currentStep !== 5">
                    <div class="card-header bg-cl-green">
                        {{ $t('frontend.register.basic_info.title') }}
                    </div>
                    <div class="card-body">
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
                                    <span class="view_email">{{
                                            customers.first_name + ' ' + customers.last_name
                                        }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-4">
                                    <label>{{ $t('frontend.register.katakana.label') }}</label>
                                </div>
                                <div class="col-8">
                                    <span class="view_katakana">{{
                                            customers.kana_first_name + " " + customers.kana_last_name
                                        }}</span>
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
                                    <span class="view_birthday"> {{ customers.birthday }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-4">
                                    <label>{{ $t('frontend.register.address') }}</label>
                                </div>
                                <div class="col-8">
                                    <span class="view_address"> {{ address }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-4">
                                    <label>{{ $t('frontend.register.phone.label') }}</label>
                                </div>
                                <div class="col-8">
                                    <span class="view_address"> {{ this.customers.phone }}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <template v-if="currentStep === 1">
                    <div class="card mt-2">
                        <div class="card-header bg-cl-green">
                            {{ $t('frontend.register.register_investor.investor_info') }}
                        </div>
                        <div class="card-body box_content">
                            <div class="form-group mb--40">
                                <div class="row">
                                    <div class="col-lg-3 col-md-3 col-12">
                                        <label>{{ $t('frontend.register.register_investor.profession.label') }}</label>
                                    </div>
                                    <div class="col-lg-9 col-12">
                                        <Multiselect v-model="profile.professions"
                                                     :options="professions"
                                                     :placeholder="professionPlaceholder">
                                        </Multiselect>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mb--40">
                                <div class="row">
                                    <div class="col-12 col-lg-3">
                                        <label>{{ $t('frontend.register.register_investor.company.label') }}</label>
                                    </div>
                                    <div class="col-12 col-lg-9">
                                        <input type="text" class="form-control"
                                               :placeholder="$t('frontend.register.register_investor.company.placeholder')"
                                               v-model="profile.company">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mb--40">
                                <div class="row">
                                    <div class="col-12 col-lg-3">
                                        <label>{{ $t('frontend.register.register_investor.income.label') }}

                                        </label>
                                    </div>
                                    <div class="col-12 col-lg-9">
                                        <input type="text" class="form-control"
                                               :placeholder="$t('frontend.register.register_investor.income.placeholder')"
                                               v-model="profile.income">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mb--40">
                                <div class="row">
                                    <div class="col-lg-3 col-md-3 col-12">
                                        <label>{{
                                                $t('frontend.register.register_investor.investment_purpose.label')
                                            }}</label>
                                    </div>
                                    <div class="col-lg-9 col-md-9 col-12">
                                        <Multiselect v-model="profile.investment_purposes"
                                                     :options="investmentPurposes"
                                                     :placeholder="$t('placeholders.select')">
                                        </Multiselect>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mb--40">
                                <div class="row">
                                    <div class="col-lg-3 col-md-3 col-12">
                                        <label>{{
                                                $t('frontend.register.register_investor.investment_method.label')
                                            }}</label>
                                    </div>
                                    <div class="col-lg-9 col-md-9 col-12">
                                        <Multiselect v-model="profile.professions"
                                                     :options="investmentMethods"
                                                     :placeholder="$t('placeholders.select')">
                                        </Multiselect>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mb--40">
                                <div class="row">
                                    <div class="col-lg-3 col-md-3 col-12">
                                        <label>{{
                                                $t('frontend.register.register_investor.investment_experience.label')
                                            }}</label>
                                    </div>
                                    <div class="col-lg-9 col-md-9 col-12">
                                        <Multiselect v-model="profile.investment_experiences"
                                                     :options="investmentExperiences"
                                                     :placeholder="$t('placeholders.select')">
                                        </Multiselect>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mb--40">
                                <div class="row">
                                    <div class="col-lg-3 col-md-3 col-12">
                                        <label>{{
                                                $t('frontend.register.register_investor.investment_type.label')
                                            }}</label>
                                    </div>
                                    <div class="col-lg-9 col-md-9 col-12">
                                        <Multiselect v-model="profile.investment_types"
                                                     :options="investmentTypes"
                                                     :placeholder="$t('placeholders.select')">
                                        </Multiselect>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group text-center mb-5">
                                <div class="row">
                                    <div class="col-12 col-lg-6 m-auto text-center">
                                        <button @click="nextStep" class="btn btn_confirm">
                                            {{ $t('frontend.buttons.next_steps') }}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-if="currentStep ===2">
                    <div class="card mt-2">
                        <div class="card-header bg-cl-green">
                            {{ $t('frontend.register.register_document.document_info') }}
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-12 col-lg-3 align-self-center">
                                        <label class="mb-lg-0">{{
                                                $t('frontend.register.register_document.doc_type')
                                            }}</label>
                                    </div>
                                    <div class="col-12 col-lg-9 align-self-center">
                                        <Multiselect v-model="profile.id_type"
                                                     :options="documentTypes"
                                                     :placeholder="$t('placeholders.select')">
                                        </Multiselect>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mb--40">
                                <div class="row">
                                    <div class="col-12 col-lg-6">
                                        <vue-dropzone ref="myVueDropzone" :options="dropzoneOptions" class="p-0"
                                                      id="tap1"></vue-dropzone>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <vue-dropzone ref="myVueDropzone" :options="dropzoneOptions" class="p-0"
                                                      id="tap2"></vue-dropzone>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-12 col-lg-5 offset-lg-1 text-center mb-2">
                                        <button class="btn btn_cancel btn_gray text-white bg-cl-gray-light-white-2 w-100 p--15"
                                                @click.prevent="prevStep">{{ $t('frontend.buttons.back') }}
                                        </button>
                                    </div>
                                    <div class="col-12 col-lg-5 text-center ml-3 mb-2">
                                        <button class="btn btn_next text-white bg-cl-green w-100 p--15"
                                                @click="nextStep">
                                            {{ $t('frontend.buttons.next_refund') }}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-if="currentStep===3">
                    <div class="card">
                        <div class="card-header">
                            {{ $t('frontend.register.register_confirmation.refund_info') }}
                        </div>
                        <div class="card-body">
                            <div class="form-group mb--40">
                                <div class="row">
                                    <div class="col-12 col-lg-3">
                                        <label>{{ $t('frontend.register.register_refund.bank_name') }}</label>
                                    </div>
                                    <div class="col-12 col-lg-9">
                                        <Multiselect v-model="profile.bank_name"
                                                     :options="bankNames"
                                                     :placeholder="$t('placeholders.select')">
                                        </Multiselect>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mb--40">
                                <div class="row">
                                    <div class="col-12 col-lg-3">
                                        <label>{{ $t('frontend.register.register_refund.bank_branch_name') }}</label>
                                    </div>
                                    <div class="col-12 col-lg-9">
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mb--40">
                                <div class="row">
                                    <div class="col-12 col-lg-3">
                                        <label>{{ $t('frontend.register.register_refund.bank_branch_number') }}</label>
                                    </div>
                                    <div class="col-12 col-lg-9">
                                        <input type="text" class="form-control" placeholder="00000000000000">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mb--40">
                                <div class="row">
                                    <div class="col-12 col-lg-3">
                                        <label>{{ $t('frontend.register.register_refund.account_type') }}</label>
                                    </div>
                                    <div class="col-12 col-lg-9">
                                        <Multiselect v-model="profile.account_type"
                                                     :options="accountTypes"
                                                     :placeholder="$t('placeholders.select')">
                                        </Multiselect>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mb--40">
                                <div class="row">
                                    <div class="col-12 col-lg-3">
                                        <label>{{ $t('frontend.register.register_refund.account_number') }}</label>
                                    </div>
                                    <div class="col-12 col-lg-9">
                                        <input type="text" class="form-control" placeholder="0000000000000000">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mb--40">
                                <div class="row">
                                    <div class="col-12 col-lg-3">
                                        <label>{{ $t('frontend.register.register_refund.account_name') }}</label>
                                    </div>
                                    <div class="col-12 col-lg-9">
                                        <Multiselect v-model="profile.account_name"
                                                     :options="accountNames"
                                                     :placeholder="$t('placeholders.select')">
                                        </Multiselect>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-12 col-lg-5 offset-lg-1 text-center mb-2">
                                        <button class="btn btn_cancel btn_gray text-white bg-cl-gray-light-white-2 w-100 p--15"
                                                @click.prevent="prevStep">{{ $t('frontend.buttons.back') }}
                                        </button>
                                    </div>
                                    <div class="col-12 col-lg-5 text-center ml-3 mb-2">
                                        <button class="btn btn_next text-white bg-cl-green w-100 p--15"
                                                @click="nextStep">
                                            {{ $t('frontend.buttons.next_refund') }}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-if="currentStep===4">
                    <div class="card mb-0">
                        <div class="card-header bg-cl-green">
                            {{ $t('frontend.register.register_confirmation.investor_info') }}
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-4">
                                        <label>{{
                                                $t('frontend.register.register_confirmation.profession')
                                            }}</label>
                                    </div>
                                    <div class="col-8">
                                        <span class="view_professions">{{ profile.professions }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-4">
                                        <label>{{
                                                $t('frontend.register.register_confirmation.company')
                                            }}</label>
                                    </div>
                                    <div class="col-8">
                                        <span class="view_company">{{ profile.company }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-4">
                                        <label> {{
                                                $t('frontend.register.register_confirmation.income')
                                            }}
                                        </label>
                                    </div>
                                    <div class="col-8">
                                        <span class="view_income">{{ profile.income }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-4">
                                        <label>{{
                                                $t('frontend.register.register_investor.investment_purpose.label')
                                            }}</label>
                                    </div>
                                    <div class="col-8">
                                        <span class="view_investment_purpose"> {{ profile.investment_purposes }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-4">
                                        <label>{{
                                                $t('frontend.register.register_confirmation.investment_method')
                                            }}</label>
                                    </div>
                                    <div class="col-8">
                                        <span class="view_investment_method"> {{ profile.investment_methods }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-4">
                                        <label>{{
                                                $t('frontend.register.register_confirmation.investment_experience')
                                            }}</label>
                                    </div>
                                    <div class="col-8">
                                        <span class="view_investment_experience"> {{
                                                profile.investment_experiences
                                            }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-4">
                                        <label>{{
                                                $t('frontend.register.register_investor.investment_type.label')
                                            }}</label>
                                    </div>
                                    <div class="col-8">
                                        <span class="view_investment_type"> {{ profile.investment_types }}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="card mb-0">
                        <div class="card-header bg-cl-green">
                            {{ $t('frontend.register.register_confirmation.document_info') }}
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-4">
                                        <label>{{ $t('frontend.register.register_document.doc_type') }}</label>
                                    </div>
                                    <div class="col-8">
                                        <span class="view_document">{{ profile.id_type }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-0">
                        <div class="card-header bg-cl-green">
                            {{ $t('frontend.register.register_confirmation.refund_info') }}
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-4">
                                        <label>{{ $t('frontend.register.register_confirmation.bank_name') }}</label>
                                    </div>
                                    <div class="col-8">
                                        <span class="view_bank_name">{{ profile.bank_name }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-4">
                                        <label>{{
                                                $t('frontend.register.register_confirmation.account_number')
                                            }}</label>
                                    </div>
                                    <div class="col-8">
                                        <span class="view_email">{{ profile.bank_branch_name }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-4">
                                        <label>{{
                                                $t('frontend.register.register_confirmation.account_number')
                                            }}</label>
                                    </div>
                                    <div class="col-8">
                                        <span class="view_katakana">{{ profile.account_number }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group m__bottom--2">
                                <div class="row">
                                    <div class="col-4">
                                        <label>{{ $t('frontend.register.register_confirmation.account_name') }}</label>
                                    </div>
                                    <div class="col-8">
                                        <span class="view_account_name"> {{ profile.account_name }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mb--40">
                                <div class="row">
                                    <div class="col-12 text-center">
                                        <label class="text-center custom-checkbox">
                                            <input class="required" id="ck_agree" type="checkbox">
                                            <span class="checkmark"></span>
                                            {{ $t('frontend.register.register_confirmation.checkbox_confirm') }}
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group m__bottom--2">
                                <div class="row">
                                    <div class="col-12 col-lg-5 offset-lg-1 text-center mb-2">
                                        <button class="btn btn_cancel btn_gray text-white bg-cl-gray-light-white-2 w-100 p--15"
                                                @click.prevent="prevStep">{{ $t('frontend.buttons.back') }}
                                        </button>
                                    </div>
                                    <div class="col-12 col-lg-5 text-center ml-3 mb-2">
                                        <button class="btn btn_next text-white bg-cl-green w-100 p--15"
                                                @click="nextStep">
                                            {{ $t('frontend.buttons.apply') }}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </template>
                <template v-if="currentStep === 5">
                    <div class="box_content px-lg-4">
                        <div class="box_send_completely text-center">
                            <h3>{{ $t('frontend.register.register_completed.title') }}</h3>
                            <p>ご登録いただいた情報の審査に数日かかる場合がございます。<br>
                                審査が完了のご連絡はご登録のメールアドレス宛にお送りいたします。</p>
                            <p>ご登録いただいた住所宛にはがきが届きます。</p>
                            <p>審査通過後、入金と投資申込機能がご利用いただけます。</p>
                            <p class="text-center mt-5">
                                <router-link :to="{name: 'home'}"
                                             class="btn btn_green">{{ $t('frontend.buttons.back_to_top') }}
                                </router-link>
                            </p>
                        </div>
                    </div>
                </template>
            </div>


        </section>
    </div>
</template>

<script>
import {dateJapanese} from "../../../filters";
import common from "../../../mixins/common";
import Menu from "../../../mixins/menu";
import Multiselect from 'vue-multiselect';
import VueDropzone from 'vue2-dropzone'

export default {
    name: "Registration",
    mixins: [common, Menu],
    components: {
        Multiselect,
        VueDropzone
    },
    data() {
        return {
            currentStep: 1,
            submitAvailable: true,

            customers: {
                email: "◯◯◯◯◯◯@xxxix.jp",
                first_name: "山田",
                last_name: "太郎",
                kana_first_name: "ヤマダ",
                kana_last_name: "タロウ",
                genders: "男性",
                birthday: "1980年1月31日",
                postal_code: "100-0001",
                prefectures: "東京都",
                locality: "港区北青",
                street: "山1-1-1ダイハンビル",
                building: "101",
                phone: "03-0000-11111",
            },
            profile: {
                professions: '',
                company: '',
                income: '',
                investment_purposes: '',
                investment_methods: '',
                investment_experiences: '',
                investment_types: '',
                id_type: '',
                bank_name: '',
                bank_branch_name: '',
                bank_branch_number: '',
                account_type: '',
                account_number: '',
                account_name: '',

            },
            dropzoneOptions: {
                url: 'https://httpbin.org/post',
                dictDefaultMessage: 'タップして表面を読み取る',
                thumbnailWidth: 390, // px
                thumbnailHeight: 400,
                addRemoveLinks: true,
                dictRemoveFile: '<i class="far fa-times-circle fa-2x"></i>',
                acceptedFiles: ".jpeg,.jpg,.png,.gif,.JPEG,.JPG,.PNG,.GIF",
                dictCancelUpload: '',
                dictCancelUploadConfirmation: '',
                dictRemoveFileConfirmation: '',
                previewTemplate: '<div class="dz-preview dz-file-preview">' +
                        '<div class="dz-image"><img data-dz-thumbnail alt=""/></div>' +
                        '<div class="dz-details">' +
                        '<div class="dz-size"><span data-dz-size></span></div>' +
                        '<div class="dz-filename"><span data-dz-name></span></div>' +
                        '<div class="dz-progress">' +
                        '    <span class="dz-upload" data-dz-uploadprogress></span>' +
                        '  </div>' +
                        '</div>'

            }
        }
    },
    computed: {
        address() {
            return this.customers.postal_code + '　' + this.customers.prefectures + this.customers.locality + this.customers.street + '　' + this.customers.building;
        }
    },
    methods: {
        momentFormat(date) {
            return dateJapanese(date).format('YYYY/MM/DD');
        },
        prevStep() {
            // this.vuelidate.$reset()
            this.submitAvailable = true
            this.currentStep--;
        },
        nextStep() {
            this.currentStep++
        },
        gotoStep(step) {
            this.currentStep = step
        },

    },
    mounted() {
        // this.styleSteps();
    }
}
</script>

<style lang="scss">
.multiselect {
    .multiselect__select {
        width: 20px;
        height: 20px;
        right: 5px;
        top: 9px;
        background: url('../../../assets/images/svg/i-arrow-down.svg') no-repeat !important;
    }
}

.list-inline {
    list-style: inherit;
}

.vue-dropzone {
    max-width: 400px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    align-content: space-around;
    flex-wrap: wrap;
    font-weight: 500;
    cursor: pointer;
    color: #73886BFF;
    border: 1px dashed #828282 !important;
    border-radius: 8px;
    background: #F2F2F2 !important;

    .dz-preview {
        margin: 0 !important;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        overflow: hidden;
        background-color: #828282;
        background-size: cover;
        position: relative;

        &:hover {
            opacity: 1;

            .dz-remove {
                width: 40px;
                height: 40px;
                border: none !important;
                top: 0;
                right: 0;
            }

            .dz-details {
                opacity: 1;
                background: transparent !important;

            }
        }
    }

    .dz-message {
        span {
            position: relative;
            top: 30px;

            &:before {
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                top: -70px;
                margin: auto;
                background: url('../../../assets/images/svg/i_surface.svg') no-repeat !important;
                width: 59px;
                height: 60px;
            }
        }
    }
}

</style>