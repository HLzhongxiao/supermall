<template>
    <div id="home">
        <nav-bar class="home-nav">
            <button slot="center">首页</button>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import {getHomeMultidata} from "network/home";
    import {Swiper, SwiperItem} from 'components/common/swiper'

    export default {
        name: "Home",
        data() {
            return {
                banners: []
            }
        },
        components: {
            NavBar
        },
        created() {
            // 1.请求多个数据
            getHomeMultidata().then(res => {
                this.banners = res.data.banner
            })
        }
    }
</script>

<style scoped>
    .home-nav {
        background-color: var(--color-tint);
        color: white;
    }
</style>