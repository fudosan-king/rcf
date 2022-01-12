<template>
    <div>
        <section class="section_template">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-12">
                        <h2 class="title">{{ $t('frontend.auth.activation.title_confirm') }}</h2>
                        <div class="box_content px-lg-4">
                            <div class="box_send_completely text-center">
                                <h3>{{ $t('frontend.auth.activation.content') }}</h3>
                                <p>{{ $t('frontend.auth.activation.next_register') }}</p>
                                <p class="text-center mt-5">
                                    <router-link class="btn btn_green" :to="{name: 'home'}">
                                        {{ $t('frontend.buttons.register') }}
                                    </router-link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
export default {
    name: "Activation"
}
</script>

<style scoped>

</style>