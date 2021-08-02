module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended', // 添加 Prettier 插件
  ],

  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },

  plugins: ['vue', '@typescript-eslint'],

  rules: {
    'no-unused-expressions': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'global-require': ['off'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': ['warn'],
    'vue/no-multiple-template-root': ['off'],
    'vue/comment-directive': ['off'],
    'vue/no-v-model-argument': ['off'],
  },
};
