<template>
    <div>
        <div class="breadcrumb-header justify-content-between">
            <div class="my-auto">
                <div class="d-flex">
                    <h4 class="content-title mb-0 my-auto">Advanced ui</h4><span
                        class="text-muted mt-1 tx-13 ml-2 mb-0">/ Userlist</span>
                </div>
            </div>
        </div>
        <div class="row row-sm">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 grid-margin">
                <div class="card">
                    <div class="card-header pb-0">
                        <div class="d-flex justify-content-between">
                            <h4 class="card-title mg-b-0">USERS TABLE</h4>
                            <i class="mdi mdi-dots-horizontal text-gray"></i>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive border-top userlist-table">
                            <table class="table card-table table-striped table-vcenter text-nowrap mb-0">
                                <thead>
                                <tr>
                                    <th class="input-title text-center p--12 col-checkbox wd-lg-5">
                                        <label class="checkbox">
                                            <input @change="toggleCheckAll()"
                                                    type="checkbox"
                                                    class="is-radiusless"
                                                    v-model="checkAll"
                                            />
                                        </label>
                                    </th>
                                    <th class="wd-lg-8 text-center"><span>User</span></th>
                                    <th class="wd-lg-20 text-center"><span>Created</span></th>
                                    <th class="wd-lg-20 text-center"><span>Status</span></th>
                                    <th class="wd-lg-20 text-center"><span>Email</span></th>
                                    <th class="wd-lg-10 text-center">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(e, i) in customers" :key="'earning' + i">
                                    <td class="text-center">
                                        <label class="checkbox">
                                            <input @change="checkItem(e)" type="checkbox" class="is-radiusless"
                                                   v-model="e.checked">
                                        </label>
                                    </td>
                                    <td class="name">{{ e.name }}</td>
                                    <td class="created_at tx-right">{{ momentFormat(e.created_at) }}</td>
                                    <td class="status text-center"
                                        :class="e.status === 1 ? 'text-success' : 'text-danger'">{{ status(e.status) }}
                                    </td>
                                    <td class="email">{{ e.email }}</td>
                                    <td class="action text-center">
                                        <button @click="updateCustomer(e.id)"
                                                class="btn btn-sm btn-primary"
                                        >
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button @click="deleteCustomer(e.id)"
                                                class="btn btn-sm btn-danger">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <pagination
                                :current="pagination.currentPage"
                                :per-page="pagination.perPage"
                                :total="pagination.total"
                                @change="changePage($event)"
                        >
                        </pagination>
                    </div>
                </div>
            </div><!-- COL END -->
        </div>
    </div>
</template>

<script>
import {ACTION_SET_ACTIVE_SIDEBAR, ACTION_SET_PAGE_TITLE,} from "../../../stores/common/actions";
import {momentFormat} from "../../../filters";
// import findIndex from "lodash/findIndex";

export default {
    name: "CustomerList",
    data() {
        return {
            pageTitle: "",
            activeSidebar: "",
            customers: [
                {
                    "id": 5,
                    "role": {
                        "id": 1,
                        "name": "Super Admin",
                        "code": "1",
                        "description": "",
                        "deleted_at": null,
                        "created_at": "2021-12-06T07:48:38.000000Z",
                        "updated_at": "2021-12-06T07:48:38.000000Z"
                    },
                    "name": "Mrs. Viola Halvorson",
                    "full_name": "Rozella",
                    "avatar": null,
                    "email": "user4@gmail.com",
                    "phone": "0123456789",
                    "status": 1,
                    "created_at": "2021-12-06 07:48:38",
                    "updated_at": "2021-12-06 07:48:38"
                },
                {
                    "id": 4,
                    "role": {
                        "id": 1,
                        "name": "Super Admin",
                        "code": "1",
                        "description": "",
                        "deleted_at": null,
                        "created_at": "2021-12-06T07:48:38.000000Z",
                        "updated_at": "2021-12-06T07:48:38.000000Z"
                    },
                    "name": "Mrs. Viola Halvorson",
                    "full_name": "Rozella",
                    "avatar": null,
                    "email": "user4@gmail.com",
                    "phone": "0123456789",
                    "status": 0,
                    "created_at": "2021-12-06 07:48:38",
                    "updated_at": "2021-12-06 07:48:38"
                },
                {
                    "id": 3,
                    "role": {
                        "id": 1,
                        "name": "Super Admin",
                        "code": "1",
                        "description": "",
                        "deleted_at": null,
                        "created_at": "2021-12-06T07:48:38.000000Z",
                        "updated_at": "2021-12-06T07:48:38.000000Z"
                    },
                    "name": "Mrs. Viola Halvorson",
                    "full_name": "Rozella",
                    "avatar": null,
                    "email": "user4@gmail.com",
                    "phone": "0123456789",
                    "status": 0,
                    "created_at": "2021-12-06 07:48:38",
                    "updated_at": "2021-12-06 07:48:38"
                },
                {
                    "id": 2,
                    "role": {
                        "id": 1,
                        "name": "Super Admin",
                        "code": "1",
                        "description": "",
                        "deleted_at": null,
                        "created_at": "2021-12-06T07:48:38.000000Z",
                        "updated_at": "2021-12-06T07:48:38.000000Z"
                    },
                    "name": "Mrs. Viola Halvorson",
                    "full_name": "Rozella",
                    "avatar": null,
                    "email": "user4@gmail.com",
                    "phone": "0123456789",
                    "status": 1,
                    "created_at": "2021-12-06 07:48:38",
                    "updated_at": "2021-12-06 07:48:38"
                },
                {
                    "id": 1,
                    "role": {
                        "id": 1,
                        "name": "Super Admin",
                        "code": "1",
                        "description": "",
                        "deleted_at": null,
                        "created_at": "2021-12-06T07:48:38.000000Z",
                        "updated_at": "2021-12-06T07:48:38.000000Z"
                    },
                    "name": "Mrs. Viola Halvorson",
                    "full_name": "Rozella",
                    "avatar": null,
                    "email": "user4@gmail.com",
                    "phone": "0123456789",
                    "status": 0,
                    "created_at": "2021-12-06 07:48:38",
                    "updated_at": "2021-12-06 07:48:38"
                },
            ],
            checkAll: false,
            hasChecked: false,
            pushItem: [],
            pagination: {
                current_page: 1,
                last_page: 1,
                per_page: 10,
                total: 0
            },
            pageRanges: [10, 20, 50, 100],
        }
    },
    methods: {
        momentFormat(date, format = 'YYYY-MM-DD') {
            return momentFormat(date, format)
        },
        status(status) {
            return status === 1 ? 'Active' : 'Inactive'
        },
        updateCustomer(id) {
            this.customer = this.customers.find(customer => customer.id === id)
            this.showModal = true
        },
        deleteCustomer(id) {
            this.customer = this.customers.find(customer => customer.id === id)
            this.showModalDelete = true
        },
        checkItem(e) {
            if (e.target.checked) {
                this.pushItem.push(e.target.value)
            } else {
                this.pushItem.splice(this.pushItem.indexOf(e.target.value), 1)
            }
            this.checkAll = this.pushItem.length === this.customers.length;
            this.hasChecked = this.pushItem.length > 0;
        },
        toggleCheckAll() {
            this.pushItem = []
            this.hasChecked = false
        },
        changePage(page) {
            this.pagination.current_page = page
        },
    },
    created() {
        this.$store.dispatch(ACTION_SET_ACTIVE_SIDEBAR, 'customers');
        this.$store.dispatch(ACTION_SET_PAGE_TITLE, 'Customers');
    }
    ,
}
</script>

<style scoped>

</style>