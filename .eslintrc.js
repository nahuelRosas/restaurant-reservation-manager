/** @type {import("eslint").Linter.Config} */

module.exports = {
  extends: ["@restaurant-reservation-manager/eslint-config/library.js"],
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["*.js"],
  parserOptions: {
    project: true,
  },
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
  root: true,
};
