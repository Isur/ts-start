module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "import"],
  parser: "@typescript-eslint/parser",
  env: {
    node: true,
  },
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  root: true,
  overrides: [
    {
      files: ["*.js"],
      extends: ["plugin:@typescript-eslint/disable-type-checked"],
    },
  ],
  rules: {
    "lines-between-class-members": [
      "warn",
      "always",
      {
        exceptAfterSingleLine: true,
      },
    ],
    "no-multiple-empty-lines": [
      "warn",
      {
        max: 1,
        maxEOF: 1,
      },
    ],
    "no-duplicate-imports": "warn",
    "no-console": "warn",
    "arrow-spacing": "warn",
    "block-spacing": "warn",
    "brace-style": [
      "warn",
      "1tbs",
      {
        allowSingleLine: true,
      },
    ],
    "comma-spacing": "warn",
    "dot-location": ["warn", "property"],
    "eol-last": ["warn", "always"],
    "no-trailing-spaces": "warn",
    semi: ["warn", "always"],
    "import/newline-after-import": [
      "warn",
      {
        count: 1,
      },
    ],
    "space-before-blocks": "warn",
  },
};
