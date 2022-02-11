<template>
    <div>
        <div class="main-content bg-green-15">
           <section>
               <div class="container">
                    <div class="title-page">
                        <h1>電子交付書類</h1>
                    </div>
                    <div class="member e-contracts bg-white">
                        <div class="box">
                            <div class="document">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>帳票名</th>
                                            <th>閲覧確認日時</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <a href="#" class="btn btn-link">財産管理報告書</a>
                                            </td>
                                            <td>
                                                <div class="date">
                                                    ２０２１年○月○日
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" class="btn btn-link">重要事項説明書</a>
                                            </td>
                                            <td>
                                                <div class="date">
                                                    ２０２１年○月○日
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" class="btn btn-link">契約成立前書面</a>
                                            </td>
                                            <td>
                                                <div class="date">
                                                    ２０２１年○月○日
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" class="btn btn-link">契約成立時書面</a>
                                            </td>
                                            <td>
                                                <div class="date">
                                                    ２０２１年○月○日
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" class="btn btn-link">支払調書</a>
                                            </td>
                                            <td>
                                                <div class="date">
                                                    ２０２１年○月○日
                                                </div>
                                            </td>
                                        </tr>
                                      
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
               </div>
           </section>
        </div>
    </div>
</template>

<script>

export default {
    created() {
        this.$nextTick(() => {
            this.init(); 
        });
    },
    methods: {        
        init() {
            
        },
    }
}

</script>

<style lang="scss" scoped>



</style>