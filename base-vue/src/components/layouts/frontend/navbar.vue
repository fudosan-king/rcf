<template>
    <header class="menu-animation-scroll">
        <div class="nav_menu">
            <nav class="navbar navbar-expand-lg">
                <router-link :to="{name: 'home'}">
                    <img src="../../../assets/images/svg/logo.svg" alt="" class="logo-white img-fluid" width="155">
                </router-link>
                <div class="collapse navbar-collapse nav_menu-list">
                    <ul>
                        <li>
                            <a @click="registerUser" data-bs-toggle="modal">新規会員登録</a>
                        </li>
                    </ul>
                    <ul>
                        <template v-for="(menu, index) in menus">
                            <li :key="'menu-' + index">
                                <a @click="goTo(menu.router)">{{ menu.title }}</a>
                                <ul v-if="(menu.type === 'sub') && menu.children.length">
                                    <template v-for="(menuItem, i) in menu.children">
                                        <li :key="'menuItem-' + i">
                                            <a @click="goTo(menuItem)">{{ menuItem.title }}</a>
                                        </li>
                                    </template>
                                </ul>
                            </li>
                        </template>
                    </ul>
                </div>
                <div class="nav_menu-action">
                    <button class="navbar-toggler menu-spin js-menu" type="button">
                        <span class="nav-toggler-line"></span>
                    </button>
                </div>
            </nav>
        </div>
        <div class="bg-overflow"></div>
        <template>
            <div class="modal" id="register-user" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Hi Hi Hi</h5>
                            <button type="button" class="btn-close" @click="closeModal('register-user')"></button>
                        </div>
                        <div class="modal-body" v-click-out="() => { closeModal('register-user')}">
                            <div class="mb-3">
                                <label class="col-form-label">{{ $t('frontend.home.email') }}</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="mb-3">
                                <label class="col-form-label">{{ $t('frontend.home.password') }}</label>
                                <input class="form-control">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <router-link :to="{name: 'registerUser'}" class="btn close-modal btn-primary btn-save">Next
                            </router-link>
                            <button class="btn close-modal btn-back btn-secondary"
                                    @click="closeModal('register-user')">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </header>

</template>

<script>
import Menu from '../../../mixins/menu.js'

export default {
    name: "navbar",
    mixins: [Menu],
    data() {
        return {
            isAuthenticated: false,
            isRegister: false,
        }
    },
    methods: {
        goTo(link) {
            if (this.$route.name === link.name) {
                this.$emit('refresh')
            } else {
                this.$router.push(link, () => {
                })
            }
        },
        registerUser() {
            this.isRegister = true
            this.toggleModal('register-user')
            setTimeout(() => {
                this.modalOpened = true
            })
        },
        toggleModal(id) {
            this.$nextTick(() => {
                if (this.$el.querySelector(`#${id}`)) {
                    this.$el.querySelector(`#${id}`).classList.toggle('show');
                    setTimeout(()=>{
                        this.$el.querySelector(`#${id}`).classList.toggle('fade');    
                    },200)
                }
            })
        },
        closeModal(id) {
            if (this.modalOpened) {
                this.$nextTick(() => {
                    if (this.$el.querySelector(`#${id}`)) {
                        this.$el.querySelector(`#${id}`).classList.toggle('fade');  
                        setTimeout(()=>{
                            this.$el.querySelector(`#${id}`).classList.remove('show');      
                        },200)
                    }
                })
                setTimeout(() => {
                    this.modalOpened = false
                })
            }
        },
    }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/frontend/nav';

.nav_menu {
    .navbar-expand-lg {
        ul {
            ul {
                li {
                    &:before {
                        background: url('../../../assets/images/svg/i_left.svg') no-repeat;
                    }
                }
            }
        }
    }
}

.show {
    display: block !important;
}
</style>