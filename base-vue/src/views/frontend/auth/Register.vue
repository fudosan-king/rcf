<template>
    <div>
        <section class="section_template">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-12">
                        <h2 class="title">出資者基本情報登録</h2>
                        <h3 class="title_sub">フォームに必要事項をご入力ください。</h3>
                        <div class="box_content">
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-12 col-lg-3">
                                        <label>メールアドレス</label>
                                    </div>
                                    <div class="col-12 col-lg-9">
                                        <input type="text" class="form-control" placeholder="◯◯◯◯◯◯@xxxxxxxx.jp"
                                               v-model="customers.email">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-12 col-lg-3">
                                        <label>本名</label>
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
                                        <label>本名（カナ）</label>
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
                                        <label>性別</label>
                                    </div>
                                    <div class="col-12 col-lg-9">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="genders"
                                                   :value="1"
                                                   v-model="customers.genders"
                                            >
                                            <label class="form-check-label">男性</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="genders"
                                                   :value="0"
                                                   v-model="customers.genders">
                                            <label class="form-check-label">女性</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-12 col-lg-3">
                                        <label>生年月日</label>
                                    </div>
                                    <div class="col-12 col-lg-9">
                                        <input type="text" class="form-control" placeholder="数字8桁で入力（例：19800511）"
                                               v-model="customers.birthday">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-12 col-lg-3">
                                        <label>生年月日</label>
                                    </div>
                                    <div class="col-12 col-lg-9">
                                        <div class="row">
                                            <div class="col-7 col-lg-6 align-self-center">
                                                <input type="text" class="form-control" placeholder="1234567">
                                            </div>
                                            <div class="col-5 col-lg-6 align-self-center">
                                                <a class="zipcode_auto font-weight-bold" href="#"><img
                                                        src="../../../assets/images/svg/arrow_right.svg" alt=""
                                                        class="img-fluid mr-2" width="20"> 郵便番号から住所を自動的入力</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-12 col-lg-3">
                                        <label>都道府県</label>
                                    </div>
                                    <div class="col-12 col-lg-9">
                                        <Dropdown :options="this.prefectures"
                                                  :disabled="false"
                                                  name="prefectures"
                                                  :maxItem="20"
                                                  v-on:selected="validateSelection"
                                                  :placeholder="prefecturePlaceholder">
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-12 col-lg-3">
                                        <label>市区町村</label>
                                    </div>
                                    <div class="col-12 col-lg-9">
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-12 col-lg-3">
                                        <label>番地</label>
                                    </div>
                                    <div class="col-12 col-lg-9">
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-12 col-lg-3">
                                        <label>建物名・号室</label>
                                    </div>
                                    <div class="col-12 col-lg-9">
                                        <input type="text" class="form-control" placeholder="00000000000">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-12 col-lg-3">
                                        <label>電話番号</label>
                                    </div>
                                    <div class="col-12 col-lg-9">
                                        <input type="text" class="form-control" placeholder="◯◯◯◯◯◯@xxxxxxxx.jp">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-12 col-lg-3 align-self-center">
                                        <label>確認書面</label>
                                    </div>
                                    <div class="col-12 col-lg-9 align-self-center">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="customCheck1">
                                            <label class="form-check-label" for="customCheck1">
                                                電子交付に関する同意
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="customCheck2">
                                            <label class="form-check-label" for="customCheck2">
                                                反社勢力でない事の表明・確約に関する同意
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="customCheck3">
                                            <label class="form-check-label" for="customCheck3">
                                                個人情報の取扱いに関する同意
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-12 col-lg-6 m-auto text-center">
                                        <button type="submit" class="btn btn_confirm">確認画面へ</button>
                                    </div>
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
import common from "../../../mixins/common";
import {email, maxLength, minLength, required} from "vuelidate/lib/validators";
import {katakana} from "../../../helpers/utils";

export default {
    name: "Register",
    mixins: [common],
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
                city: "",
                area: "",
                building: "",
                phone: "",
                inquiry: "",
                first_name: "",
                last_name: "",
                kata_first_name: "",
                kata_last_name: "",
            }
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
            this.selected = selection;
        },
    }
}
</script>

<style scoped>

</style>