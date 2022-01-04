<template>
    <div>
        <navbar></navbar>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import navbar from "./navbar";
import Footer from "./Footer";

export default {
    
    name: "Layout",
    components: {
        navbar, Footer
    },
    created() {
        this.$nextTick(() => {
            this.init(); 
        });
    },
    methods: {

        init() {
            this.toggleNavBar();
            window.addEventListener('scroll', () => {
                this.menuAnimationScroll();    
            });
            const menuItems = document.querySelectorAll('.nav_menu-list ul:nth-child(2) li a');
            menuItems.forEach( (ele) => {
                ele.addEventListener('click', () => {
                    this.menuCloseAll();
                });
            });  
            

        },



        toggleNavBar() {

            this.menuCloseAll();
            const jsMenu = document.querySelector(".js-menu");
            const navMenuList = document.querySelector('.nav_menu-list');
            const bgOverFlow = document.querySelector(".bg-overflow");
            const body = document.body;



            bgOverFlow.addEventListener("click", () => {
                if (navMenuList.classList.contains("show")) {
                    this.menuCloseAll();
                }
            });
            jsMenu.addEventListener("click", (e) => {
                const currentTarget = e.currentTarget;
                if (navMenuList.classList.contains("show")) {
                    this.menuCloseAll();
                } else {
                    navMenuList.classList.add('show')
                    currentTarget.classList.add('open');
                    body.classList.add('menu-opening', 'menu-opened')
                }
            });
        },

        menuCloseAll() {
            const body = document.body; 
            body.classList.remove('menu-opening');
            body.classList.add('menu-closing');
            const jsMenu = document.querySelector(".js-menu");
            const navMenuList = document.querySelector('.nav_menu-list');
            setTimeout(() => {
                navMenuList.classList.remove('show');
                body.classList.remove('menu-closing', 'menu-opened');
                this.menuAnimationScroll();
                jsMenu.classList.remove('open');
            }, 300)
        },

        menuAnimationScroll() {

            const header = document.querySelector('header');
            const heightHeader = header.offsetHeight;
            if (document.body.classList.contains('menu-opened')) return;

            if(window.outerHeight + 2 * heightHeader >= document.outerHeight) return;
            
            if( window.pageYOffset  > heightHeader) {
                header.classList.add('menu-animation-scroll');
            } else {
                header.classList.remove('menu-animation-scroll');
            }
        }
    }
}
</script>

<style lang="scss">
@import "../../assets/css/style.css";
@import "../../assets/scss/frontend/style.scss";
</style>