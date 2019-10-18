<template>
    <div class="mk-tree">
        <div class="mk-tree-node" v-for="(item, i) in data" v-bind:key="i" :tabindex="i">
            <div class="mk-tree-item" @click="fireActive" v-if="!lazy">
                <div class="mk-tree-item-bar">
                    <span class="mk-tree-item__icon mk-tree-item__icon-triangle" v-if="item.children && item.children.length"><i class="iconfont icon-triangle-arrow-d"></i></span>
                    <span class="mk-tree-item__label">{{item.label}}</span>
                </div>
            </div>
            <div class="mk-tree-item" @click="fireActive" v-else>
                <div class="mk-tree-item-bar">
                    <span class="mk-tree-item__icon mk-tree-item__icon-triangle"><i class="iconfont icon-triangle-arrow-d"></i></span>
                    <span class="mk-tree-item__icon mk-tree-item__icon-spin" v-show="!searchFlag"><i class="iconfont icon-spinner"></i></span>
                    <span class="mk-tree-item__label">{{item.label}}</span>
                </div>
            </div>
            <div class="mk-tree-children" v-if="item.children && item.children.length && !lazy">
                <mk-tree :data="item.children" ></mk-tree>
            </div>
            <div class="mk-tree-children" v-if="lazy && hasChildren">
                <mk-tree :data="childrenData" :load="load" :lazy="lazy"></mk-tree>
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
                default: _ => {}
            },
        },
        data() {
            return {
                childrenData: [],
                lazy: false,
                hasChildren: true,
                searchFlag: false,
            }
        },
        methods: {
            findCls(e, cls) {
                const arr = e.className.split(/\s+/)
                const index = arr.indexOf(cls)
                return index
            },
            rmCls(e, cls) {
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
                if (!this.lazy) {
                    if (this.findCls(parent, 'is-active') > -1 || this.findCls(parent, 'is-open') > -1 ) {
                        this.rmCls(parent, 'is-active')
                        this.rmCls(parent, 'is-open')
                    } else {
                        this.addCls(parent, 'is-active is-open')
                    }
                } else {
                    if (this.findCls(parent, 'is-active') > -1 || this.findCls(parent, 'is-open') > -1 ) {
                        this.rmCls(parent, 'is-active')
                        this.rmCls(parent, 'is-open')
                        this.rmCls(parent, 'is-search')
                    } else {
                        if (this.searchFlag) {
                            return this.addCls(parent, 'is-active is-open')
                        }
                        this.addCls(parent,' is-search')
                        new Promise((r, j) => {
                            this.load(e, r, j)
                        }).then(val => {
                            this.searchFlag = true
                            this.childrenData = val
                            if (!val.length) {
                                this.hasChildren = false
                                this.addCls(parent, ' no-children')
                            } else {
                                this.hasChildren = true
                            }
                            this.addCls(parent, 'is-active is-open')
                            this.rmCls(parent, 'is-search')
                        })
                    }
                }
            }
        },
        created() {
            if (this.$attrs.lazy === '' || this.$attrs.lazy) {
                this.lazy = true
            }
        }
    }
</script>
<style lang="postcss">
    @keyframes spin {
        from {
            transform: rotateZ(0deg);
        }
        to {
            transform: rotateZ(360deg);
        }
    }
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
    }
    .mk-tree-node {
        outline: medium;
    }
    .mk-tree-node:focus>.mk-tree-item {
        background: #f5f7fa;
    }
    .mk-tree-item__icon {
        float: left;
    }
    .mk-tree-item__icon-spin {
        margin-right: 5px;
        display: none;
    }
    .mk-tree-node.no-children>.mk-tree-item>.mk-tree-item-bar>.mk-tree-item__icon-triangle {
        display: none;
    }
    .mk-tree-node.is-open>.mk-tree-item>.mk-tree-item-bar>.mk-tree-item__icon-triangle {
        transform: rotate(90deg);
    }
    .mk-tree-node.is-search>.mk-tree-item>.mk-tree-item-bar>.mk-tree-item__icon-spin {
        animation: spin linear 2s infinite;
        display: block;
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