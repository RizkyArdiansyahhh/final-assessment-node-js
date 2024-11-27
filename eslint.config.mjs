import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      semi: ["error", "always"],
      indent: ["error", 2],
      "prefer-const": "error",
      "object-curly-spacing": ["error", "always"],
    },
  },
  pluginJs.configs.recommended,
];
