<template>
    <div class="tree">
        <div class="tree-item" v-for="(item, i) in treeList" v-bind:key="i">
            <div class="tree-item-bar is-active">
                <span class="tree-item__icon"><i class="iconfont icon-triangle-arrow-d"></i></span>
                <span class="tree-item__label">{{item.label}}</span>
            </div>
            <div class="tree-item-children" v-if="item.children && item.children.length" v-for="(child, i) in item.children" v-bind:key="i">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'tree',
        props: {
            treeList: {
                type: Array,
                default: _ => []
            }
        }
    }
</script>
<style lang="postcss">
    .tree {
        text-align: left;
    }
    .tree-item {
        padding-left: 20px;
        font-size: 14px;
        line-height: 26px;
    }
    .tree-item-bar {
        cursor: pointer;
    }
    .tree-item__icon {
        display: inline-block;
        width: 26px;
        height: 26px;
        text-align: center;
        vertical-align: middle;
    }
    .tree-item__label {
        display: inline-block;
        vertical-align: middle;
    }
    .is-active {
        background: #f5f7fa;
    }
    .tree-item-bar.is-active>.tree-item__icon {
        transform: rotate(90deg);
    }
</style>