import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "react/no-unescaped-entities": "error",
      "@next/next/no-img-element": "error",
      "jsx-a11y/alt-text": "error",
      "react/jsx-no-duplicate-props": "error",
      "react/no-array-index-key": "error",
      "react/self-closing-comp": "error",
      "react/jsx-pascal-case": "error",
      "react/jsx-no-useless-fragment": "error",
      "react/jsx-curly-brace-presence": "error",
      "react/jsx-boolean-value": "error",
      "react/jsx-closing-tag-location": "error",
      "react/jsx-closing-bracket-location": "error",
      "react/jsx-tag-spacing": "error",
      "react/jsx-wrap-multilines": "error",
      "react/jsx-indent": ["error", 2],
      "react/jsx-indent-props": ["error", 2],
      "react/jsx-max-props-per-line": ["error", { "maximum": 1 }],
      "react/jsx-first-prop-new-line": ["error", "multiline"],
      "react/jsx-equals-spacing": ["error", "never"],
      "react/jsx-curly-spacing": ["error", "never"],
      "react/jsx-curly-newline": ["error", "never"],
      "react/jsx-child-element-spacing": "error",
      "react/jsx-handler-names": "error",
      "react/jsx-key": "error",
      "react/jsx-no-bind": "error",
      "react/jsx-no-constructed-context-values": "error",
      "react/jsx-no-leaked-render": "error",
      "react/jsx-no-script-url": "error",
      "react/jsx-no-target-blank": "error",
      "react/jsx-no-undef": "error",
      "react/jsx-one-expression-per-line": "error",
      "react/jsx-props-no-multi-spaces": "error",
      "react/jsx-props-no-spreading": "error",
      "react/jsx-sort-default-props": "error",
      "react/jsx-sort-props": "error",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/no-access-state-in-setstate": "error",
      "react/no-children-prop": "error",
      "react/no-danger": "error",
      "react/no-deprecated": "error",
      "react/no-direct-mutation-state": "error",
      "react/no-find-dom-node": "error",
      "react/no-is-mounted": "error",
      "react/no-render-return-value": "error",
      "react/no-string-refs": "error",
      "react/no-unknown-property": "error",
      "react/no-unsafe": "error",
      "react/no-will-update-set-state": "error",
      "react/require-default-props": "error",
      "react/require-optimization": "error",
      "react/require-render-return": "error",
      "react/self-closing-comp": "error",
      "react/sort-comp": "error",
      "react/sort-prop-types": "error",
      "react/state-in-constructor": "error",
      "react/static-property-placement": "error",
      "react/void-dom-elements-no-children": "error"
    },
  },
];

export default eslintConfig;
