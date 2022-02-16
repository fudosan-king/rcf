<template>
    <div class="modal fade">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content tx-size-sm">
                <div class="modal-body text-center pxy--20 px--20">
                    <button aria-label="Close" class="close" data-dismiss="modal" type="button"><span
                            aria-hidden="true">&times;</span></button>
                    <img src="../assets/svgs/icons/ic_close.svg" alt=""
                         class="img-fluid width--85 margin__top-20 margin__bottom-20">
                    <h4 class="text-danger margin__bottom-20">{{ title }}</h4>
                    <p class="margin__bottom-20 mx--20" v-html="content"></p>
                    <div class="row">
                        <div class="col-md-6" v-if="okText">
                            <button type="button"
                                    ref="modalConfirmButton"
                                    class="btn btn-save color__white background__pink w--100"
                                    @click="okClick">
                                {{ okText }}
                            </button>
                        </div>
                        <div class="col-md-6">
                            <button type="button"
                                    class="btn btn-back background__grey w--100 border--1"
                                    @click="cancelClick">
                                {{ cancelText }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-backdrop"></div>
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
                document.body.classList.add('modal-open');
                this.$el.classList.add('show');
                this.freeze();
                if (this.clickOut) {
                    document.body.addEventListener('click', this.bodyClickEv)
                    document.body.addEventListener('keyup', this.bodyKeyEv)
                }
                // this.$refs.modalConfirmButton.focus()
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
            this.$el.classList.remove('show');
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
            const dialog = this.$el.querySelector('.modal-body');
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

<style lang="scss">
.modal-open {
    overflow: hidden;

    .show {
        display: block;

        .modal-dialog {
            transform: none;
        }
    }

    .modal-content {
        z-index: 99992;
    }

    .modal-backdrop {
        opacity: 0.7;
    }
}

.modal-dialog-centered:before {
    content: "";
    display: block;
    height: calc(100vh - 1rem);
}

@media (min-width: 576px) {
    .modal-dialog-centered:before {
        height: calc(100vh - 3.5rem);

    }

}

</style>