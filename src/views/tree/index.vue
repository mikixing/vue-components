<template>
    <div class="mk-tree">
        <div class="mk-tree-node" v-for="(item, i) in data" v-bind:key="i" :tabindex="i" @click="lazy && load">
            <div class="mk-tree-item" @click="fireActive" >
                <div class="mk-tree-item-bar">
                    <span class="mk-tree-item__icon" v-if="item.children && item.children.length"><i class="iconfont icon-triangle-arrow-d"></i></span>
                    <span class="mk-tree-item__label">{{item.label}}</span>
                </div>
            </div>
            <div class="mk-tree-children" v-if="item.children && item.children.length">
                <mk-tree :data="item.children" :load="load"></mk-tree>
            </div>
            <slot name="tree"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'mk-tree',
        props: {
            data: {
                type: Array,
                default: _ => [],
            },
            load: {
                type: Function,
                default: _ => {}
            },
            lazy: {
                type: Boolean | String,
                default: false
            }
        },
        methods: {
            findCls(e, cls) {
                const arr = e.className.split(/\s+/)
                const index = arr.indexOf(cls)
                return index
            },
            rmCls(e, cls) {
                console.log(e)
                const arr = e.className.split(/\s+/)
                const index = arr.indexOf(cls)
                index > -1 && arr.splice(index, 1)
                e.className = arr.join(' ')
            },
            addCls(e, cls) {
                e.className += ' ' + cls.trim()
            },
            fireActive(e) {
                const parent = e.currentTarget.parentNode
                if (this.findCls(parent, 'is-active') > -1 || this.findCls(parent, 'is-open') > -1 ) {
                    this.rmCls(parent, 'is-active')
                    this.rmCls(parent, 'is-open')
                } else {
                    this.addCls(parent, 'is-active is-open')
                }
            }
        },
        mounted() {
            // console.log(this.$el, this.$el.getAttribute('lazy'), this.load)
            console.log(this, this.lazy === '', '+++')

            if (this.lazy === '' || this.lazy) {
                // ...
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
        position: relative;
    }
    .mk-tree-item:hover {
        background: #f5f7fa;
    }
    .mk-tree-item__icon {
        width: 26px;
        height: 26px;
        text-align: center;
        vertical-align: middle;
        transition: .3s;
        color: #c0c4cc;
        position: absolute;
    }
    .mk-tree-item__label {
        display: inline-block;
        vertical-align: middle;
        text-indent: 26px;
    }
    .mk-tree-node {
        outline: medium;
    }
    .mk-tree-node:focus>.mk-tree-item {
        background: #f5f7fa;
    }
    .mk-tree-node.is-open>.mk-tree-item>.mk-tree-item-bar>.mk-tree-item__icon {
        transform: rotate(90deg);
    }
    .mk-tree-children {
        overflow: hidden;
        transition: .3s;
        display: none;
    }
    .mk-tree-node.is-open>.mk-tree-children {
        display:  block;
    }
</style>