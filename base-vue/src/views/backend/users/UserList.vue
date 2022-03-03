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
                            <button type="button" class="btn btn-success  m__right--2 btn-b"
                                    @click="createUser">
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
                        <div class="table-responsive border-top userlist-table">
                            <table class="table card-table text-nowrap mb-0">
                                <thead>
                                <tr>
                                    <th class="input-title text-center p--12 wd-lg-5 tx-14">
                                        <label class="checkbox mb-0">
                                            <input @change="toggleCheckAll()"
                                                   type="checkbox"
                                                   v-model="checkAll"
                                            />
                                        </label>
                                    </th>
                                    <th class="wd-lg-8 text-center tx-14">
                                        <span>{{ $t('pages.users.name.label') }}</span>
                                    </th>
                                    <th class="wd-lg-20 text-center tx-14">
                                        <span>{{ $t('pages.users.email.label') }}</span>
                                    </th>
                                    <th class="wd-lg-20 text-center tx-14">
                                        <span>{{ $t('pages.users.role.label') }}</span>
                                    </th>
                                    <th class="wd-lg-20 text-center tx-14">
                                        <span>{{ $t('pages.users.status.label') }}</span>
                                    </th>
                                    <th class="wd-lg-20 text-center tx-14">
                                        <span>{{ $t('pages.users.created_at') }}</span>
                                    </th>
                                    <th class="wd-lg-10 text-center tx-14">
                                        <span>{{ $t('pages.users.actions') }}</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(e, i) in listUsers" :key="'user' + i"
                                    :class="{'background__athens': userInfo.id === e.id}  ">
                                    <td class="text-center">
                                        <label class="checkbox">
                                            <input @change="checkItem(e)" type="checkbox" v-model="e.checked"
                                                   :disabled="userInfo.id === e.id"
                                            >
                                        </label>
                                    </td>
                                    <td class="name">{{ e.username }}</td>
                                    <td class="email">{{ e.email }}</td>
                                    <td class="role text-center">{{ (e.role) ? e.role.name : '' }}</td>
                                    <td class="status text-center"
                                        :class="e.status === 1 ? 'text-success' : 'text-danger'">{{ status(e.status) }}
                                    </td>
                                    <td class="created_at tx-right">{{ momentFormat(e.created_at) }}</td>
                                    <td class="action text-center">
                                        <button @click="updateUser(e.id)"
                                                class="btn action action-success"
                                                :disabled="userInfo.id === e.id"
                                                v-tooltip.hover="{ customClass: 'tooltip-success' }"
                                                :title="$t('tooltip.edit')"
                                        >
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button @click="actionChange('role', e, false)"
                                                class="btn action action-change"
                                                :disabled="userInfo.id === e.id"
                                                v-tooltip.hover="{ customClass: 'tooltip-green' }"
                                                :title="$t('tooltip.role')"
                                        >
                                            <i class="fas fa-sync"></i>
                                        </button>
                                        <button @click="actionChange('status', e, true)"
                                                class="btn action action-change"
                                                :disabled="userInfo.id === e.id"
                                                v-tooltip.hover="{ customClass: 'tooltip-green' }"
                                                :title="$t('tooltip.status')"
                                        >
                                            <i class="fas fa-eye"></i>
                                        </button>

                                        <button @click="deleteUser(e.id)"
                                                :disabled="userInfo.id === e.id"
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
        <div class="modal fade" id="modal-change-user">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content" v-click-out="() =>{closeModal('modal-change-user'); revertStatus()} ">
                    <template @keyup="submitChangeStatus" v-if="isChangeStatus">
                        <div class="modal-header">
                            <h5 class="modal-title">{{ titleChange }}</h5>
                            <button type="button" class="close btn" data-dismiss="modal" aria-label="Close"
                                    @click="closeModal('modal-change-user')">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row row-xs align-items-center mg-b-20">
                                <label class="form-label mg-b-0">{{ userChange.username }}</label>

                            </div>
                            <div class="row text-center mt-3 justify-content-center">
                                <div class="col-md-3 p-0">
                                    <label class="radio pr-4">
                                        <input type="radio" name="status" :value="1"
                                               v-model="userChange.status">
                                        <span class="pleft--10">{{ $t('pages.users.status.active') }}</span>
                                    </label>
                                </div>
                                <div class="col-md-3 p-0">
                                    <label class="radio">
                                        <input type="radio" name="status" :value="0"
                                               v-model="userChange.status">
                                        <span class="pleft--10">{{ $t('pages.users.status.deactivate') }}</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" @click="submitChangeStatus()">
                                {{ $t('pages.users.status.choose') }}
                            </button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal"
                                    @click="closeModal('modal-change-user'); revertStatus()">{{ $t('buttons.cancel') }}
                            </button>
                        </div>
                    </template>
                    <template @keyup="submitChangeRole" v-if=" !isChangeStatus">
                        <div class="modal-header">
                            <h5 class="modal-title">{{ titleChange }}</h5>
                            <button type="button" class="close btn" data-dismiss="modal" aria-label="Close"
                                    @click="closeModal('modal-change-user')">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row align-items-center mg-b-20">
                                <div class="col-md-3 p-0 font-weight-semibold text-start">
                                    {{ $t('pages.users.name.label') }}
                                </div>
                                <div class="col-md-9">
                                    <label class="form-label mg-b-0">{{ userChange.username }}</label>
                                </div>
                            </div>
                            <div class="row text-center mt-3 justify-content-center">
                                <div class="col-md-3 p-0 font-weight-semibold text-start">
                                    {{ $t('pages.users.role.label') }}
                                </div>
                                <div class="col-md-9">
                                    <div class="dropdown w-100 text-end"
                                         id="dropdown-change"
                                         v-click-out="()=>closeDropdown('dropdown-change')">
                                        <button class="btn dropdown-toggle w-100 text-end" type="button"
                                                data-toggle="dropdown"
                                                @click="toggleDropdown('dropdown-change'); scrollBottom()">
                                            <span>{{ dropName[keyChange] }}</span>
                                        </button>
                                        <div class="dropdown-menu w-100" role="menu">
                                            <a :key="'role' + i"
                                               @click="getUserChange(keyChange, e, dropChange)"
                                               class="dropdown-item"
                                               v-for="(e, i) in dropChange">
                                                {{ e.name }}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" @click="submitChangeRole()">
                                {{ $t('buttons.save') }}
                            </button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal"
                                    @click="closeModal('modal-change-user')">{{ $t('buttons.cancel') }}
                            </button>
                        </div>
                    </template>
                </div>
                <div class="modal-backdrop"></div>
            </div>
        </div>
    </div>
