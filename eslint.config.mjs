import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  { ignores: ["**/build", "**/node_modules"] },
  ...fixupConfigRules(compat.extends("@kristiandupont")),
  {
    rules: {
      quotes: "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],

    languageOptions: {
      ecmaVersion: 5,
      sourceType: "script",

      parserOptions: { createDefaultProgram: true, project: "./tsconfig.json" },
    },
  },
];
