<template>
    <div>
        <div class="breadcrumb-header justify-content-between">
            <div class="left-content">
                <div>
                    <h2 class="main-content-title tx-24 mb-0">Hi, welcome back!</h2>
                    <p class="mg-b-0">Sales monitoring dashboard template.</p>
                </div>
            </div>
        </div>
        <div class="row row-sm">
            <div class="col-xl-3 col-lg-6 col-md-6 col-xm-12">
                <div class="card overflow-hidden sales-card bg-primary-gradient">
                    <div class="p__left--2 pt-3 p__right--2 pb-2 pt-0">
                        <div class="">
                            <h6 class="mb-3 tx-12 text-white">TODAY ORDERS</h6>
                        </div>
                        <div class="pb-0 mt-0">
                            <div class="d-flex">
                                <div class="">
                                    <h4 class="tx-20 fw-bold mb-1 text-white">$5,74.12</h4>
                                    <p class="mb-0 tx-12 text-white op-7">Compared to last week</p>
                                </div>
                                <span class="float-end my-auto ms-auto">
												<i class="fas fa-arrow-circle-up text-white"></i>
												<span class="text-white op-7"> +427</span>
											</span>
                            </div>
                        </div>
                    </div>
                    <div id="compositeline" class="pt-1"></div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-xm-12">
                <div class="card overflow-hidden sales-card bg-danger-gradient">
                    <div class="p__left--2 pt-3 p__right--2 pb-2 pt-0">
                        <div class="">
                            <h6 class="mb-3 tx-12 text-white">TODAY EARNINGS</h6>
                        </div>
                        <div class="pb-0 mt-0">
                            <div class="d-flex">
                                <div class="">
                                    <h4 class="tx-20 fw-bold mb-1 text-white">$1,230.17</h4>
                                    <p class="mb-0 tx-12 text-white op-7">Compared to last week</p>
                                </div>
                                <span class="float-end my-auto ms-auto">
												<i class="fas fa-arrow-circle-down text-white"></i>
												<span class="text-white op-7"> -23.09%</span>
											</span>
                            </div>
                        </div>
                    </div>
                    <span id="compositeline2" class="pt-1"></span>
                </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-xm-12">
                <div class="card overflow-hidden sales-card bg-success-gradient">
                    <div class="p__left--2 pt-3 p__right--2 pb-2 pt-0">
                        <div class="">
                            <h6 class="mb-3 tx-12 text-white">TOTAL EARNINGS</h6>
                        </div>
                        <div class="pb-0 mt-0">
                            <div class="d-flex">
                                <div class="">
                                    <h4 class="tx-20 fw-bold mb-1 text-white">$7,125.70</h4>
                                    <p class="mb-0 tx-12 text-white op-7">Compared to last week</p>
                                </div>
                                <span class="float-end my-auto ms-auto">
												<i class="fas fa-arrow-circle-up text-white"></i>
												<span class="text-white op-7"> 52.09%</span>
											</span>
                            </div>
                        </div>
                    </div>
                    <span id="compositeline3" class="pt-1"></span>
                </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-xm-12">
                <div class="card overflow-hidden sales-card bg-warning-gradient">
                    <div class="p__left--2 pt-3 p__right--2 pb-2 pt-0">
                        <div class="">
                            <h6 class="mb-3 tx-12 text-white">PRODUCT SOLD</h6>
                        </div>
                        <div class="pb-0 mt-0">
                            <div class="d-flex">
                                <div class="">
                                    <h4 class="tx-20 fw-bold mb-1 text-white">$4,820.50</h4>
                                    <p class="mb-0 tx-12 text-white op-7">Compared to last week</p>
                                </div>
                                <span class="float-end my-auto ms-auto">
												<i class="fas fa-arrow-circle-down text-white"></i>
												<span class="text-white op-7"> -152.3</span>
											</span>
                            </div>
                        </div>
                    </div>
                    <span id="compositeline4" class="pt-1"></span>
                </div>
            </div>
        </div>
        <div class="row row-sm">
            <div class="col-md-12 col-lg-12 col-xl-12">
                <div class="card">
                    <div class="card-header bg-transparent pd-b-0 pd-t-20 bd-b-0">
                        <div class="d-flex justify-content-between">
                            <h4 class="card-title mb-0">Order status</h4>
                            <i class="mdi mdi-dots-horizontal text-gray"></i>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="">
                            <bar-chart :height="249"></bar-chart>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="row row-sm row-deck">
            <div class="col-md-12 col-lg-12 col-xl-12">
                <div class="card card-table-two">
                    <div class="d-flex justify-content-between">
                        <h4 class="card-title mb-1">Your Most Recent Earnings</h4>
                        <i class="mdi mdi-dots-horizontal text-gray"></i>
                    </div>
                    <div class="table-responsive country-table mt-2">
                        <table class="table table-striped table-bordered mb-0 text-sm-nowrap text-lg-nowrap text-xl-nowrap">
                            <thead>
                            <tr>
                                <th class="wd-lg-25p">Date</th>
                                <th class="wd-lg-25p tx-right">Sales Count</th>
                                <th class="wd-lg-25p tx-right">Earnings</th>
                                <th class="wd-lg-25p tx-right">Tax Witheld</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(e, i) in dataTables" :key="'earning' + i">
                                <td class="date">{{ momentFormat(e.updated_at) }}</td>
                                <td class="sale-count tx-right">{{ e.sale_count }}</td>
                                <td class="earnings tx-right">{{ formatCurrency(e.earnings) }}</td>
                                <td class="tax-witheld tx-right "
                                    :class="( e.tax_witheld >0 ) ? ( 'text-success' ) : ( 'text-danger' )"
                                >{{ formatCurrency(e.tax_witheld) }}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {ACTION_SET_ACTIVE_SIDEBAR, ACTION_SET_PAGE_TITLE,} from "@/stores/common/actions";

