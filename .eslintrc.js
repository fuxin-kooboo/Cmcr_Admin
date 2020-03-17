module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    '@vue/standard',
    'plugin:vue/strongly-recommended'
  ],
  plugins: [
    // 'html'
    'vue'
  ],
  rules:{
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': 'off',
    'generator-star-spacing': 'off',
    'vue/name-property-casing': ['error', 'kebab-case'],

    'vue/max-attributes-per-line': ['error', {
      'singleline': 5,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'vue/script-indent': ['error', 2, {'baseIndent': 1, 'switchCase': 1}],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'never',
        'normal': 'never',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}