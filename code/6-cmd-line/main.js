const path = require('path');

const chalk = require('chalk');
const yargs =  require('yargs')

const {createDirectory, printDirectoryListing} = require('./create-directory-structure');
const generate_files = require('./generate-files');

// yargs documentation - https://github.com/yargs/yargs
const parseArguments = () => {
    return yargs
            // add a nojson option, make the default false
            // add a nocsv option, make the default false
            // add a command to generate the files
            // make sure this command always takes 2 variables
            // add a help
            .argv;
}

function main() {
    const parsedArguments = parseArguments();
    const includedTypes = {
        json: !parsedArguments['nojson'],
        csv: !parsedArguments['nocsv']
    }
    const directory = createDirectory(parsedArguments.path);
    generate_files(directory, includedTypes).then(printDirectoryListing(directory)).catch(err => console.error(err));
}

main();
