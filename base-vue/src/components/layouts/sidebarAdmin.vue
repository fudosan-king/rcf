<template>
    <div>
        <aside class="app-sidebar sidebar-scroll open ps ps--active-y">
            <div class="main-sidebar-header">
                <a class="logo">
                    <img src="../../assets/svgs/logo/logo-green.svg" alt="">
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
                    <li class="side-item side-item-category">Main</li>
                    <li class="slide is-expanded">
                        <a class="side-menu__item active" href="https://laravel.spruko.com/valex/ltr/index">
                            <span class="side-menu__label">Index</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    </div>
</template>

<script>
export default {
    name: "sidebar"
}
</script>

<style lang="scss">

</style>