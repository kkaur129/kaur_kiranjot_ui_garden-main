import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactPlugin from "eslint-plugin-react";
import prettier from "eslint-config-prettier";

export default tseslint.config(js.configs.recommended, ...tseslint.configs.recommended, prettier, {
  files: ["**/*.{js,jsx,ts,tsx}"],
  languageOptions: {
    parser: tseslint.parser,
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: {
    "react-hooks": reactHooks,
    react: reactPlugin,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    ...reactPlugin.configs.recommended.rules,
    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities": "off",
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  ignores: ["node_modules", "build", "storybook-static"],
});
