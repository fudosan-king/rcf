<template>
    <div>
        <div class="breadcrumb-header justify-content-between">
            <div class="my-auto">
                <div class="d-flex">
                    <h4 class="content-title mb-0 my-auto">{{ $t('pages.users.manage') }}</h4><span
                        class="text-muted mt-1 tx-13 ml-2 mb-0">/ {{ $t('pages.users.list') }}</span>
                </div>
            </div>
        </div>
        <div class="row row-sm">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 grid-margin">
                <div class="card">
                    <div class="card-header pb-0">
                        <div class="d-flex justify-content-between">
                            <h4 class="card-title mg-b-0">USERS TABLE</h4>
                            <div class="d-flex my-xl-auto right-content">
                                <div class="pe-1 mb-xl-0">
                                    <button type="button" class="btn btn-success  m__right--2 btn-b"
                                            @click="createUser">
                                        <i class="fas fa-plus  m__right--1"></i> Add User
                                    </button>
                                </div>
                                <div class="pe-1 mb-xl-0">
                                    <button type="button" class="btn btn-danger mr-2">
                                        <i class="fas fa-trash  m__right--1"></i> Delete All User
                                    </button>
                                </div>
                            </div>
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
                                                   v-model="checkAll"
                                            />
                                        </label>
                                    </th>
                                    <th class="wd-lg-8 text-center"><span>User</span></th>
                                    <th class="wd-lg-20 text-center"><span>Email</span></th>
                                    <th class="wd-lg-20 text-center"><span>Role</span></th>
                                    <th class="wd-lg-20 text-center"><span>Status</span></th>
                                    <th class="wd-lg-20 text-center"><span>Created</span></th>
                                    <th class="wd-lg-10 text-center">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(e, i) in listUsers" :key="'earning' + i">
                                    <td class="text-center">
                                        <label class="checkbox">
                                            <input @change="checkItem(e)" type="checkbox" class="is-radiusless"
                                                   v-model="e.checked">
                                        </label>
                                    </td>
                                    <td class="name">{{ e.name }}</td>
                                    <td class="email">{{ e.email }}</td>
                                    <td class="role text-center">{{ e.role.name }}</td>
                                    <td class="status text-center"
                                        :class="e.status === 1 ? 'text-success' : 'text-danger'">{{ status(e.status) }}
                                    </td>
                                    <td class="created_at tx-right">{{ momentFormat(e.created_at) }}</td>
                                    <td class="action text-center">
                                        <button @click="actionChange('role', e, false)"
                                                class="btn btn-sm btn-success"
                                        >
                                            <i class="fas fa-sync"></i>
                                        </button>
                                        <button @click="actionChange('status', e, true)"
                                                class="btn btn-sm btn-success"
                                        >
                                            <i class="fas fa-eye"></i>
                                        </button>
                                        <button @click="updateUser(e.id)"
                                                class="btn btn-sm btn-primary"
                                        >
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button @click="deleteUser(e.id)"
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
        <div class="modal fade" id="modal-change-user">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content" v-click-out="() =>{closeModal('modal-change-user'); revertStatus()} ">
                    <template @keyup="submitChangeStatus" v-if="isChangeStatus">
                        <div class="modal-header">
                            <h5 class="modal-title">{{ titleChange }}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                                    @click="closeModal('modal-change-user')">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row row-xs align-items-center mg-b-20">
                                <label class="form-label mg-b-0">{{ userChange.name }}</label>

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
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                                    @click="closeModal('modal-change-user')">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row row-xs align-items-center mg-b-20">
                                <label class="form-label mg-b-0">{{ userChange.name }}</label>
                            </div>
                            <div class="row text-center mt-3 justify-content-center">
                                <div class="col-md-3 p-0">{{$t('pages.users.role.label')}}</div>
                                <div class="col-md-9">
                                    <div class="dropdown w-100 text-end"
                                         id="dropdown-change"
                                         v-click-out="()=>closeDropdown('dropdown-change')">
                                        <button class="btn dropdown-toggle w-100 text-end" type="button" data-toggle="dropdown"
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
                                {{ $t('pages.users.status.choose') }}
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
import {ACTION_SET_ACTIVE_SIDEBAR, ACTION_SET_PAGE_TITLE,} from "../../../stores/common/actions";
import {momentFormat} from "../../../filters";
import {UserService} from "../../../services";
import User from "../../../mixins/user";

export default {
    name: "UserList",
    mixins: [User],
    data() {
        return {
            pageTitle: "",
            activeSidebar: "",
            listUsers: [
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
            this.user = this.listUsers.find(user => user.id === id)
        },
        async getUsers() {
            try {
                const {data} = await this.$http.get('/api/users')
                this.users = data.data
                this.pagination = data.pagination
            } catch (error) {
                console.log(error)
            }
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
                                        this.$toast.success(this.$t('pages.users.delete.message.delete_success'))
                                        this.getUsers(this.pagination.currentPage, this.pagination.perPage)
                                    })
                                    .catch((err) => {
                                        console.log(err)
                                        this.$toast.error(this.$t('pages.users.delete.message.delete_failed'))
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
            if (e.target.checked) {
                this.pushItem.push(e.target.value)
            } else {
                this.pushItem.splice(this.pushItem.indexOf(e.target.value), 1)
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
                    if (this.userInfo.id !== e.id) {
                        this.pushItem = [...this.pushItem, ...[e.id]]
                    }
                })
            }
        },
        changePage(page) {
            this.pagination.current_page = page
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
                            console.log(res);
                            // if (res) {
                            //     this.$toast.success(this.$t('users_management.messages.change_status_success'))
                            // }
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
                            // if (res) {
                            //     this.$toast.success(this.$t('users_management.messages.change_status_success'))
                            // }
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
        // getFilter(val, type) {
        //     this.filterUser[type] = val.map((e) => {
        //         return e.id
        //     })
        // },
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
    },
}
</script>

<style lang="scss" scoped>
.dropdown{
    border: 1px solid #ccc;
}
</style>