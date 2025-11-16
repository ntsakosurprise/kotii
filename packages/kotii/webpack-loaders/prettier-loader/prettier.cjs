
const prettier = require("prettier");



const createPretier = async function(prettiersOptions){

    const {configPath} = prettiersOptions
    const options = await prettier.resolveConfig(configPath);
    
    return {
        prettier,
        prettierOptions: options

    }

}

module.exports = createPretier

