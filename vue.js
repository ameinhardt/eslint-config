module.exports = {
  env: {
    browser: true
  },
  extends: ['@ameinhardt/eslint-config/typescript'],
  overrides: [{
    extends: ['plugin:vue/vue3-recommended', '@ameinhardt/eslint-config/typescript'],
    files: ['*.vue'],
    globals: {
      defineEmits: 'readonly',
      defineExpose: 'readonly',
      defineProps: 'readonly',
      withDefaults: 'readonly'
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      sourceType: 'module'
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-deprecated-slot-attribute': 'off',
      'vue/script-setup-uses-vars': 'error'
    }
  }],
  rules: {
    'no-console':
      process.env.NODE_ENV === 'production' ? ['warn', { allow: ['log', 'debug', 'info', 'warn', 'error'] }] : 'off'
  }
};
