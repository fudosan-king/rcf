<template>
    <div>
        <header class="u-header u-header--error-page">
            <router-link :to="{name: 'home'}" class="nav-link">
            </router-link>
        </header>
        <main class="u-error-content-wrap d-flex flex-row">
            <div class="u-error-content container text-center m-auto w--100">
                <h1 class="u-error__title  text-center m__bottom--4">404</h1>
                <h2 class="u-error__sub-title m__bottom--3 text-center">{{$t('messages.page_not_found')}}</h2>
                <h4 class="font-weight-semi-bold  text-center mb-0">
                    <router-link :to="{name: 'loginAdmin'}" class="forgot-password-link">
                        {{ $t('buttons.return_login') }}
                    </router-link>
                </h4>
                <!-- SVG Shapes -->
                <figure class="u-shape u-shape-top-left">
                    <img src="../../assets/svgs/shapes/shape-1.svg" alt="Image description">
                </figure>
                <figure class="u-shape u-shape-top-right">
                    <img src="../../assets/svgs/shapes/shape-1.svg" alt="Image description">
                </figure>
                <figure class="u-shape u-shape-bottom-left">
                    <img src="../../assets/svgs/shapes/shape-1.svg" alt="Image description">
                </figure>
                <figure class="u-shape u-shape-bottom-right">
                    <img src="../../assets/svgs/shapes/shape-1.svg" alt="Image description">
                </figure>
                <!-- End SVG Shapes -->
            </div>
        </main>
    </div>

</template>
<script>
export default {
    name: 'PageNotFound',
    data() {
        return {
            message: 'PageNotFound'
        }
    },
}
</script>
<style lang="scss" scoped>
.u-error-content-wrap {
    min-height: calc(100vh - 3.75rem);
    
    .u-error-content {
        position: relative;
        max-width: 41.25rem !important;
        padding-top: 5rem;
        padding-bottom: 10rem;
        
        .u-error__title {
            line-height: 1;
            font-weight: 700;
            font-size: 9rem;
            color: #252631;
        }
        
        .u-error__sub-title {
            font-size: 1.5rem;
            color: #1b1e24;
        }
        
        .font-weight-semi-bold {
            font-weight: 500 !important;
        }
        
        .u-shape {
            position: absolute;
        }
        
        .u-shape-top-left, .u-shape-bottom-left {
            left: 0;
        }
        
        .u-shape-top-left, .u-shape-top-right {
            top: 0;
        }
        
        .u-shape-top-right, .u-shape-bottom-right {
            right: 0;
        }
        
    }
    
    figure {
        margin: 0 0 1rem;
    }
    
}
</style>