module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // 'plugin:react/recommended',
  extends: ['standard-with-typescript', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
        project: ['./tsconfig.json', './vite.config.ts'],
        tsconfigRootDir: __dirname,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
};
