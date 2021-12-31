<template>
    <div class="modal modal-fx-fadeInScale">
        <div class="modal-background"></div>
        <div class="modal-content"
             :style="{width: width}">
            <div class="modal-box box has-padding-lg br--10">
                <div v-if="customIcon"
                     class="box-icon is-custom"
                     v-html="customIcon"></div>
                <p v-if="title" class="box-title has-margin-bottom-lg is-size-5">{{ title }} </p>
                <div class="has-text-centered box-sub-title has-margin-left-lg has-margin-right-lg content font-size-7 "
                     v-html="content"/>
                <div class="columns col-group-btn-dialog is-centered d-flex modal-footer-button">
                    <div class="column is-half" v-if="okText">
                        <button type="button"
                                ref="modalConfirmButton"
                                class="button btn-save p-0 is-fullwidth color__white background__pink w--100 border-width-0"
                                style="width: 100% !important;"
                                @click="okClick">
                            {{ okText }}
                        </button>
                    </div>
                    <div class="column is-half" v-if="cancelText">
                        <button type="button"
                                class="button btn-back background__grey w--100"
                                style="width: 100% !important;"
                                @click="cancelClick">
                            {{ cancelText }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'popup',
    props: {
        type: {
            type: String,
            default: 'info',
        },
        size: {
            type: String,
            default: 'sm',
        },
        title: {
            type: String,
            default: '',
        },
        iconClass: {
            type: String,
            default: 'info-circle',
        },
        customIcon: {
            type: String,
            default: '',
        },
        content: {
            type: String,
            default: '',
        },
        width: {
            type: String,
            default: '',
        },
        okText: {
            type: String,
            default: 'OK',
        },
        cancelText: {
            type: String,
            default: 'Cancel',
        },
        onOk: {
            type: Function,
            default: () => {
            },
        },
        onCancel: {
            type: Function,
            default: () => {
            },
        },
        clickOut: {
            type: Boolean,
            default: true
        },
        onClickOut: {
            type: Function,
            default: () => {
            },
        }
    },
    data: () => ({
        timeShow: null,
    }),
    mounted() {
        this.$nextTick(() => {
            setTimeout(() => {
                this.$el.classList.add('is-active');
                this.freeze();
                
                if (this.clickOut) {
                    document.body.addEventListener('click', this.bodyClickEv)
                    document.body.addEventListener('keyup', this.bodyKeyEv)
                }
                this.$refs.modalConfirmButton.focus()
            }, 60);
        });
    },
    methods: {
        clickOutDialog() {
            this.closeDialog()
        },
        cancelClick() {
            this.onCancel(this);
            this.closeDialog()
        },
        outClick() {
            this.onClickOut(this)
        },
        closeDialog() {
            this.$el.classList.remove('is-active');
            this.$nextTick(() => {
                setTimeout(() => {
                    this.$destroy();
                    this.unFreeze();
                    const parent = this.$el.parentNode;
                    if (parent)
                        parent.removeChild(this.$el);
                }, 350);
            });
        },
        okClick() {
            this.onOk(this);
        },
        freeze() {
            document.getElementsByTagName('html')[0].style.overflow = 'hidden';
            document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
        },
        unFreeze() {
            document.getElementsByTagName('html')[0].style.overflow = '';
            document.getElementsByTagName('body')[0].style.overflowY = '';
        },
        bodyClickEv($ev) {
            const dialog = this.$el.querySelector('.modal-box')
            if (dialog && !dialog.contains($ev.target)) {
                this.clickOutDialog()
                this.outClick()
            }
        },
        bodyKeyEv($ev) {
            if ($ev.key === 'Escape') {
                this.clickOutDialog()
                this.outClick()
            }
        },
        removeBodyEvent() {
            document.body.removeEventListener('click', this.bodyClickEv)
            document.body.removeEventListener('keyup', this.bodyKeyEv)
        }
    },
    beforeDestroy() {
        this.removeBodyEvent()
    }
};
</script>

<style lang="scss" scoped>
.box {
    .box-title {
        text-align: center;
        color: #373a3c;
        margin: 30px;
    }
    
    .has-icon-circle {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        margin: 0 auto;
        border-width: 2px;
        border-style: solid;
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
        font-size: 25px;
    }
    
    .modal-footer-button {
        margin: 20px;
    }
    
    .content {
        white-space: normal;
        word-wrap: break-word;
    }
    
    button {
        &:hover {
            box-shadow: 0 0 5px #61C5FA;
        }
    }
}
</style>