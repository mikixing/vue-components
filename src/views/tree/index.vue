<template>
    <div class="mk-tree">
        <div class="mk-tree-item">
            <div class="mk-tree-item-bar is-active">
                <span class="mk-tree-item__icon"><i class="iconfont icon-triangle-arrow-d"></i></span>
                <span clss="mk-tree-label">一级1</span>
            </div>
            <div class="mk-tree-item-children">
                <div class="mk-tree-item">
                    <div class="mk-tree-item-bar">
                        <span class="mk-tree-item__icon"><i class="iconfont icon-triangle-arrow-d"></i></span>
                        <span clss="mk-tree-label">二级1-1</span>
                    </div>
                    <div class="mk-tree-item-children">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'mk-tree'
    }
</script>
<style lang="postcss">
    .mk-tree {
        text-align: left;
    }
    .mk-tree-item {
        padding-left: 20px;
        font-size: 14px;
        line-height: 20px;
    }
    .mk-tree-item-bar {
        cursor: pointer;
    }
    .mk-tree-item__icon {
        display: inline-block;
        width: 20px;
        height: 20px;
        text-align: center;
        vertical-align: middle;
    }
    .is-active {
        background: #f5f7fa;
    }
    .mk-tree-item-bar.is-active>.mk-tree-item__icon {
        transform: rotate(90deg);
    }
</style>