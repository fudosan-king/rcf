<template>
    <footer>
        <div class="footer_top">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-6 col-md-6">
                        <div class="d-none d-lg-block">
                            <h3 class="font-size-10">運営会社 株式会社プロスタイル</h3>
                            <p>〒107-0061<br>
                                東京都港区北⻘⼭3-6-23<br>
                                TEL <a href="tel:03-6897-8580">03-6897-8580</a><br>
                                代表取締役社長 親松 聡<br>
                                業務管理者 飯塚毅<br>
                                宅地建物取引業者免許 東京都知事(1)第100343号<br>
                                不動産特定共同事業許可番号 東京都知事 第139号（第1号及び第2号）</p>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 col-md-6">
                        <div class="row">
                            <div class="col-12 col-lg-8">
                                <ul class="d-none d-lg-block">
                                    <template v-for="(menu, index) in menuRight">
                                        <li :key="'footer-' + index"><a @click="goTo(menu.router)">{{ menu.title }}</a>
                                        </li>
                                    </template>
                                </ul>
                            </div>
                            <div class="col-12 col-lg-4">
                                <ul class="d-none d-lg-block">
                                    <template v-for="(menu, index) in menuLeft">
                                        <li :key="'footer-' + index"><a @click="goTo(menu.router)">{{ menu.title }}</a>
                                        </li>
                                    </template>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <ul class="menu_footer d-block d-lg-none">
                            <li><a href="">運営会社について</a></li>
                            <li><a href="">利用規約</a></li>
                            <li><a href="">反社会的勢力排除に関する基本方針</a></li>
                            <li><a href="">プライバシーポリシー</a></li>
                            <li><a href="">ソーシャルメディアポリシー</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer_bottom">
            <ul>
                <li><a href="#"><img src="../../../assets/images/svg/i_fb.svg" alt="" class="img-fluid" width="11"></a>
                </li>
                <li><a href="#"><img src="../../../assets/images/svg/i_ins.svg" alt="" class="img-fluid" width="20"></a>
                </li>
                <li><a href="#"><img src="../../../assets/images/svg/i_youtube.svg" alt="" class="img-fluid"
                                     width="20"></a></li>
            </ul>
            <p class="mb-0">Copyright ©
                <router-link :to="{name: 'home'}">PROSTYLE INC.</router-link>
                All Rights Reserved.
            </p>
        </div>
    </footer>
</template>

<script>
import Menu from '../../../mixins/menu.js'

export default {
    name: "Footer",
    mixins: [Menu],
    methods: {
        goTo(link) {
            if (this.$route.name === link.name) {
                this.$emit('refresh')
            } else {
                this.$router.push(link, () => {
                })
            }
        },
    },
    data() {
        return {
            isActiveMobile: false,
            isActiveDesktop: false
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/frontend/main-page';
footer {
    .footer_top {
        
        ul {
            li {
                font-size: 0.875em;
    
                &:before {
                    background: url('../../../assets/images/svg/i_right.svg') no-repeat;
                }
            }
        }
    }
}

@media (min-width: 1200px) {
    .container {
        max-width: 1268px;
    }
}
</style>