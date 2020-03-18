<template>
    <div class="tab-control">
        <div v-for="(item, index) in titles"
             class="tab-control-item"
             :class="{active: index == currentIndex}" @click="itemClick(index, item.id)">
            <span>{{item.name}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        props: {
            titles: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        data() {
            return {
                currentIndex: 0
            }
        },
        methods: {
            itemClick(index, id) {
                this.currentIndex = index
                this.$emit("tabControlClick", id)
            }
        }
    }
</script>

<style scoped>

    .tab-control{
        white-space: nowrap;
        overflow-y: auto;
        text-align: center;
        font-size: 15px;
        background-color: #ffffff;
        margin:8px 0 10px;
        border-bottom: 1px solid #eeeeee;
    }
    .tab-control::-webkit-scrollbar {
        display: none;
        height: 1px;
    }
    .tab-control::-webkit-scrollbar-thumb {
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        background: rgba(0, 0, 0, 0.2);
    }
    .tab-control-item{
        display: inline-block;
        width: 25%;
        height: 40px;
        line-height: 40px;
    }
    .tab-control-item span {
        padding: 5px;
    }
    .active {
        color: var(--color-high-text);
    }
    .active span{
        border-bottom: 3px solid var(--color-tint);
    }
</style>