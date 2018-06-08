module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    "browser": true,
  },
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
    'prettier',
    'prettier/react',
  ],
  plugins: ['import', 'react', 'prettier', 'react-native'],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/no-unused-prop-types': ['error', {
      skipShapeProps: true,
    }],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/react-in-jsx-scope': 2,
    'react/prop-types': 2,
    'react/forbid-prop-types': 0,
    'no-use-before-define': 0,
    'no-empty-pattern': 0,
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
    }],
    'class-methods-use-this': ['error', {
      exceptMethods: [
        'getChildContext',
        'componentDidMount',
        'componentWillMount',
        'componentWillUnmount',
        'componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'componentDidUpdate',
        'render',
      ],
    }],
    'no-plusplus': ['error', {
      allowForLoopAfterthoughts: true,
    }],
    // prettier compatibility
    'max-len': 0,
    'prettier/prettier': [
      'error',
      { singleQuote: true, trailingComma: 'all', printWidth: 100, tabWidth: 2 },
    ],
    'linebreak-style': 0,
    'no-underscore-dangle': 0,
  },
};
