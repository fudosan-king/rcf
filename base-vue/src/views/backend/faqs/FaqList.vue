<template>
    <div>
        <div class="breadcrumb-header justify-content-between">
            <div class="my-auto">
                <div class="d-flex">
                    <router-link :to="{name: 'UserAdmin'}" class="content-title mb-0 my-auto tx-21 font-weight-bold">
                        {{ $t('pages.users.manage') }}
                    </router-link>
                    <span class="text-muted mt-1 tx-13 ml-2 mb-0">/ {{ $t('pages.users.list') }}</span>
                </div>
            </div>
        </div>
        <div class="row row-sm">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 grid-margin">
                <div class="card">
                    <div class="card-header pb-0 border-0 pt-3">
                        <div class="d-flex my-auto right-content">
                            <button type="button" class="btn btn-success  m__right--2 btn-b">
                                <i class="fas fa-plus  m__right--1"></i> Add User
                            </button>
                            <!--                            <button type="button" class="btn btn-danger mr-2">-->
                            <!--                                <i class="fas fa-trash  m__right&#45;&#45;1"></i> Delete All User-->
                            <!--                            </button>-->
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-10">
                                <h3 class="fw-semibold tx-18">How Can I contact?</h3>
                            </div>
                            <div class="col-lg-2 text-end">
                                <button @click="deleteQuestion(e)"
                                        class="btn action-danger action">
                                    <i class="fas fa-trash"></i>
                                </button>
                                <button @click="updateQuestion(e)"
                                        class="btn action action-success"
                                >
                                    <i class="fas fa-edit"></i>
                                </button>
                            </div>
                        </div>
                        <p class="text-muted mb-0 tx-13">
                            I must explain to you how all this mistaken idea of denouncing
                            pleasure and praising pain was born and I will give you a complete account of the system,
                            and expound the actual teachings of the great explorer of the truth, the master-builder of
                            human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is
                            pleasure, but because those who do not know how to pursue pleasure rationally encounter
                            consequences
                        </p>
                    </div>
                </div>
            </div><!-- COL END -->
        </div>
    </div>
</template>

<script>
import {ACTION_SET_ACTIVE_SIDEBAR, ACTION_SET_PAGE_TITLE,} from "@/stores/common/actions";

export default {
    name: "FaqList",
    created() {
        this.$store.dispatch(ACTION_SET_ACTIVE_SIDEBAR, 'faqs');
        this.$store.dispatch(ACTION_SET_PAGE_TITLE, 'FAQs');
    },
    methods: {
        deleteQuestion(id) {
            this.$store.dispatch('deleteQuestion', id);
        },
        updateQuestion(id) {
            this.$store.dispatch('updateQuestion', id);
        },
    },

}
</script>

<style scoped>

</style>