<template>
  <a-config-provider :locale="locale">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <a-empty />
    <a-date-picker v-model:value="date" />
  </a-config-provider>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
// ant-design-vue 目前的默认文案是英文, 修改为中文
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import moment, { Moment } from 'moment';
import HelloWorld from './components/HelloWorld.vue';

import 'moment/dist/locale/zh-cn';

const locale = ref(zhCN);
// TODO moment 替换成 dayjs 并使用中文
const date = ref<Moment>(moment());
// export default defineComponent({
//   name: 'App',
//   components: {
//     HelloWorld,
//   },
// });
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
