module.exports = {
  printWidth: 100, // 一行的字符数，如果超过会进行换行，默认为80
  tabWidth: 2, // 一个tab代表几个空格数
  useTabs: false, // 启用tab缩进
  semi: true, // 行位是否使用分号，默认为true
  vueIndentScriptAndStyle: true,
  singleQuote: false, // 字符串是否使用单引号，默认为false，使用双引号
  quoteProps: "as-needed",
  bracketSpacing: true, // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  trailingComma: "es5", // 是否使用尾逗号，有三个可选值"<none|es5|all>"
  tsxBracketSameLine: false,
  tsxSingleQuote: false, //jsx中是否使用单引号
  tsBracketSameLine: false,
  tsSingleQuote: false,
  arrowParens: "always",
  insertPragma: false,
  requirePragma: false,
  proseWrap: "never",
  htmlWhitespaceSensitivity: "strict",
  // endOfLine: "lf",
  rangeStart: 0,
  overrides: [
    {
      files: "*.md",
      options: {
        tabWidth: 2,
      },
    },
  ],
};
