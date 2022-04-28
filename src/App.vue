<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from './views/base/Header.vue'
import Main from "./views/base/main.vue";
</script>

<template>
    <Header/>
    <Main/>
</template>

<style>
html {
    background: #f0f3f6;
}

body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, textarea, p, blockquote, th, td, hr, button, article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    margin: 0;
    padding: 0;
}

h1 {
    margin: unset;
    margin-block: unset;
    margin-inline: unset;
}

a {
    color: unset;
    text-decoration: unset;
}

body {
    margin: 16px;
}
</style>
