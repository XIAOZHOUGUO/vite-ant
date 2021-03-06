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
    // 'prettier/prettier': ['warn'],
    'prettier/prettier': ['off'],
    'no-unused-expressions': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'global-require': ['off'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    'vue/no-multiple-template-root': ['off'],
    'vue/comment-directive': ['off'],
    'vue/no-v-model-argument': ['off'],
    'import/no-unresolved': ['off'],
    'import/extensions': ['off'],
    'class-methods-use-this': ['off'],
    'import/prefer-default-export': ['off'],
    'no-unused-vars': ['off'],
    'no-param-reassign': ['off'],
    'no-use-before-define': ['off'],
    'no-return-assign': ['off'],
  },
};
