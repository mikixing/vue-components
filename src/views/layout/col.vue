<template>
    <div class="mk-layout-col" :class="grid">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'mk-layout',
        props: {
            span: {
                default: ''
            },
            xs: {
                default: ''
            },
            sm: {
                default: ''
            },
            md: {
                default: ''
            },
            lg: {
                default: ''
            },
            xl: {
                default: ''
            },
        },
        computed: {
            grid() {
                let res = ''
                res += this.xs ? ' mk-layout-col-xs__' + this.xs : ''
                res += this.sm ? ' mk-layout-col-sm__' + this.sm : ''
                res += this.md ? ' mk-layout-col-md__' + this.md : ''
                res += this.lg ? ' mk-layout-col-lg__' + this.lg : ''
                res += this.xl ? ' mk-layout-col-xl__' + this.xl : ''
                res += this.span ? ' .mk-layout-col__' + this.span : ''
                return res
            }
        }
    }
</script>
<style lang="postcss">
    .mk-layout-col {
        float: left;
        width: 100%;
        box-sizing: border-box;
    }
    .mk-layout-col__1 {
        width: 4.16%
    }
    .mk-layout-col__2 {
        width: 8.33%
    }
    .mk-layout-col__3 {
        width: 12.5%
    }
    .mk-layout-col__4 {
        width: 16.66%
    }
    .mk-layout-col__5 {
        width: 20.83%
    }
    .mk-layout-col__6 {
        width: 25%
    }
    .mk-layout-col__7 {
        width: 29.16%
    }
    .mk-layout-col__8 {
        width: 33.33%
    }
    .mk-layout-col__9 {
        width: 37.5%
    }
    .mk-layout-col__10 {
        width: 41.66%
    }
    .mk-layout-col__11 {
        width: 45.83%
    }
    .mk-layout-col__12 {
        width: 50%
    }
    .mk-layout-col__13 {
        width: 54.16%
    }
    .mk-layout-col__14 {
        width: 58.33%
    }
    .mk-layout-col__15 {
        width: 62.5%
    }
    .mk-layout-col__16 {
        width: 66.66%
    }
    .mk-layout-col__17 {
        width: 70.83%
    }
    .mk-layout-col__18 {
        width: 75%
    }
    .mk-layout-col__19 {
        width: 79.16%
    }
    .mk-layout-col__20 {
        width: 83.33%
    }
    .mk-layout-col__21 {
        width: 87.5%
    }
    .mk-layout-col__22 {
        width: 91.66%
    }
    .mk-layout-col__23 {
        width: 95.83%
    }
    @media screen and (max-width: 768px) {
        .mk-layout-col-xs__1 {
            width: 4.16%
        }
        .mk-layout-col-xs__2 {
            width: 8.33%
        }
        .mk-layout-col-xs__3 {
            width: 12.5%
        }
        .mk-layout-col-xs__4 {
            width: 16.66%
        }
        .mk-layout-col-xs__5 {
            width: 20.83%
        }
        .mk-layout-col-xs__6 {
            width: 25%
        }
        .mk-layout-col-xs__7 {
            width: 29.16%
        }
        .mk-layout-col-xs__8 {
            width: 33.33%
        }
        .mk-layout-col-xs__9 {
            width: 37.5%
        }
        .mk-layout-col-xs__10 {
            width: 41.66%
        }
        .mk-layout-col-xs__11 {
            width: 45.83%
        }
        .mk-layout-col-xs__12 {
            width: 50%
        }
        .mk-layout-col-xs__13 {
            width: 54.16%
        }
        .mk-layout-col-xs__14 {
            width: 58.33%
        }
        .mk-layout-col-xs__15 {
            width: 62.5%
        }
        .mk-layout-col-xs__16 {
            width: 66.66%
        }
        .mk-layout-col-xs__17 {
            width: 70.83%
        }
        .mk-layout-col-xs__18 {
            width: 75%
        }
        .mk-layout-col-xs__19 {
            width: 79.16%
        }
        .mk-layout-col-xs__20 {
            width: 83.33%
        }
        .mk-layout-col-xs__21 {
            width: 87.5%
        }
        .mk-layout-col-xs__22 {
            width: 91.66%
        }
        .mk-layout-col-xs__23 {
            width: 95.83%
        }
    }
    @media screen and (min-width: 769px) and (max-width: 991px) {
        .mk-layout-col-sm__1 {
            width: 4.16%
        }
        .mk-layout-col-sm__2 {
            width: 8.33%
        }
        .mk-layout-col-sm__3 {
            width: 12.5%
        }
        .mk-layout-col-sm__4 {
            width: 16.66%
        }
        .mk-layout-col-sm__5 {
            width: 20.83%
        }
        .mk-layout-col-sm__6 {
            width: 25%
        }
        .mk-layout-col-sm__7 {
            width: 29.16%
        }
        .mk-layout-col-sm__8 {
            width: 33.33%
        }
        .mk-layout-col-sm__9 {
            width: 37.5%
        }
        .mk-layout-col-sm__10 {
            width: 41.66%
        }
        .mk-layout-col-sm__11 {
            width: 45.83%
        }
        .mk-layout-col-sm__12 {
            width: 50%
        }
        .mk-layout-col-sm__13 {
            width: 54.16%
        }
        .mk-layout-col-sm__14 {
            width: 58.33%
        }
        .mk-layout-col-sm__15 {
            width: 62.5%
        }
        .mk-layout-col-sm__16 {
            width: 66.66%
        }
        .mk-layout-col-sm__17 {
            width: 70.83%
        }
        .mk-layout-col-sm__18 {
            width: 75%
        }
        .mk-layout-col-sm__19 {
            width: 79.16%
        }
        .mk-layout-col-sm__20 {
            width: 83.33%
        }
        .mk-layout-col-sm__21 {
            width: 87.5%
        }
        .mk-layout-col-sm__22 {
            width: 91.66%
        }
        .mk-layout-col-sm__23 {
            width: 95.83%
        }
    }
    @media screen and (min-width: 992px) and (max-width: 1199px) {
        .mk-layout-col-md__1 {
            width: 4.16%
        }
        .mk-layout-col-md__2 {
            width: 8.33%
        }
        .mk-layout-col-md__3 {
            width: 12.5%
        }
        .mk-layout-col-md__4 {
            width: 16.66%
        }
        .mk-layout-col-md__5 {
            width: 20.83%
        }
        .mk-layout-col-md__6 {
            width: 25%
        }
        .mk-layout-col-md__7 {
            width: 29.16%
        }
        .mk-layout-col-md__8 {
            width: 33.33%
        }
        .mk-layout-col-md__9 {
            width: 37.5%
        }
        .mk-layout-col-md__10 {
            width: 41.66%
        }
        .mk-layout-col-md__11 {
            width: 45.83%
        }
        .mk-layout-col-md__12 {
            width: 50%
        }
        .mk-layout-col-md__13 {
            width: 54.16%
        }
        .mk-layout-col-md__14 {
            width: 58.33%
        }
        .mk-layout-col-md__15 {
            width: 62.5%
        }
        .mk-layout-col-md__16 {
            width: 66.66%
        }
        .mk-layout-col-md__17 {
            width: 70.83%
        }
        .mk-layout-col-md__18 {
            width: 75%
        }
        .mk-layout-col-md__19 {
            width: 79.16%
        }
        .mk-layout-col-md__20 {
            width: 83.33%
        }
        .mk-layout-col-md__21 {
            width: 87.5%
        }
        .mk-layout-col-md__22 {
            width: 91.66%
        }
        .mk-layout-col-md__23 {
            width: 95.83%
        }
    }
    @media screen and (min-width: 1200px) and (max-width: 1919px) {
        .mk-layout-col-lg__1 {
            width: 4.16%
        }
        .mk-layout-col-lg__2 {
            width: 8.33%
        }
        .mk-layout-col-lg__3 {
            width: 12.5%
        }
        .mk-layout-col-lg__4 {
            width: 16.66%
        }
        .mk-layout-col-lg__5 {
            width: 20.83%
        }
        .mk-layout-col-lg__6 {
            width: 25%
        }
        .mk-layout-col-lg__7 {
            width: 29.16%
        }
        .mk-layout-col-lg__8 {
            width: 33.33%
        }
        .mk-layout-col-lg__9 {
            width: 37.5%
        }
        .mk-layout-col-lg__10 {
            width: 41.66%
        }
        .mk-layout-col-lg__11 {
            width: 45.83%
        }
        .mk-layout-col-lg__12 {
            width: 50%
        }
        .mk-layout-col-lg__13 {
            width: 54.16%
        }
        .mk-layout-col-lg__14 {
            width: 58.33%
        }
        .mk-layout-col-lg__15 {
            width: 62.5%
        }
        .mk-layout-col-lg__16 {
            width: 66.66%
        }
        .mk-layout-col-lg__17 {
            width: 70.83%
        }
        .mk-layout-col-lg__18 {
            width: 75%
        }
        .mk-layout-col-lg__19 {
            width: 79.16%
        }
        .mk-layout-col-lg__20 {
            width: 83.33%
        }
        .mk-layout-col-lg__21 {
            width: 87.5%
        }
        .mk-layout-col-lg__22 {
            width: 91.66%
        }
        .mk-layout-col-lg__23 {
            width: 95.83%
        }
    }
    @media screen and (min-width: 1920px) {
        .mk-layout-col-xl__1 {
            width: 4.16%
        }
        .mk-layout-col-xl__2 {
            width: 8.33%
        }
        .mk-layout-col-xl__3 {
            width: 12.5%
        }
        .mk-layout-col-xl__4 {
            width: 16.66%
        }
        .mk-layout-col-xl__5 {
            width: 20.83%
        }
        .mk-layout-col-xl__6 {
            width: 25%
        }
        .mk-layout-col-xl__7 {
            width: 29.16%
        }
        .mk-layout-col-xl__8 {
            width: 33.33%
        }
        .mk-layout-col-xl__9 {
            width: 37.5%
        }
        .mk-layout-col-xl__10 {
            width: 41.66%
        }
        .mk-layout-col-xl__11 {
            width: 45.83%
        }
        .mk-layout-col-xl__12 {
            width: 50%
        }
        .mk-layout-col-xl__13 {
            width: 54.16%
        }
        .mk-layout-col-xl__14 {
            width: 58.33%
        }
        .mk-layout-col-xl__15 {
            width: 62.5%
        }
        .mk-layout-col-xl__16 {
            width: 66.66%
        }
        .mk-layout-col-xl__17 {
            width: 70.83%
        }
        .mk-layout-col-xl__18 {
            width: 75%
        }
        .mk-layout-col-xl__19 {
            width: 79.16%
        }
        .mk-layout-col-xl__20 {
            width: 83.33%
        }
        .mk-layout-col-xl__21 {
            width: 87.5%
        }
        .mk-layout-col-xl__22 {
            width: 91.66%
        }
        .mk-layout-col-xl__23 {
            width: 95.83%
        }
    }
</style>