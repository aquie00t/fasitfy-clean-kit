import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import prettierPluginRecommended from "eslint-plugin-prettier/recommended";

export default defineConfig([
  {
    ignores: ["**/*.js", "**/*.cjs", "**/*.mjs", "**/*.test.ts", "**/*.d.ts"],
    files: ["**/*.ts"],
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        projectService: true,
        tsConfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      tseslint,
      prettierPlugin,
    },
    extends: [
      tseslint.configs.recommendedTypeChecked,
      prettierConfig,
      prettierPluginRecommended,
    ],
    rules: {
      "no-console": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/require-await": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: false,
        },
      ],
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/prefer-nullish-coalescing": "warn",
      "@typescript-eslint/switch-exhaustiveness-check": "warn",
      "@typescript-eslint/strict-boolean-expressions": "warn",
      "@typescript-eslint/no-unnecessary-type-assertion": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
    },
  },
]);
