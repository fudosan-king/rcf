<template>
    <div>
        <div class="main-content bg-green-15">
           <section>
               <div class="container">
                        <div class="member e-contracts">
                            <div class="title-page">
                                <h1>出資にあたっての確認事項</h1>
                                <p>申込を受け付けました。以下の書面をご確認下さい。</p>
                            </div>
                            <div class="box">
                                <div class="document">
                                    <div class="document_pdf">
                                        <pdf 
                                        v-for="i in numPages"
                                        :key="i"
                                        :src="src"
                                        :page="i"
                                        ></pdf>
                                    </div>
                                </div>
                            </div>
                            <div class="confirm">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" disabled>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        契約成立前交付書面を確認し、内容を理解しました。
                                    </label>
                                </div>
                            </div>
                            <div class="text-center">
                                <button type="submit"
                                    class="btn btn-form-action bg-cl-green text-white">
                                    <span>出資を申し込む</span></button>
                            </div>
                           
                        </div>
               </div>
           </section>
        </div>
    </div>
</template>

<script>
import pdf from 'vue-pdf'
var loadingTask = pdf.createLoadingTask('/assets/pdf/sample-12-24.pdf');

export default {
    components: {
        pdf
    },
    data() {
        return {
            src: loadingTask,
            numPages: undefined,
            currentPage: 0,
            pageCount: 0,
            progress:0,
        }
    },
    mounted() {

        this.src.promise.then(pdf => {
            this.numPages = pdf.numPages;
        });

    },
    updated(){
        const documentPDF = document.querySelector('.document_pdf');   
        const input = document.querySelector('.form-check input');
        documentPDF.addEventListener("scroll",() => {
            if( documentPDF.scrollTop + documentPDF.offsetHeight >= documentPDF.scrollHeight ){
                input.disabled = false;
            }
        });
    },


}

</script>

<style lang="scss" scoped>



</style>