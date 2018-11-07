const fs = require('fs');         
const path = require('path');     

const generate_files = require('./generate-files');

const DEPTH_MULTIPLIER = 1;
const ROOT_DIR = process.cwd();
const FILE_COUNT = 10;

const file_tree = {
  lastFile: '└── ',
  file: '├── ',
  connector: '│',
  space: ' ',
}

/**
 * @function createDirectory
 *
 * @param {String} directory - the directory under which will be created
 *
 * @returns {String} the newly created directory path
 *
 */

function createDirectory(directory){
  const exists = fs.existsSync(directory);

  if (!exists){
    fs.mkdirSync(directory);
  } else {
    const fd = fs.openSync(directory, 'r');
    const stats = fs.fstatSync(fd);

    if (stats.isFile()){
      console.error(`${directory} already exists and is a file. Remove it to continue`);
      process.exit(1);
    } else {
      console.log(`${directory} already exists. Adding files into there`);
    }
  }

  return directory;
}

/**
 * @method printDirectoryListing
 *
 * @param {String} directory - the directory to print out
 * @param {Number} [depth=1] - the depth at which contents are printed
 *
 * @returns {void}
 */
function printDirectoryListing(directory, depth = 1){
  const prefix = file_tree.space.repeat(depth * DEPTH_MULTIPLIER);
  const directory_contents = fs.readdirSync(directory);
  console.log(path.basename(directory));
  for (let i = 0; i < directory_contents.length - 1; i++){
    console.log(`${prefix}${file_tree.file}${directory_contents[i]}`);
  }

  const last_file = directory_contents[directory_contents.length - 1]
  console.log(`${prefix}${file_tree.lastFile}${last_file}`);
}

module.exports = { printDirectoryListing, createDirectory }

