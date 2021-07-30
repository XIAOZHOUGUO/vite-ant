import { defineConfig, loadEnv, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components';
import { resolve } from 'path';
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
    ],
    server: {
      cors: true,
      proxy: {
        '/api': {
          target: process.env.VITE_API_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '/api'),
        },
      },
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
