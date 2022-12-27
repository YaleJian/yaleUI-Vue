<template>
    <div class="home">
        <div class="title">
            <span>{{ title }}</span>
        </div>
        <div class="introduce">轻量级的UI库，助力快速开发和底层设计。</div>
    </div>
</template>

<script setup>
import {ref} from "vue";

const title = ref(import.meta.env.VITE_TITLE || 'Yale UI')

</script>
<style lang="less" scoped>
.home {
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    margin: 20px 0;
    text-align: center;
    position: relative;

    &:before{
        content: "";
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: .8;
        pointer-events: none;
        background: no-repeat center / cover;
        background-image: url(https://gw.alipayobjects.com/zos/bmw-prod/a6c3488a-994c-4dd3-8e92-2324d9a1ca48/l9dmd9wl_w2858_h1864.png);
    }

    & .title {
        margin-bottom: 20px;
        font-weight: 900;
        font-size: 68px;

        & span {
            color: transparent;
            text-shadow: 0 10px 20px rgb(22 119 255 / 15%);
            background: linear-gradient(30deg, #91d6ff 30%, #66a6ff);
            background-clip: text;
        }
    }

    & .introduce {
        color: #767575;
    }
}
</style>