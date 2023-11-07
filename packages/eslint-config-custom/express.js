module.exports = {
    env: {
      node: true,
    },
    parser: "@typescript-eslint/parser",
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier",
    ],
    plugins: ["@typescript-eslint"],
    parserOptions: {
      sourceType: "module",
      ecmaVersion: 2020,
      'no-unused-vars': ["error", { "argsIgnorePattern": "^_" }]
    },
    rules: {
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  };
  