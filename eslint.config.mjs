import { defineConfig } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([{
    extends: [...nextCoreWebVitals],

    rules: {
        "no-unused-vars": "error",
        "no-undef": "error",
        "no-console": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
    },
}]);