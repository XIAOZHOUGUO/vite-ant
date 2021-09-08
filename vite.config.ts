import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import { vite2Ext } from 'apite';
import { defineConfig, loadEnv, ConfigEnv } from 'vite';
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components';
// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv) => {
  // eg: import.meta.env.VITE_BASE_URL -> process.env.VITE_BASE_URL
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, 'src'),
        },
      ],
    },
    plugins: [
      vue(),
      ViteComponents({
        customComponentResolvers: [AntDesignVueResolver()],
      }),
      // @ts-ignore
      vite2Ext({
        dir: 'mock',
        docTitle: 'Apite 文档',
      }),
    ],
    server: {
      cors: true,
      // proxy: {
      //   '/api': {
      //     target: process.env.VITE_API_URL,
      //     changeOrigin: true,
      //     rewrite: path => path.replace(/^\/api/, '/api'),
      //   },
      // },
    },
    build: {
      target: 'modules', // 设置最终构建的浏览器兼容目标，默认构建为支持原生 ES 模块。可选 es2015 等
      outDir: 'dist', // 默认打包到 dist 文件夹
    },
  });
};
// export default defineConfig({
//   plugins: [
//     vue(),
//     ViteComponents({
//       customComponentResolvers: [AntDesignVueResolver()],
//     }),
//   ],
// });
