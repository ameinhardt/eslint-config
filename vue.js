module.exports = {
  overrides: [{
    files: ['*.vue'],
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      sourceType: 'module'
    },
    globals: {
      defineProps: 'readonly',
      defineEmits: 'readonly',
      defineExpose: 'readonly',
      withDefaults: 'readonly'
    },
    extends: ['plugin:vue/vue3-recommended', '@ameinhardt/eslint-config/typescript'],
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/script-setup-uses-vars': 'error',
      'vue/no-deprecated-slot-attribute': 'off'
    }
  }],
  env: {
    browser: true
  },
  extends: ['@ameinhardt/eslint-config/typescript'],
  rules: {
    'no-console':
      process.env.NODE_ENV === 'production' ? ['warn', { allow: ['log', 'debug', 'info', 'warn', 'error'] }] : 'off'
  }
};
