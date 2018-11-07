const path = require('path');

const chalk = require('chalk');
const yargs =  require('yargs')

const {createDirectory, printDirectoryListing} = require('./create-directory-structure');
const generate_files = require('./generate-files');

const parseArguments = () => {
    return yargs
            .option('nojson', {default: false})
            .option('nocsv', {default: false})
            .command('generate path', 'generate user and transactions files in <path>', yargs => {
                yargs.positional('path', {
                        describe: 'path to store the files in',
                        default: path.join(process.cwd(), 'tmp')
                    })
                }, argv => {
                    if (argv.nojson){
                        console.log(chalk.yellow(`Will NOT generate JSON files in ${argv.path}`))
                    }

                    if (argv.nocsv){
                        console.log(chalk.yellow(`Will NOT generate CSV files in ${argv.path}`))
                    }
                })
            .demandCommand(2)
            .help()
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
