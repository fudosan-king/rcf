<template>
    <div class="dropdown " v-if="options">
        <!-- Dropdown Input -->
        <input class="dropdown-input w-100 form-control"
               :name="name"
               @focus="showOptions()"
               @blur="exit()"
               @keyup="keyMonitor"
               ref="dropdown-keyword"
               v-model="searchFilter"
               :disabled="disabled"
               :placeholder="placeholder"/>
        <!-- Dropdown Menu -->
        <div class="dropdown-content"
             v-show="optionsShown">
            <div class="dropdown-item w-100"
                 @mousedown="selectOption(option)"
                 v-for="(option, index) in filteredOptions"
                 :key="index">
                {{ option.name || option.id || '-' }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dropdown',
    template: 'Dropdown',
    props: {
        name: {
            type: String,
            required: false,
            default: 'dropdown',
            note: 'Input name'
        },
        options: {
            type: Array,
            required: true,
            // eslint-disable-next-line vue/require-valid-default-prop
            default: [],
            note: 'Options of dropdown. An array of options with id and name',
        },
        placeholder: {
            type: String,
            required: false,
            default: 'Please select an option',
            note: 'Placeholder of dropdown'
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false,
            note: 'Disable the dropdown'
        },
        maxItem: {
            type: Number,
            required: false,
            default: 6,
            note: 'Max items showing'
        }
    },
    data() {
        return {
            selected: {},
            optionsShown: false,
            searchFilter: ''
        }
    },
    created() {
        this.$emit('selected', this.selected);
    },
    computed: {
        filteredOptions() {
            const filtered = [];
            const regOption = new RegExp(this.searchFilter, 'ig');
            for (const option of this.options) {
                if (this.searchFilter.length < 1 || option.name.match(regOption)){
                    if (filtered.length < this.maxItem) filtered.push(option);
                }
            }
            return filtered;
        }
    },
    methods: {
        selectOption(option) {
            this.selected = option;
            this.optionsShown = false;
            this.searchFilter = this.selected.name;
            ~
                    this.$emit('selected', this.selected);
        },
        showOptions(){
            if (!this.disabled) {
                this.searchFilter = '';
                this.optionsShown = true;
            }
        },
        exit() {
            if (!this.selected.id) {
                this.selected = {};
                this.searchFilter = '';
            } else {
                this.searchFilter = this.selected.name;
            }
            this.$emit('selected', this.selected);
            this.optionsShown = false;
        },
        // Selecting when pressing Enter
        keyMonitor: function(event) {
            if (event.key === "Enter" && this.filteredOptions[0])
                this.selectOption(this.filteredOptions[0]);
        }
    },
    watch: {
        searchFilter() {
            if (this.filteredOptions.length === 0) {
                this.selected = {};
            } else {
                this.selected = this.filteredOptions[0];
            }
            this.$emit('filter', this.searchFilter);
        }
    }
};
</script>


<style lang="scss" scoped>
.dropdown {
    position: relative;
    display: block;
    margin: auto;
    .dropdown-input {
        height: 38px;
        cursor: pointer;
        border: 1px solid #ced4da;
        border-radius: 3px;
        color: #333;
        display: block;
        font-size: .8em;
        padding: 6px 12px;
        background: #fff url('../../assets/images/svg/arrow_down.svg') no-repeat right 0.75rem center/18px 20px;

    }
    input::placeholder {
        font-size: 14px;
        color: #BDBDBD;
    }
    .dropdown-content {
        position: absolute;
        background-color: #fff;
        min-width: 100%;
        max-height: 248px;
        border: 1px solid #e7ecf5;
        box-shadow: 0px -8px 34px 0px rgba(0, 0, 0, 0.05);
        overflow: auto;
        z-index: 1;

        .dropdown-item {
            color: black;
            line-height: 1em;
            padding: 8px;
            text-decoration: none;
            display: block;
            cursor: pointer;
            font-size: .875em;

            &:hover {
                background-color: #e7ecf5;
            }
        }
    }
    &:hover {
        .dropdown-content {
            display: block;
        }
    }
}
</style>