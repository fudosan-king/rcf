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
                                <i class="fas fa-plus  m__right--1"></i> {{ $t('pages.users.add') }}
                            </button>
                            <button type="button" class="btn btn-danger mr-2" v-if="hasChecked" @click="deleteAll">
                                <i class="fas fa-trash  m__right--1"></i> {{ $t('buttons.delete') }}
                            </button>
                        </div>
                        <div class="d-flex pt-3">
                            <div class="col-md-6 my-auto">
                                <span class="">全{{ pagination.total || 0 }}件</span>
                            </div>
                            <div class="col-md-6">
                                <div class="d-flex">
                                    <span class="w-75 ml-auto text-end padding__right-10 my-auto">{{
                                            $t('page.page-range')
                                        }}</span>
                                    <div class="dropdown w-25 mr-0 ml-auto"
                                         id="dropdown-pagination"
                                         v-click-out="()=>closeDropPageRange('dropdown-pagination')">
                                        <button class="btn dropdown-toggle w-100 text-end" type="button"
                                                data-toggle="dropdown"
                                                @click="toggleDropPageRange('dropdown-pagination')">
                                            <span class="w--80 has-text-right p__right--2">
                                                {{ pagination.perPage }} 件</span>
                                        </button>
                                        <div class="dropdown-menu w-100" role="menu">
                                            <a @click="changePageRange(e)"
                                               v-for="(e, i) in pageRanges"
                                               :key="'page-range-' + i"
                                               class="dropdown-item tx-right font-16">
                                                {{ e }} 件
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive border-top customer-list-table">
                            <table class="table card-table text-nowrap mb-0">
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
                                    <th class="wd-lg-8 text-center">
                                        <span>{{ $t('pages.customers.name.label') }}</span>
                                    </th>
                                    <th class="wd-lg-20 text-center">
                                        <span>{{ $t('pages.customers.email.label') }}</span>
                                    </th>
                                    <th class="wd-lg-20 text-center">
                                        <span>{{ $t('pages.customers.phone.label') }}</span>
                                    </th>
                                    <th class="wd-lg-20 text-center">
                                        <span>{{ $t('pages.customers.address.label') }}</span>
                                    </th>
                                    <th class="wd-lg-20 text-center">
                                        <span>{{ $t('pages.customers.document.label') }}</span>
                                    </th>
                                    <th class="wd-lg-20 text-center">
                                        <span>{{ $t('pages.customers.status.label') }}</span>
                                    </th>
                                    <th class="wd-lg-10 text-center">
                                        <span> {{ $t('pages.customers.actions') }}</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(e, i) in listCustomers" :key="'earning' + i">
                                    <td class="text-center">
                                        <label class="checkbox">
                                            <input @change="checkItem(e)" type="checkbox" class="is-radiusless"
                                                   v-model="e.checked">
                                        </label>
                                    </td>
                                    <td class="name">{{ e.first_name + ' ' + e.last_name }}</td>
                                    <td class="email">{{ e.email }}</td>
                                    <td class="phone text-center">{{ e.phone }}</td>
                                    <td class="postal text-center">
                                        {{
                                            e.prefectures + ' ' + e.locality + ' ' + e.street + ''
                                            + (e.address ? e.address : '') + ' ' + (e.building ? e.building : '')
                                        }}
                                    </td>
                                    <td class="text-center">
                                        {{ e.document ? e.document : '-' }}
                                    </td>
                                    <td class="status text-center"
                                        :class="e.status === 1 ? 'text-success' : 'text-danger'">{{ status(e.status) }}
                                    </td>
                                    <td class="action text-center">
                                        <button class="btn action action-change"
                                                v-tooltip.hover="{ customClass: 'tooltip-green' }"
                                                :title="$t('tooltip.status')"
                                        >
                                            <i class="fas fa-eye"></i>
                                         </button>
                                        <button @click="deleteCustomer(e.id)"
                                                v-tooltip.hover="{ customClass: 'tooltip-danger' }"
                                                :title="$t('tooltip.delete')"
                                                class="btn action-danger action">
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
import {ACTION_SET_ACTIVE_SIDEBAR, ACTION_SET_PAGE_TITLE,} from "@/stores/common/actions";
import {momentFormat} from "@/filters";
import CustomerService from "@/services/CustomerService";
import common from "@/mixins/common";


