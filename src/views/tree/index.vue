<template>
    <tree :treeList="arr">
        <tree></tree>
    </tree>
</template>
<script>
    import tree from './tree.vue'
    export default {
        name: 'mk-tree',
        data() {
            return {
                arr: [{
                    label: '一级一级1',
                    children: [{
                        label: '二级二级1-1',
                        children: [{
                            label: '三级三级1-1-1'
                        }]
                    }]
                }]
            }
        },
        components: {
            tree
        }
    }
</script>
<style lang="postcss">
    
</style>