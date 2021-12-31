<template>
    <div id="global-loader" v-if="loading">
        <img src="../../assets/svgs/loader.svg" class="loader-img" alt="Loader">
    </div>
</template>

<script>
export default {
    name: "Loading",
    props: {
        loading: Boolean,
    },
}
</script>

<style lang="scss" scoped>
#global-loader {
    background: #fff;
    bottom: 0;
    height: 100%;
    left: 0;
    margin: 0 auto;
    position: fixed;
    right: 0;
    text-align: center;
    top: 0;
    width: 100%;
    z-index: 50000;
    
    .loader-img {
        bottom: 0;
        left: 0;
        margin: 0 auto;
        position: absolute;
        right: 0;
        text-align: center;
        top: 43%;
    }
}

</style>