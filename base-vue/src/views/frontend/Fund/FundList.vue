<template>
    <div>
        <nav aria-label="breadcrumb">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link :to="{name: 'home'}" class="homepage">TOP</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">{{ $t('frontend.fund.fund_list') }}</li>
                </ol>
            </div>
        </nav>

        <div class="main_content">

            <div class="property_content">
                <section class="list_property pb-0">
                    <h1 class="title">{{ $t('frontend.fund.fund_list') }}</h1>
                    <div class="top_sort">
                        <div class="container">
                            <div class="row">
                                <div class="col-12 col-lg-6">
                                    <p class="mb-0"><span class="number">{{
                                            paginate.total || 0
                                        }}</span><b>件中</b>{{ paginate.currentPage }}〜{{ paginate.perPage }}件を表示</p>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <Multiselect
                                            v-model="value"
                                            :options="statusFunds"
                                            label="name"
                                            track-by="value"
                                            taggable
                                            @tag="addTag"
                                            multiple
                                    ></Multiselect>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main_property">
                        <div class="container">
                            <div class="row">
                                <div class="col-12 col-lg-12">
                                    <template v-for="(value, index) in listFunds">
                                        <div class="box_property" :key="'fund' + index" @click="getFundDetails(index)">
                                            <h4>募集中！</h4>
                                            <div class="row flex-row-reverse">
                                                <div class="col-12 col-lg-6">
                                                    <div class="box_property_img">
                                                        <a href="#"><img src="../../../assets/images/property.jpg"
                                                                         alt=""
                                                                         class="img-fluid"></a>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-lg-6">
                                                    <div class="box_property_info">
                                                        <h2>{{ value.name }}</h2>
                                                        <p class="mb-3">神奈川県横浜市鶴見区鶴見2丁目共同住宅</p>
                                                        <div class="row mb-2">
                                                            <div class="col-12 col-lg-3">
                                                                <p><b>募集金額</b></p>
                                                            </div>
                                                            <div class="col-12 col-lg-9">
                                                                <p class="date">54,500,000円 / 106,500,000円（優先出資）</p>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-12 col-lg-3">
                                                                <p><b>募集期間</b></p>
                                                            </div>
                                                            <div class="col-12 col-lg-9">
                                                                <p class="date">2021年3月16日 10:00 〜 7月10日 18:00</p>
                                                            </div>
                                                        </div>
                                                        <div class="progress my-3">
                                                            <div class="progress-bar" role="progressbar"
                                                                 style="width: 51%;"
                                                                 aria-valuenow="51" aria-valuemin="0"
                                                                 aria-valuemax="100">51%
                                                            </div>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <p>年利分配金</p>
                                                                <h3>8.0<span>%</span></h3>
                                                            </li>
                                                            <li>
                                                                <p>運用期間</p>
                                                                <h3>152<span>日</span></h3>
                                                            </li>
                                                            <li>
                                                                <p>出資金<span
                                                                        class="d-block d-lg-inline-block">（1口あたり）</span>
                                                                </p>
                                                                <h3>100,000<span>円</span></h3>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </template>
                                    <pagination
                                            :current="paginate.currentPage"
                                            :per-page="paginate.perPage"
                                            :total="paginate.total"
                                            @change="changePage($event)">
                                    </pagination>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            </div>

        </div>
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect';

export default {
    name: "Fund",
    components: {
        Multiselect
    },
    data() {
        return {
            paginate: {
                currentPage: 1,
                lastPage: 10,
                perPage: 5,
                total: 10
            },
            listFunds: [
                {id: 1, name: "リマワル（第一号）"},
                {id: 2, name: "リマワル（第一号）"},
                {id: 3, name: "リマワル（第一号）"},
                {id: 4, name: "リマワル（第一号）"},
                {id: 5, name: "リマワル（第一号）"},
            ],
            pushItem: [],
            value: [],
            dataTaggable: [],
            statusFunds: [
                {value: 1, name: 'all'},
                {value: 2, name: 'joined'},
                {value: 3, name: 'not join'},
                {value: 4, name: 'expired'},
                {value: 5, name: 'completed'},
            ],
        }
    },
    methods: {
        changePage(page) {
            this.getFunds(page, this.paginate.perPage)
        },
        getFunds(page, limit) {
            console.log(page, limit)
        },
        addTag(t) {
            let newOption = {value: t, name: t};
            this.statusFunds.push(newOption);
            this.dataTaggable.push(newOption);
        },
        getFundDetails(id) {
            this.$router.push(
                    {name: "FundDetail", params: {id}},
                    () => {
                    }
            );
        },



    }
}
</script>

<style scoped>

</style>