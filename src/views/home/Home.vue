<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">首页</div>
        </nav-bar>
        <home-swiper :banners="banners"></home-swiper>
        <recommend-view :channels="channels" @categoryClick="categoryClick"></recommend-view>
        <tab-control class="tab-control" :titles="channels" @tabControlClick="tabControl"></tab-control>
        <goods-list>

        </goods-list>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import TabControl from "components/content/tabControl/TabControl";
    import GoodsList from "components/content/goods/GoodsList";

    import HomeSwiper from "./childComps/HomeSwiper";
    import RecommendView from "./childComps/RecommendView";

    import {getHomeGoodsCategory, getHomeGoodsList, getHomeMultidata} from "network/home";

    export default {
        name: "Home",
        data() {
            return {
                banners: [],
                recommends: [],
                channels: [],
                goods: {
                    'pop': {page: 0, list: []},
                    'news': {page: 0, list: []},
                    'sell': {page: 0, list: []},
                }
            }
        },
        methods: {
            tabControl(id) {
                // getHomeGoodsList(id, 0).then(res => {
                //    console.log(res)
                // });
            },
            categoryClick(deCateId) {
                this.getHomeGoodsCategory(deCateId);
            },

            // 接口调用
            getHomeMultidata() {
                getHomeMultidata().then(res => {
                    this.banners = res.data.banner;
                    // this.recommends = res.data.hotGoodsList;
                    this.channels = res.data.channel;
                })
            },
            getHomeGoodsCategory(cateId,type) {
                getHomeGoodsCategory(cateId).then(res => {
                    console.log(+cateId);
                })
            },
            getHomeGoodsList(deCateId, page) {
                getHomeGoodsList(deCateId, page).then(res => {

                })
            }
        },
        components: {
            GoodsList,
            NavBar,
            TabControl,
            RecommendView,
            HomeSwiper
        },
        created() {
            // 1.请求多个数据
            this.getHomeMultidata();

            getHomeGoodsList()
        }
    }
</script>

<style scoped>

    #home {
        padding-top: 44px;
    }
    .home-nav {
        background-color: var(--color-tint);
        color: white;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
    }
    .tab-control {
        position: sticky;
        top: 44px;
    }
</style>