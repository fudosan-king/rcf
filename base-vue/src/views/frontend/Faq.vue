<template>
    <div>
        <nav aria-label="breadcrumb">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link :to="{name: 'home'}" class="homepage">{{ $t('frontend.top') }}</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">{{ $t('frontend.faq.list') }}</li>
                </ol>
            </div>
        </nav>
        <div class="main_content">
            <section class="section_faq">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-12">
                            <h1 class="title">{{ $t('frontend.faq.list') }}</h1>
                            <div class="faq_content" :key="'faq' + i" v-for="(e, i) in faqList.faqs">
                                <div class="card">
                                    <h5 class="card-title">{{ e.question }}</h5>
                                    <div class="card-body" :key="'answer' + index" v-for="(answer, index) in e.answer">
                                        <h2>{{ answer.title }}</h2>
                                        <p class="card-text">{{ answer.content }}</p>
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
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: "Faq",
    data() {
        return {
            paginate: {
                currentPage: 1,
                lastPage: 1,
                perPage: 20,
                total: 1,
            },
            pageRanges: [10, 20, 50, 100],
            faqList: {
                "faqs": [
                    {
                        "id": 1,
                        "question": "Q.匿名組合とは何ですか？",
                        "answer": [
                            {
                                "id": 1,
                                "title": "A.商法に規定されている匿名組合契約です",
                                "content": "商法535条に規定されている契約形態で、お客さまが事業者のために出資し、事業者がその営業から生ずる利益を分配する契約のことです。「リマワル」へのご出資にあたっては、事業者である株式会社プロスタイルと出資者であるお客さまとの間で匿名組合型の不動産特定共同事業契約を締結していただきます。※匿名組合の出資者は出資した金額の範囲内でのみ、責任（有限責任）を負います。",
                            }
                        ],
                        "created_at": "2022-01-02 00:00:00",
                        "updated_at": "2022-01-02 00:00:00",
                        
                    },
                    {
                        "id": 2,
                        "question": "Q.出資にかかる手数料を教えてください。",
                        "answer": [
                            {
                                "id": 2,
                                "title": "A.手数料（消費税別）については下記のように定めております。",
                                "content": "⑴申込手数料はかかりません\n" +
                                        "⑵譲渡手数料は発生します（成立前契約書にて詳細説明が御座いますのでご確認下さい）",
                            }
                        ],
                        "created_at": "2022-01-02 00:00:00",
                        "updated_at": "2022-01-02 00:00:00",
                        
                    },
                    {
                        "id": 3,
                        "question": "Q.契約期間中の第三者への譲渡は可能ですか？\n",
                        "answer": [
                            {
                                "id": 3,
                                "title": "A.譲渡は可能です。",
                                "content": "事前に弊社の譲渡に関する承諾が必要となります。また、譲渡の際は所定の手数料が発生いたします。",
                            }
                        ],
                        "created_at": "2022-01-02 00:00:00",
                        "updated_at": "2022-01-02 00:00:00",
                        
                    },
                    {
                        "id": 4,
                        "question": "Q.出資元本は保証されていますか？",
                        "answer": [
                            {
                                "id": 4,
                                "title": "A.出資元本は保証されておりません。出資法により元本保証は禁止されております。",
                                "content": "但し、当社はお客さまの元本の安全性を高める方法として「優先劣後システム」を採用しています。※5ページ参照ください。",
                            }
                        ],
                        "created_at": "2022-01-02 00:00:00",
                        "updated_at": "2022-01-02 00:00:00",
                        
                    },
                    {
                        "id": 5,
                        "question": "Q.分配金額は確定していますか？",
                        "answer": [
                            {
                                "id": 5,
                                "title": "A.分配金額は変動することもございます。",
                                "content": "対象不動産の想定利回りに基づき分配金を算出いたしますのが、賃貸利益の変動により、分配金も変動する可能性があります。\n" +
                                        "「リマワル」は、当社の事業経験から培ったノウハウにより、収益が安定した事業用不動産を対象として、安定した分配の確保を目指しています。",
                            }
                        ],
                        "created_at": "2022-01-02 00:00:00",
                        "updated_at": "2022-01-02 00:00:00",
                        
                    },
                    {
                        "id": 6,
                        "question": "Q.契約期間満了時の出資金はどうなりますか？。",
                        "answer": [
                            {
                                "id": 6,
                                "title": "A.償還します。",
                                "content": "最終的な出資の価額に基づき、最終の利益分配金のお支払いと同時に償還します。",
                            }
                        ],
                        "created_at": "2022-01-02 00:00:00",
                        "updated_at": "2022-01-02 00:00:00",
                        
                    },
                    {
                        "id": 7,
                        "question": "Q.確定申告は必要ですか？",
                        "answer": [
                            {
                                "id": 7,
                                "title": "A.確定申告は必要な場合があります。",
                                "content": "「リマワル」の分配金は雑所得として申告する事になります。\n" +
                                        "税務上の取り扱いにつきましては、投資家様の住所地の所轄税務署または税理士へお問い合わせください。",
                            }
                        ],
                        "created_at": "2022-01-02 00:00:00",
                        "updated_at": "2022-01-02 00:00:00",
                        
                    },
                
                ],
                "current_page": 1,
                "last_page": 1,
                "total": 1,
                "per_page": 20
            },
        };
    },
    methods: {
        changePage(page) {
            this.getFaqs(page, this.paginate.perPage);
        },
        getFaqs() {
            // todo get Faqs
        }
    },
    mounted() {
        console.log(this.faqList.faqs)
    }
}
</script>

<style lang="scss" scoped>
</style>