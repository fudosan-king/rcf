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
                                    <h3>{{ $t('frontend.contact.notes') }}</h3>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <label>{{ $t('frontend.contact.fields.name.label') }}
                                                    <span class="i-required">{{ $t('frontend.require') }}</span>
                                                </label>
                                            </div>
                                            <div class="col-md-8">
                                                <input name="name_customer" class="form-control required" type="text"
                                                       :placeholder="$t('frontend.contact.fields.name.placeholder')">
                                            </div>
                                        </div>
                                    </div>
                                    <div class=" form-group">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <label>{{ $t('frontend.contact.fields.post_code.label') }} <span
                                                        class="i-required">{{ $t('frontend.require') }}</span></label>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="row align-items-center">
                                                    <div class="col-12 col-lg-6">
                                                        <input type="text" class="form-control postal-code"
                                                               name="postal" placeholder="例：1234567" maxlength="7">
                                                    </div>
                                                    <div class="col-12 col-lg-6">
                                                        <a class=" text-decoration-none" href="javascript:void(0)"><img
                                                                src="https://www.rimawaru.com/wp-content/themes/rimawaru/assets/images/svg/i-arrow-r.svg"
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
                                                <label>{{ $t('frontend.contact.fields.prefectures.label') }} <span
                                                        class="i-required">{{ $t('frontend.require') }}</span>
                                                </label>
                                            </div>
                                            <div class="col-md-8">
                                                <Dropdown :options="this.prefectures"
                                                          :disabled="false"
                                                          name="prefectures"
                                                          :maxItem="20"
                                                          :placeholder="prefecturePlaceholder">
                                                </Dropdown>

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
                                                <input name="city" class="form-control required" type="text" value=""
                                                       placeholder="">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <label>{{ $t('frontend.contact.fields.building_name.label') }}</label>
                                            </div>
                                            <div class="col-md-8">
                                                <input class="form-control" name="number_room" type="text" value=""
                                                       placeholder="">
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
                                                       type="text" value=""
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
                                                       value="" placeholder="例：◯◯◯◯◯◯@xxxxxxxx.jp">
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
                                                           target="_blank">プライバシーポリシー
                                                        </a> を必ずご一読頂き、同意のうえお問い合わせください。
                                                    </p>

                                                    <div class="request-doc_custom-checkbox agree-privacy">
                                                        <label class="container">
                                                            <input class="required" id="ck_agree" type="checkbox">
                                                            <span class="checkmark"></span>
                                                            {{ $t('frontend.contact.agree') }}
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-6 m-auto">
                                                <button type="button"
                                                        class="btn btn-form-action bg-cl-green text-white js-submit-cfr"
                                                        id=""><span>{{ $t('frontend.buttons.agree') }}</span></button>
                                            </div>
                                        </div>
                                    </div>
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
import common from "../../mixins/common";

export default {
    name: "Contact",
    mixins: [common],
    data() {
        return{
            contact: {
                name: '',
                email: '',
                inquiry: '',
                agree: false,
            }
        }
    },
}
</script>

<style scoped>

</style>