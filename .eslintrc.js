module.exports = {
    env: {
      commonjs: true, 
      es6: true, 
      jest: true, 
      node: true 
    },
    extends: ['standard'],
    parser: "babel-eslint",
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 2018, 
      sourceType: "module" 
    },
    root: true,
    rules: {
      'comma-dangle': 'off',
      'space-before-function-paren': 'off',
    },
    settings: {
      react: {
          version: "detect"
      }
    }
}