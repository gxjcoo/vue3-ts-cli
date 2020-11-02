module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "vue-eslint-parser",
  extends: [
    "plugin:vue/vue3-recommended",
    "@vue/prettier",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier/@typescript-eslint",
  ],
  plugins: ["@typescript-eslint/eslint-plugin"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  rules: {
    "prettier/prettier": "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-function": "off",
    "vue/custom-event-name-casing": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/camelcase": "off",
    "no-useless-escape": 0,
    // 'no-use-before-define': [
    //   'error',
    //   {
    //     functions: false,
    //     classes: true,
    //   },
    // ],
    "@typescript-eslint/no-use-before-define": "off",
    // '@typescript-eslint/no-use-before-define': [
    //   'error',
    //   {
    //     functions: false,
    //     classes: true,
    //   },
    // ],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "/^h$/u",
        varsIgnorePattern: "/^h$/u",
      },
    ],
    "no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "/^h$/u",
        varsIgnorePattern: "/^h$/u",
      },
    ],
    "space-before-function-paren": "off",
    "vue/attribute-hyphenation": "off",
  },
};
