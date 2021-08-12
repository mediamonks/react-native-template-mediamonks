module.exports = {
  printWidth: 100,
  tabWidth: 2,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 999999,
      },
    },
  ],
};
