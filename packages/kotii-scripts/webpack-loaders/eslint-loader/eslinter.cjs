
const { ESLint } = require("eslint");


const createLinter = async function(linterOptions){

    const {configPath} = linterOptions
    // 1. Create an instance.
    const eslint = new ESLint({
        overrideConfigFile: configPath

    });
    const formatter = await eslint.loadFormatter("stylish");
    return {
        linter: eslint,
        formatter: formatter
    }

    // (async function main() {
        
    
    //     // 2. Lint files.
    //     const results = await eslint.lintFiles([lintDirectory]);
    
    //     // 3. Format the results.
    //     const formatter = await eslint.loadFormatter("stylish");
    //     const resultText = formatter.format(results);
    
    //     // 4. Output it.
    //     console.log(resultText);
    // })().catch((error) => {
    //     process.exitCode = 1;
    //     console.error(error);
    // });


}

module.exports = createLinter

