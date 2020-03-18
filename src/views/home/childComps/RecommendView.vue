<template>
    <div class="recommend">
        <div v-for="item in channels" class="recommend-item" @click="categoryClick(item.id)">
            <a href="#">
                <img :src="item.iconUrl">
                <div>{{item.name}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RecommendView",
        props: {
            channels: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        methods: {
            categoryClick(cateId) {
                this.$emit("categoryClick", cateId)
            }
        }
    }
</script>

<style scoped>
    .recommend {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        text-align: center;
        font-size: 12px;
        padding: 8px 0 15px;
        border-bottom: 8px solid #eee;
    }

    .recommend-item {
        width: 20%;
    }

    .recommend-item img {
        padding: 10px;
        width: 50px;
        height: 50px;
    }
</style>