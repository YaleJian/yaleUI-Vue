import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcssImport from "postcss-import"
import autoprefixer from 'autoprefixer'
import postCssPxToRem from 'postcss-pxtorem'
import postcssPresetEnv from 'postcss-preset-env'
import postcssNesting from 'postcss-nesting'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css:{
    postcss:{
      plugins:[
        postcssImport,
        autoprefixer,
        postCssPxToRem({
          rootValue: 16, // 1rem的大小
          propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
        }),
        postcssPresetEnv,
        postcssNesting
      ]
    },
  },
})
