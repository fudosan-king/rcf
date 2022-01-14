<template>
    <div>
        <section class="section_template">
            <div class="container" id="registration">
                <div class="row">
                    <div class="col-12 col-lg-12">
                        <ul class="steps">
                            <li class="active">
                                <a href="registration.php">
                                    <span>1</span>
                                    <span>投資家情報登録</span>
                                </a>
                            </li>
                            <li>
                                <a href="identity_verification.php">
                                    <span>2</span>
                                    <span>本人確認書類登録</span>
                                </a>
                            </li>
                            <li>
                                <a href="refund.php">
                                    <span>3</span>
                                    <span>払戻し口座情報登録</span>
                                </a>
                            </li>
                            <li>
                                <a href="confirmation.php">
                                    <span>4</span>
                                    <span>確認画面</span>
                                </a>
                            </li>
                            <li>
                                <a href="completed.php">
                                    <span>5</span>
                                    <span>申請完了</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <h2 class="title">投資家情報登録</h2>
                <h3 class="title_sub">出資者情報をご入力ください。</h3>
                <div class="card">
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
                                            customers.first_name_kana + " " + customers.last_name_kana
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
                                    <span class="view_address"> {{
                                            customers.postal_code + '  ' + customers.prefectures + customers.locality + customers.street + '  ' + customers.building
                                        }}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>


        </section>
    </div>
</template>

<script>
import {dateJapanese} from "../../../filters";

export default {
    name: "Registration",
    data() {
        return {
            customers: {
                email: "◯◯◯◯◯◯@xxxxxxxx.jp",
                first_name: "山田",
                last_name: "太郎",
                first_name_kana: "ヤマダ",
                last_name_kana: "タロウ",
                genders: "男性",
                birthday: "1980年1月31日",
                postal_code: "100-0001",
                prefectures: "東京都",
                locality: "港区北青",
                street: "山1-1-1ダイハンビル",
                building: "101",
                phone: "03-0000-11111",
            },
        }
    },
    methods: {
        momentFormat(date) {
            return dateJapanese(date).format('YYYY/MM/DD');
        },
    },
}
</script>

<style scoped>

</style>