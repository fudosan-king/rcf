<template>
    <div>
        <nav aria-label="Page navigation example" v-if="pages">
            <ul class="pagination justify-content-center">
                <li class="page-item">
                    <a class="page-link" @click="changePage(current - 1)" aria-label="Previous">
                        <i class="fa fa-angle-left"></i>
                    </a>
                </li>
                <li class="page-item" :class="{' active': current === 1 }">
                    <a class="page-link no-bg-paginate"
                       @click="changePage(1)">1</a>
                </li>
                <li class="page-item" v-if="pages  >= 4 && current >= 4">
                    <span>...</span>
                </li>
                <li class="page-item" v-if="current - 1 > 1">
                    <a class="page-link no-bg-paginate"
                       @click="changePage(current - 1)">{{ current - 1 }}</a>
                </li>
                <li class="page-item" v-if="current !== 1 && current !== pages">
                    <a class="page-link no-bg-paginate is-current"
                       @click="changePage(current)">{{ current }}</a>
                </li>
                <li class="page-item" v-if="current + 1 < pages">
                    <a class="page-link no-bg-paginate"
                       @click="changePage(current + 1)">{{ current + 1 }}</a>
                </li>
                <li class="page-item" v-if="pages >= 4 && current <= pages - 3">
                    <span>...</span>
                </li>
                <li class="page-item" v-if="pages > 1">
                    <a class="page-link no-bg-paginate"
                       :class="{' is-current': current === pages }"
                       @click="changePage(pages)">{{ pages }}</a>
                </li>
                <li class="page-item">
                    <a class="page-link" @click="changePage(current + 1)" aria-label="Next">
                        <i class="fa fa-angle-right"></i>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Pagination",
    props: {
        current: {
            type: Number,
            default: 1,
        },
        total: {
            type: Number,
            default: 0,
        },
        perPage: {
            type: Number,
            default: 10
        },
    },
    data() {
        return {}
    },
    computed: {
        pages() {
            return Math.ceil(this.total / this.perPage)
        },
    },
    methods: {
        changePage(page) {
            if (page > 0 && page <= this.pages && page !== this.current) {
                this.$emit('change', page)
            }
        }
    },
    created() {
    }
}
</script>

<style lang="scss" scoped>
</style>