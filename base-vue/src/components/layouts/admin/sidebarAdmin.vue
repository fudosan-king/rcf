<template>
    <aside class="app-sidebar sidebar-scroll open ps ps--active-y">
        <div class="main-sidebar-header">
            <a class="desktop-logo logo-light active">
                <img src="../../../assets/svgs/logo/logo-green.svg" class="main-logo" alt="logo">
            </a>
            <a class="logo-icon mobile-logo icon-light active">
                <img src="../../../assets/svgs/logo/logo.svg" class="logo-icon" alt="logo">
            </a>
        </div>
        <div class="main-side-menu">
            <div class="app-sidebar__user">
                <div class="dropdown user-pro-body">
                    <div class="">
                        <img alt="user-img" class="avatar avatar-xl rounded-circle"
                             src="https://laravel.spruko.com/valex/ltr/assets/img/faces/6.jpg"><span
                            class="avatar-status profile-status bg-green"></span>
                    </div>
                    <div class="user-info">
                        <h4 class="fw-semibold mt-3 mb-0">Petey Cruiser</h4>
                        <span class="mb-0 text-muted">Premium Member</span>
                    </div>
                </div>
            </div>
            <ul class="side-menu">
                <li class="side-item side-item-category">General</li>
                <li class="slide">
                    <a class="side-menu__item" href="icons.html">
                        <svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path
                                    d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.5 4c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-7 0c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5 7.67 8 8.5 8zm3.5 9.5c-2.33 0-4.32-1.45-5.12-3.5h1.67c.7 1.19 1.97 2 3.45 2s2.76-.81 3.45-2h1.67c-.8 2.05-2.79 3.5-5.12 3.5z"
                                    opacity=".3"/>
                            <circle cx="15.5" cy="9.5" r="1.5"/>
                            <circle cx="8.5" cy="9.5" r="1.5"/>
                            <path
                                    d="M12 16c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2zm-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                        </svg>
                        <span class="side-menu__label">Icons</span><span
                            class="badge badge-danger side-badge">New</span></a>
                </li>
                <li class="slide">
                    <a class="side-menu__item" data-toggle="slide" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M19 5H5v14h14V5zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" opacity=".3"/>
                            <path
                                    d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm2 0h14v14H5V5zm2 5h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>
                        </svg>
                        <span class="side-menu__label">Charts</span><i class="angle fe fe-chevron-down"></i></a>
                    <ul class="slide-menu">
                        <li><a class="slide-item" href="chart-morris.html">Morris Charts</a></li>
                        <li><a class="slide-item" href="chart-flot.html">Flot Charts</a></li>
                        <li><a class="slide-item" href="chart-chartjs.html">ChartJS</a></li>
                        <li><a class="slide-item" href="chart-echart.html">Echart</a></li>
                        <li><a class="slide-item" href="chart-sparkline.html">Sparkline</a></li>
                        <li><a class="slide-item" href="chart-peity.html">Chart-peity</a></li>
                    </ul>
                </li>
                <li class="slide">
                    <a class="side-menu__item" data-toggle="slide" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M3.31 11l2.2 8.01L18.5 19l2.2-8H3.31zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                                  opacity=".3"/>
                            <path
                                    d="M22 9h-4.79l-4.38-6.56c-.19-.28-.51-.42-.83-.42s-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM12 4.8L14.8 9H9.2L12 4.8zM18.5 19l-12.99.01L3.31 11H20.7l-2.2 8zM12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                        </svg>
                        <span class="side-menu__label">Ecommerce</span><i class="angle fe fe-chevron-down"></i></a>
                    <ul class="slide-menu">
                        <li><a class="slide-item" href="products.html">Products</a></li>
                        <li><a class="slide-item" href="product-details.html">Product-Details</a></li>
                        <li><a class="slide-item" href="product-cart.html">Cart</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </aside>
</template>


<script>
import AdminLeftMenu from "../AdminLeftMenu.js";

export default {
    name: "sidebar",
    created() {

    },
    methods: {
        init() {
            new AdminLeftMenu;
        },
    },
    mounted() {
        this.init();
    }

}
</script>

<style lang="scss">

</style>