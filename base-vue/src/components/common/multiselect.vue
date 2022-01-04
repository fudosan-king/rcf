<template>
    <div>
        <div class="dropdown w-100" id="dropdown-multiple" :class="{'is-up': isUp}"
             v-click-out="() => closeDropdown('dropdown-multiple')">
            <div class="form-control line align-center w-100 dropdown-trigger"
                    :class="{'is-error': isInvalid || messageError, 'pl-2': label}"
                    @click="toggleDropdown('dropdown-multiple')">
                <template>
                    <span v-if="label">{{ this.label + ' ' }}</span>
                    <div class="control m--5" v-if="stringPrefix">
                        <div class="tags has-addons">
                            <span class="tag">{{ stringPrefix }}</span>
                        </div>
                    </div>
                    <template v-for="(e, i) in selectedData">
                        <div class="control m--5" :key="'selected-item-' + i" v-if="e[stringDisplay] !== stringPrefix">
                            <div class="tags has-addons">
                                <span class="tag">{{ e[stringDisplay] }}</span>
                                <a class="tag is-delete" v-if="deletable && multiple"
                                   @click.stop="removeSelected($event, i)"></a>
                            </div>
                        </div>
                    </template>
                    <label>
                        <input type="text"
                               :disabled="!searchable"
                               :placeholder="placeholder"
                               v-model.trim="keyword"
                               @keyup="checkValidate()"
                               v-click-out="clearKeyword"
                               @keyup.enter.stop="createNewItem()"
                               ref="dropdown-keyword"
                               class="dropdown-input w-100 form-control">
                    </label>
                </template>
            </div>
            <div class="dropdown-menu w-100" role="menu">
                <div class="dropdown-content"
                     v-if="droppable && (!maxLength || (maxLength && keyword.length <= maxLength)) && (!isEmail || (isEmail && emailRegex.test(keyword)))">
                    <a @click="getSelected(e)"
                       v-for="(e, i) in listDataClone"
                       :key="'item-clone-' + i"
                       :class="{'show': isSelected(e.id)}"
                       class="dropdown-item w-100">
                        {{ e[stringDisplay] }}
                        <span @click.stop="deleteItem(e)" v-if="removeItem" class="remove-item"><i
                                class="fas fa-times"></i></span>
                    </a>
                    <div class="dropdown-item w-100" v-if="!listDataClone || !listDataClone.length">
                        {{ $t('messages.target_not_found') }}
                    </div>
                </div>
                <span class="color-error" v-if="messageError">{{ messageError }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import findIndex from 'lodash/findIndex'
import debounce from 'lodash/debounce'
import filter from 'lodash/filter'
import isArray from 'lodash/isArray'
import { emailRegex } from "../../helpers/constant";

export default {
    name: "multiselect",
    props: {
        listData: {
            type: Array,
            default: () => []
        },
        selected: {
            type: [Array, String, Number],
            default: () => []
        },
        isUp: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: ''
        },
        createNew: {
            type: Boolean,
            default: false
        },
        removeItem: {
            type: Boolean,
            default: false
        },
        isInvalid: {
            type: Boolean,
            default: false
        },
        stringEmit: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
            default: ''
        },
        stringDisplay: {
            type: String,
            default: 'name'
        },
        stringCompare: {
            type: String,
            default: 'id'
        },
        stringPrefix: {
            type: String,
            default: '',
        },
        deletable: {
            type: Boolean,
            default: true
        },
        msgDuplicate: {
            type: String,
            default: ''
        },
        maxLength: {
            type: Number,
            default: null
        },
        msgMaxLength: {
            type: String,
            default: ''
        },
        isEmail: {
            type: Boolean,
            default: false
        },
        msgInvalidEmail: {
            type: String,
            default: ''
        },
        searchable: {
            type: Boolean,
            default: true
        },
        multiple: {
            type: Boolean,
            default: true
        },
        droppable: {
            type: Boolean,
            default: true
        },
        integerValue: {
            type: Boolean,
            default: true
        },
    },
    data() {
        return {
            selectedData: [],
            keyword: '',
            listDataClone: [],
            selectedClone: [],
            emailRegex: emailRegex,
            messageError: '',
            isEntered: false,
        }
    },
    computed: {
        stringData() {
            let arr = []
            if (this.stringPrefix && this.stringPrefix.length) {
                arr.push(this.stringPrefix)
            }
            this.selectedData.map((e) => {
                if (e.email !== this.stringPrefix) {
                    arr = [...arr, ...[e.email]]
                }
            })
            return arr.join(',')
        }
    },
    watch: {
        keyword() {
            debounce(() => {
                this.getData()
            }, 200)()
        },
        selected: {
            immediate: true,
            handler(val) {
                if (val && val.length) {
                    this.selectedClone = val
                    this.updateSelected()
                }
            }
        },
        listData(val) {
            this.updateSelected()
            if (this.droppable) {
                this.listDataClone = filter(val, (e) => {
                    return e[this.stringDisplay].toLowerCase().indexOf(this.keyword.toLowerCase()) > -1
                })
            }
        }
    },
    methods: {
        closeDropdown(id) {
            this.$nextTick(() => {
                if (this.$el.querySelector(`#${id}`)) {
                    this.$el.querySelector(`#${id}`).classList.remove('show')
                }
            })
        },
        toggleDropdown(id) {
            this.$nextTick(() => {
                if (this.$el.querySelector(`#${id}`)) {
                    console.log(this.$el.querySelector(`#${id}`))
                    this.$el.querySelector(`#${id}`).classList.toggle('show')
                    this.$refs['dropdown-keyword'] && this.$refs['dropdown-keyword'].focus()
                }
            })
        },
        clearKeyword() {
            this.keyword = ''
            this.messageError = ''
            this.isEntered = false
        },
        updateSelected(data = null) {
            this.selectedClone = data ? [...data] : this.selectedClone
            this.isEntered = false
            if (this.selectedClone && this.selectedClone.length) {
                let data = []
                if (isArray(this.selectedClone)) {
                    data = [...this.selectedClone]
                } else {
                    data = [...this.selectedClone.split(',').map(e => e.trim())]
                }
                if (this.stringCompare === 'id' && this.integerValue) {
                    data = [...data.map(e => e * 1)]
                }
                this.selectedData = []
                data.map((e) => {
                    if (findIndex(this.listData, (el) => el[this.stringCompare] === e) >= 0) {
                        this.selectedData = [...this.selectedData, ...[this.listData[findIndex(this.listData, (el) => el[this.stringCompare] === e)]]]
                    }
                })
            } else {
                this.selectedData = []
            }
        },
        checkValidate() {
            if (this.isEntered) {
                this.messageError = ''
                let index = findIndex(this.selectedData, e => e[this.stringCompare] === this.keyword)
                if (index >= 0) {
                    this.messageError = this.$t(this.msgDuplicate)
                } else if (this.maxLength && this.keyword.length > this.maxLength) {
                    this.messageError = this.$t(this.msgMaxLength)
                } else if (this.isEmail && !this.emailRegex.test(this.keyword)) {
                    this.messageError = this.$t(this.msgInvalidEmail)
                } else {
                    this.messageError = ''
                }
            }
        },
        createNewItem() {
            if (!this.keyword || !this.createNew) {
                this.$emit('submit-parent-form', true)
            }
            this.isEntered = true
            this.messageError = ''
            let index = findIndex(this.selectedData, e => e[this.stringCompare] === this.keyword)
            let existed = findIndex(this.listData, e => e.name === this.keyword.trim())
            if (index >= 0) {
                this.messageError = this.$t(this.msgDuplicate)
            } else if (this.maxLength && this.keyword.length > this.maxLength) {
                this.messageError = this.$t(this.msgMaxLength)
            } else if (this.isEmail && !this.emailRegex.test(this.keyword)) {
                this.messageError = this.$t(this.msgInvalidEmail)
            } else if ((!this.maxLength || (this.maxLength && this.keyword.length <= this.maxLength)) && (!this.isEmail || (this.isEmail && this.emailRegex.test(this.keyword)))) {
                this.messageError = ''
                if (this.createNew && this.keyword.trim() && (existed < 0 || !this.listDataClone.length)) {
                    this.$emit('create-item', this.keyword.trim())
                    let data = {}
                    data.id = this.keyword
                    data[this.stringDisplay] = this.keyword
                    this.selectedData = [...this.selectedData, ...[data]]
                    this.keyword = ''
                }
            }
        },
        deleteItem(e) {
            if (this.removeItem) {
                this.$emit('remove-item', e)
            }
        },
        getData() {
            if (this.droppable) {
                this.listDataClone = filter(this.listData, (e) => {
                    return e[this.stringDisplay].toLowerCase().indexOf(this.keyword.toLowerCase()) > -1
                })
            }
        },
        getSelected(item) {
            if (this.multiple) {
                if (!this.isSelected(item.id)) {
                    this.selectedData = [...this.selectedData, ...[item]]
                } else {
                    let index = findIndex(this.selectedData, (e) => e.id === item.id)
                    this.selectedData.splice(index, 1);
                }
            } else {
                this.selectedData = [...[item]]
            }
            this.$emit('change', this.stringEmit ? this.stringData : this.selectedData)
            this.keyword = ''
            let scrollData = this.$el.querySelector('.dropdown-trigger')
            if (scrollData) {
                setTimeout(() => {
                    scrollData.scrollTop = scrollData.scrollHeight
                })
            }
            if (!this.multiple) {
                this.closeDropdown('dropdown-multiple')
            }
        },
        removeSelected(e, i) {
            e.preventDefault()
            this.selectedData.splice(i, 1);
            this.$emit('change', this.stringEmit ? this.stringData : this.selectedData)
        },
        isSelected(id) {
            let flag = false
            this.selectedData.map((e) => {
                if (e.id === id) {
                    flag = true
                }
            })
            return flag
        },
    },
    created() {
    },
    mounted() {
        this.getData()
        this.updateSelected()
    }
}
</script>

<style lang="scss" scoped>

.dropdown {
    .dropdown-trigger {
        background: #fff url('../../assets/images/svg/arrow_down.svg') no-repeat right 0.75rem center/18px 20px;
        &:hover, &:focus {
            box-shadow: 0 0 5px #61C5FA;
        }
        &.is-error {
            &:hover, &:focus {
                box-shadow: 0 0 0 0.125em rgba(255, 102, 115, 0.35) !important;
            }
        }

        label {
            width: 80%
        }

    }
}
</style>