</template>

<script>
import {ACTION_SET_ACTIVE_SIDEBAR, ACTION_SET_PAGE_TITLE,} from "@/stores/common/actions";
import {momentFormat} from "@/filters";
import {UserService} from "@/services";
import User from "@/mixins/user";
import common from "@/mixins/common";

export default {
    name: "UserList",
    mixins: [User, common],
    data() {
        return {
            pageTitle: "",
            activeSidebar: "",
            listUsers: [],
            checkAll: false,
            hasChecked: false,
            pushItem: [],
            pagination: {
                currentPage: null,
                lastPage: null,
                perPage: null,
                total: null
            },
            pageRanges: [10, 20, 50, 100],
            titleChange: '',
            submitAvailable: true,
            userChange: {},
            oldStatus: 1,
            labelChange: '',
            isChangeStatus: false,
            dropChange: [],
            keyChange: '',
            dropName: {},

        }
    },
    methods: {
        momentFormat(date, format = 'YYYY-MM-DD') {
            return momentFormat(date, format)
        },
        status(status) {
            return status === 1 ? 'Active' : 'Inactive'
        },
        updateUser(id) {
            this.$router.push({name: 'UserAdminUpdate', params: {id}}, () => {
            })
        },
        async getUsers(page, limit) {
            UserService.list(page, limit)
                    .then((res) => {
                        if (res && res.data) {
                            this.listUsers = res.data.users.map((e) => {
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
        deleteUser(id) {
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
                            await UserService.delete(id)
                                    .then(() => {
                                        this.$toast.success(this.$t('pages.users.message.delete_success'));
                                        this.getUsers(this.pagination.currentPage, this.pagination.perPage)
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
            this.checkAll = this.pushItem.length === this.listUsers.length;
            this.hasChecked = this.pushItem.length > 0;
        },
        toggleCheckAll() {
            this.pushItem = []
            this.hasChecked = false
            this.listUsers.map((e) => {
                if (this.userInfo.id !== e.id) {
                    e.checked = this.checkAll
                }
                if (e.checked) {
                    this.hasChecked = true
                }
            })
            if (this.checkAll) {
                this.listUsers.map((e) => {
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
            this.listUsers.map((e) => {
                if (e.checked) {
                    this.pushItem.splice(this.pushItem.indexOf(e.id));
                }
            });
            this.getUsers(page, this.pagination.perPage)
        },
        changePageRange(range) {
            this.pagination.perPage = range;
            this.hasChecked = false;
            this.checkAll = false;
            this.closeDropPageRange();
            this.getUsers(1, this.pagination.perPage);
        },

        createUser() {
            this.$router.push({name: "UserAdminCreate"}, () => {
            });
        },
        revertStatus() {
            this.userChange.status = this.oldStatus
        },
        async actionChange(type, user, status = false) {
            this.titleChange = ''
            this.dropChange = []
            this.keyChange = ''
            console.log(type);
            this.isChangeStatus = status
            this.toggleModal('modal-change-user')
            this.userChange = user;
            this.userChange.role_id = this.userChange.role && this.userChange.role.id
            this.$set(this.dropName, 'role_id', this.dropDisplay(this.roles, this.userChange.role_id))
            setTimeout(() => {
                this.modalOpened = true
            })
            switch (type) {
                case 'status':
                    this.titleChange = this.$t('pages.users.status.title')
                    this.dropChange = []
                    this.keyChange = ''
                    break
                case 'role':
                    this.titleChange = this.$t('pages.users.role.title')
                    this.dropChange = this.roles
                    this.keyChange = 'role_id'
                    break
                default:
                    break
            }
        },
        async submitChangeStatus() {
            if (this.submitAvailable) {
                this.submitAvailable = false
                this.oldStatus = this.userChange.status
                await UserService.changeStatus(this.userChange.id, this.userChange.status)
                        .then((res) => {
                            this.submitAvailable = true
                            if (res) {
                                this.$toast.success(this.$t('pages.users.message.change_status_success'))
                            }
                            this.closeModal('modal-change-user')
                        })
                        .catch((err) => {
                            this.submitAvailable = true
                            this.$toast.error(err.data.message)
                            this.closeModal('modal-change-user')
                        })
            }
        },
        async submitChangeRole() {
            if (this.submitAvailable) {
                let data = {}
                data['user_id'] = this.userChange.id
                this.submitAvailable = false
                await UserService.changeRole(this.userChange.id, this.userChange.status)
                        .then((res) => {
                            this.submitAvailable = true
                            if (res) {
                                this.$toast.success(this.$t('pages.users.message.change_status_success'))
                            }
                            console.log(res)
                            this.closeModal('modal-change-user')
                        })
                        .catch((err) => {
                            this.submitAvailable = true
                            this.$toast.error(err.data.message)
                            this.closeModal('modal-change-user')
                        })
            }
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
                            await UserService.deleteAll(data)
                                    .then(() => {
                                        this.checkAll = false
                                        this.$toast.success(this.$t('pages.users.message.delete_success'))
                                        this.getUsers(this.pagination.currentPage, this.pagination.perPage)
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
        getUserChange(key, value, list, drop = 'dropdown-change') {
            this.userChange[key] = value.id
            this.$set(this.dropName, key, this.dropDisplay(list, this.userChange[key]))
            this.closeDropdown(drop)
        },
        scrollBottom() {
            let box = this.$el.querySelector('.box-change-role')
            if (box) {
                setTimeout(() => {
                    box.scrollTop = box.scrollHeight
                })
            }
        },
    },
    created() {
        this.$store.dispatch(ACTION_SET_ACTIVE_SIDEBAR, "users");
        this.$store.dispatch(ACTION_SET_PAGE_TITLE, "Users");
        this.pagination.currentPage = 1
        this.pagination.perPage = 10
        this.getUsers(this.pagination.currentPage, this.pagination.perPage)
    },
}
</script>

<style lang="scss" scoped>
.dropdown {
    border: 1px solid #ccc;
}
</style>