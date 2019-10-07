<template>
    <div class="mk-tree">
        <div class="mk-tree-node" v-for="(item, i) in data" v-bind:key="i">
            <div class="mk-tree-item" @click="fireActive">
                <div class="mk-tree-item-bar">
                    <span class="mk-tree-item__icon"><i class="iconfont icon-triangle-arrow-d"></i></span>
                    <span class="mk-tree-item__label">{{item.label}}</span>
                </div>
            </div>
            <div class="mk-tree-children" v-if="item.children && item.children.length">
                <mk-tree :data="item.children"></mk-tree>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'mk-tree',
        props: {
            data: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            fireActive(e) {
                const parent = e.currentTarget.parentNode
                const cls = parent.className
                const arr = cls.split(/\s+/)
                const index = arr.indexOf('is-active')
                if (index > -1) {
                    arr.splice(index, 1)
                    parent.className = arr.join(' ')
                } else {
                    parent.className += ' is-active'
                }
            }
        }
    }
</script>
<style lang="postcss">
    .mk-tree {
        text-align: left;
    }
    .mk-tree-item {
        font-size: 14px;
        line-height: 26px;
    }
    .mk-tree-children {
        padding-left: 20px;
    }
    .mk-tree-item-bar {
        cursor: pointer;
    }
    .mk-tree-item:hover {
        background: #f5f7fa;
    }
    .mk-tree-item__icon {
        display: inline-block;
        width: 26px;
        height: 26px;
        text-align: center;
        vertical-align: middle;
        transition: .3s;
        color: #c0c4cc;
    }
    .mk-tree-item__label {
        display: inline-block;
        vertical-align: middle;
    }
    .mk-tree-node.is-active>.mk-tree-item {
        background: #f5f7fa;
    }
    .mk-tree-node.is-active>.mk-tree-item>.mk-tree-item-bar>.mk-tree-item__icon {
        transform: rotate(90deg);
    }
    .mk-tree-children {
        height: 0;
        overflow: hidden;
        transition: .3s;
        /* display: none; */
    }
    .mk-tree-node.is-active>.mk-tree-children {
        display:  block;
        height: auto;
    }
</style>