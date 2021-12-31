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
                                <div class="col-12 col-lg-9">
                                    <p class="mb-0"><span class="number">{{ paginate.total || 0 }}</span><b>件中</b>{{
                                            paginate.currentPage }}〜{{ paginate.perPage }}件を表示</p>
                                </div>
                                <div class="col-12 col-lg-3">
                                    <multiselect></multiselect>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div class="main_property">
                        <div class="container">
                            <div class="row">
                                <div class="col-12 col-lg-12">
                                    <div class="box_property">
                                        <h4>募集中！</h4>
                                        <div class="row flex-row-reverse">
                                            <div class="col-12 col-lg-6">
                                                <div class="box_property_img">
                                                    <a href="#"><img src="../../../assets/images/property.jpg" alt=""
                                                                     class="img-fluid"></a>
                                                </div>
                                            </div>
                                            <div class="col-12 col-lg-6">
                                                <div class="box_property_info">
                                                    <h2>リマワル（第一号）</h2>
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
                                                        <div class="progress-bar" role="progressbar" style="width: 51%;"
                                                             aria-valuenow="51" aria-valuemin="0"
                                                             aria-valuemax="100">51%</div>
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
                                                            <p>出資金<span class="d-block d-lg-inline-block">（1口あたり）</span>
                                                            </p>
                                                            <h3>100,000<span>円</span></h3>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                    
                                        </div>
                                    </div>
                                    <div class="box_property">
                                        <h4>募集中！</h4>
                                        <div class="row flex-row-reverse">
                                            <div class="col-12 col-lg-6">
                                                <div class="box_property_img">
                                                    <a href="#"><img src="../../../assets/images/property.jpg" alt=""
                                                                     class="img-fluid"></a>
                                                </div>
                                            </div>
                                            <div class="col-12 col-lg-6">
                                                <div class="box_property_info">
                                                    <h2>リマワル（第一号）</h2>
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
                                                        <div class="progress-bar" role="progressbar" style="width: 51%;"
                                                             aria-valuenow="51" aria-valuemin="0"
                                                             aria-valuemax="100">51%</div>
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
                                                            <p>出資金<span class="d-block d-lg-inline-block">（1口あたり）</span>
                                                            </p>
                                                            <h3>100,000<span>円</span></h3>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                    
                                        </div>
                                    </div>
                                    <div class="box_property">
                                        <h4>募集中！</h4>
                                        <div class="row flex-row-reverse">
                                            <div class="col-12 col-lg-6">
                                                <div class="box_property_img">
                                                    <a href="#"><img src="../../../assets/images/property.jpg" alt=""
                                                                     class="img-fluid"></a>
                                                </div>
                                            </div>
                                            <div class="col-12 col-lg-6">
                                                <div class="box_property_info">
                                                    <h2>リマワル（第一号）</h2>
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
                                                        <div class="progress-bar" role="progressbar" style="width: 51%;"
                                                             aria-valuenow="51" aria-valuemin="0"
                                                             aria-valuemax="100">51%</div>
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
                                                            <p>出資金<span class="d-block d-lg-inline-block">（1口あたり）</span>
                                                            </p>
                                                            <h3>100,000<span>円</span></h3>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                    
                                        </div>
                                    </div>
                                    <div class="box_property">
                                        <h4>募集中！</h4>
                                        <div class="row flex-row-reverse">
                                            <div class="col-12 col-lg-6">
                                                <div class="box_property_img">
                                                    <a href="#"><img src="../../../assets/images/property.jpg" alt=""
                                                                     class="img-fluid"></a>
                                                </div>
                                            </div>
                                            <div class="col-12 col-lg-6">
                                                <div class="box_property_info">
                                                    <h2>リマワル（第一号）</h2>
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
                                                        <div class="progress-bar" role="progressbar" style="width: 51%;"
                                                             aria-valuenow="51" aria-valuemin="0"
                                                             aria-valuemax="100">51%</div>
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
                                                            <p>出資金<span class="d-block d-lg-inline-block">（1口あたり）</span>
                                                            </p>
                                                            <h3>100,000<span>円</span></h3>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                    
                                        </div>
                                    </div>
                                    <div class="box_property">
                                        <h4>募集中！</h4>
                                        <div class="row flex-row-reverse">
                                            <div class="col-12 col-lg-6">
                                                <div class="box_property_img">
                                                    <a href="#"><img src="../../../assets/images/property.jpg" alt=""
                                                                     class="img-fluid"></a>
                                                </div>
                                            </div>
                                            <div class="col-12 col-lg-6">
                                                <div class="box_property_info">
                                                    <h2>リマワル（第一号）</h2>
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
                                                        <div class="progress-bar" role="progressbar" style="width: 51%;"
                                                             aria-valuenow="51" aria-valuemin="0"
                                                             aria-valuemax="100">51%</div>
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
                                                            <p>出資金<span class="d-block d-lg-inline-block">（1口あたり）</span>
                                                            </p>
                                                            <h3>100,000<span>円</span></h3>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                    
                                        </div>
                                    </div>
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

export default {
    name: "Fund",
    data() {
        return {
            paginate: {
                currentPage: 1,
                lastPage: 10,
                perPage: 5,
                total: 10
            },
            listFunds: [],
            pushItem: [],
            statusFunds: [
                {id: 1, name: 'all'},
                {id: 2, name: 'joined'},
                {id: 3, name: 'not join'},
                {id: 4, name: 'expired'},
                {id: 5, name: 'completed'},
            ],
        }
    },
    methods: {
        changePage(page) {
            this.getFunds(page, this.paginate.perPage)
        },
        getFunds(page, limit) {
            console.log(page, limit)
        }
    }
}
</script>

<style scoped>

</style>