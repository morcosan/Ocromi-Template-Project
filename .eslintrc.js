module.exports = {
   root: true,
   env: {
      node: true,
   },
   extends: [
      'plugin:vue/essential',
      'eslint:recommended',
      '@vue/typescript/recommended',
   ],
   parserOptions: {
      ecmaVersion: 2020,
   },
   globals: {
      ga: true, // Google Analytics
      process: true,
      globalThis: false, // means it is not writeable
   },
   rules: {
      'prefer-promise-reject-errors': 'off',
      'quotes': ['warn', 'single'],
      '@typescript-eslint/camelcase': 'off',
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/ban-ts-ignore': 'off',
      'no-useless-escape': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
   },
   ignorePatterns: [
      'docs/',
      '*.js',
   ],
};
