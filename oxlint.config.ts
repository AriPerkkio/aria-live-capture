import { defineConfig } from "oxlint";

export default defineConfig({
  options: {
    typeAware: true,
  },
  rules: {
    "typescript/consistent-type-imports": ["error", { prefer: "type-imports" }],
  },
  ignorePatterns: ["dist", "docs"],
});