import BarChart from "./chart/BarChart";
import {jpyFormat, dateJapanese} from "@/filters";

export default {
    name: "Dashboard",
    components: {
        BarChart,
    },
    data() {
        return {
            pageTitle: 'Dashboard',
            activeSidebar: 'dashboard',
            dataTables: [
                {
                    "id": 5,
                    "sale_count": 34,
                    "earnings": 658.20,
                    "tax_witheld": 45.10,
                    "created_at": "2021-12-06 07:48:38",
                    "updated_at": "2021-12-06 07:48:38"
                },
                {
                    "id": 4,
                    "sale_count": 234,
                    "earnings": 453.25,
                    "tax_witheld": 156.20,
                    "created_at": "2021-12-06 07:48:38",
                    "updated_at": "2021-12-06 07:48:38"
                },
                {
                    "id": 3,
                    "sale_count": 36,
                    "earnings": 3424,
                    "tax_witheld": 13.45,
                    "created_at": "2021-12-06 07:48:38",
                    "updated_at": "2021-12-06 07:48:38"
                },
                {
                    "id": 2,
                    "sale_count": 54,
                    "earnings": 12341,
                    "tax_witheld": -123.45,
                    "created_at": "2021-12-06 07:48:38",
                    "updated_at": "2021-12-06 07:48:38"
                },
                {
                    "id": 1,
                    "sale_count": 76,
                    "earnings": 42341,
                    "tax_witheld": 45.10,
                    "created_at": "2021-12-06 07:48:38",
                    "updated_at": "2021-12-09 04:51:48"
                }
            ],

        }
    },
    methods: {
        momentFormat(date, format = 'YYYY年MM月DD日') {
            return dateJapanese(date, format)
        },
        formatCurrency(value) {
            return jpyFormat(value)
        },
    },

    created() {
        this.$store.dispatch(ACTION_SET_ACTIVE_SIDEBAR, "dashboard");
        this.$store.dispatch(ACTION_SET_PAGE_TITLE, "Dashboard");
    },
}
</script>

<style scoped>

</style>