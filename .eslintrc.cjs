module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  // "parser": "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "@typescript-eslint/no-unused-vars": "error",
    "@next/next/no-html-link-for-pages": "off",
    "@next/next/no-img-element": "off",
    "react/react-in-jsx-scope": "off",
    "import/no-anonymous-default-export": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
    "react/prop-types": 0,
    "prettier/prettier": ["error"],
    "global-require": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "react/no-string-refs": "off",
    "react/no-unescaped-entities": "off",
    "react/display-name": "off",
    "import/export": "off",
    "no-empty": "off",
    "import/no-named-as-default": "off",
    "import/default": "off",
    "import/namespace": "off",
    "import/no-named-as-default-membe": "off",
    "react/no-multi-comp": ["error"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: false,
        },
      },
    ],
    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
      },
    ],
    // "no-restricted-imports": [
    //   "error",
    //   {
    //     "paths": ["lodash"],
    //     "patterns": ["../../*", "*.css"]
    //   }
    // ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/interface-name-prefix": "off",
  },
  globals: {
    window: true,
    document: true,
    localStorage: true,
    FormData: true,
    FileReader: true,
    Blob: true,
    navigator: true,
  },
  settings: {
    react: {
      version: "17.0.2",
    },
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "."],
        paths: ["src"],
      },
    },
  },
};
