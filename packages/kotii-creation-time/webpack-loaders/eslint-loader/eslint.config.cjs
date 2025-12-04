const reactEslintPlugin = require("eslint-plugin-react")
const js =  require("@eslint/js");

module.exports = [
    js.configs.recommended,
    reactEslintPlugin.configs.flat.recommended,
    {
        files: ["**/*.js", "**/*.mjs", "**/*.jsx"],
        ignores:["!**/node_modules/"],
        plugins: {
          reactEslintPlugin
        },
        languageOptions: {    
            ecmaVersion: "latest",
            sourceType: "module",
            parserOptions: {
                ecmaFeatures: {
                  jsx: true
                },
            },
        },
        rules: {
            "semi": "error",
            "no-unused-vars": "error"
        }
    }
];