export default {
    name: "CustomerList",
    mixins: [common],
    data() {
        return {
            pageTitle: "",
            activeSidebar: "",
            listCustomers: [],
            checkAll: false,
            hasChecked: false,
            pushItem: [],
            full_name: "",
            pagination: {
                currentPage: null,
                lastPage: null,
                perPage: null,
                total: null
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
            this.$router.push({name: 'UserAdminUpdate', params: {id}}, () => {
            })
        },
        deleteCustomer(id) {
            this.$popup(
                    this.$t('pages.users.delete.title'),
                    this.$t('pages.users.delete.content'),
                    {
                        okText: this.$t('pages.users.delete.ok'),
                        cancelText: this.$t('pages.users.delete.cancel'),
                        iconClass: 'info-circle',
                        type: 'warning'
                    },
                    {
                        onOk: async (d) => {
                            await CustomerService.delete(id)
                                    .then(() => {
                                        this.$toast.success(this.$t('pages.users.message.delete_success'));
                                        this.getCustomers(this.pagination.currentPage, this.pagination.perPage)
                                    })
                                    .catch((err) => {
                                        console.log(err)
                                        this.$toast.error(this.$t('pages.users.message.delete_fail'))
                                    })
                            d.closeDialog()
                        },
                        onCancel: (d) => {
                            d.closeDialog()
                        },
                        onClickOut: (d) => {
                            d.closeDialog()
                        }
                    }
            )
        },
        checkItem(e) {
            console.log(e)
            if (e.checked) {
                this.pushItem.push(e.value)
            } else {
                this.pushItem.splice(this.pushItem.indexOf(e.value), 1)
            }
            this.checkAll = this.pushItem.length === this.listCustomers.length;
            this.hasChecked = this.pushItem.length > 0;
        },
        toggleCheckAll() {
            this.pushItem = []
            this.hasChecked = false
            this.listCustomers.map((e) => {
                if (this.userInfo.id !== e.id) {
                    e.checked = this.checkAll
                }
                if (e.checked) {
                    this.hasChecked = true
                }
            })
            if (this.checkAll) {
                this.listCustomers.map((e) => {
                    this.pushItem = [...this.pushItem, ...[e.id]]
                    if (this.userInfo.id !== e.id) {
                        this.pushItem = [...this.pushItem, ...[e.id]]
                    }
                })
            }
        },
        changePage(page) {
            this.hasChecked = false;
            this.checkAll = false;
            this.listCustomers.map((e) => {
                if (e.checked) {
                    this.pushItem.splice(this.pushItem.indexOf(e.id));
                }
            });
            this.getCustomers(page, this.pagination.perPage)
        },
        changePageRange(range) {
            this.pagination.perPage = range;
            this.hasChecked = false;
            this.checkAll = false;
            this.closeDropPageRange();
            this.getCustomers(1, this.pagination.perPage);
        },
        async getCustomers(page, limit) {
            CustomerService.list(page, limit)
                    .then((res) => {
                        if (res && res.data) {
                            this.listCustomers = res.data.customers.map((e) => {
                                e.checked = false
                                return e
                            })
                            this.pushItem = []
                            this.pagination = {
                                currentPage: res.data.current_page,
                                lastPage: res.data.last_page,
                                perPage: res.data.per_page * 1,
                                total: res.data.total,
                            };
                        }
                    })
                    .catch((err) => {
                        this.$toast.error(err.data.message);
                    });
        },
        deleteAll() {
            this.$popup(
                    this.$t('pages.users.delete.title'),
                    this.$t('pages.users.delete.content'),
                    {
                        okText: this.$t('pages.users.delete.ok'),
                        cancelText: this.$t('pages.users.delete.cancel'),
                        iconClass: 'info-circle',
                        type: 'warning'
                    },
                    {
                        onOk: async (d) => {
                            let data = {
                                ids: this.selected.map(item => item.id),
                                _method: 'delete'
                            }
                            await CustomerService.deleteAll(data)
                                    .then(() => {
                                        this.checkAll = false
                                        this.$toast.success(this.$t('pages.users.message.delete_success'))
                                        this.getCustomers(this.pagination.currentPage, this.pagination.perPage)
                                        this.hasChecked = false
                                    })
                                    .catch((err) => {
                                        console.log(err)
                                    })
                            d.closeDialog()
                        },
                        onCancel: (d) => {
                            d.closeDialog()
                        },
                        onClickOut: (d) => {
                            d.closeDialog()
                        }
                    }
            )
        },
    },
    created() {
        this.$store.dispatch(ACTION_SET_ACTIVE_SIDEBAR, 'customers');
        this.$store.dispatch(ACTION_SET_PAGE_TITLE, 'Customers');
        this.pagination.currentPage = 1
        this.pagination.perPage = 10
        this.getCustomers(this.pagination.currentPage, this.pagination.perPage)
    },
    computed: {},
}
</script>

<style scoped>

</style>