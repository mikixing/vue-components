<template>
    <div class="mk-tree">
        <div class="mk-tree-node" v-for="(item, i) in data" v-bind:key="i" :tabindex="i">
            <div class="mk-tree-item" @click="fireActive" >
                <div class="mk-tree-item-bar">
                    <span class="mk-tree-item__icon" v-if="item.children && item.children.length"><i class="iconfont icon-triangle-arrow-d"></i></span>
                    <span class="mk-tree-item__icon" v-if="lazy"><i class="iconfont icon-spinner"></i></span>
                    <span class="mk-tree-item__label">{{item.label}}</span>
                </div>
            </div>
            <div class="mk-tree-children" v-if="item.children && item.children.length && !lazy">
                <mk-tree :data="item.children" ></mk-tree>
            </div>
            <div class="mk-tree-children" v-if="lazy">
                <mk-tree :data="childrenData" :load="load" lazy abc="abc" def></mk-tree>
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
                default: _ => [],
            },
            load: {
                type: Function,
                default: _ => {
                    console.log('lazy boy')
                }
            }
        },
        data() {
            return {
                lazy: '',
                childrenData: []
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
                    if (this.lazy) {
                        new Promise((r, j) => {
                            this.load(e, r, j)
                        }).then(val => {
                            this.childrenData = val
                        })
                    }
                }
            }
        },
        watch: {
            childrenData() {
                console.log('childrenData change')
            }
        },
        mounted() {
            this.$nextTick(_ => {
                if (this.$el.getAttribute('lazy') === '') {
                    this.lazy = true
                }
                if (this._uid === 4) {
                    if (!this.$el.getAttribute('lazy')) {
                        window.tree = this
                        debugger
                    }
                }
            })
        }
    }
</script>
<style lang="postcss">
    * {
        outline: none;
    }
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
    }
    .mk-tree-item__label {
        display: inline-block;
        vertical-align: middle;
        margin-left: 8px;
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