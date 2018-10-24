// we import modules from the standard library here
const fs = require('fs');         // handles file system related stuff
const path = require('path');     // handles path utilities

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
 * @function createTempDirectory
 * 
 * @param {String} parent_directory - the directory under which we'll create a new tmp directory
 *
 * @returns {String} the newly created directory path
 *
 */

function createTempDirectory(parent_directory){
  const directory_path = path.join(parent_directory, 'tmp');
  const exists = fs.existsSync(directory_path);

  if (!exists){
    console.log(`Created new temp directory ${temp_root}`);
    fs.mkdirSync(directory_path);
  } else {
    const fd = fs.openSync(directory_path, 'r');
    const stats = fs.fstatSync(fd);
    
    if (stats.isFile()){
      console.error(`${directory_path} already exists and is a file. Remove it to continue`);
      process.exit(1);
    } else {
      console.log(`${directory_path} already exists. Adding files into there`);
    }
  }

  return directory_path;
}

/**
 * @method generateNFiles
 * 
 * @param {Number} num_files - the number of files to generate
 * @param {String} parent_directory - the directory under which to create the new files
 *
 * @returns {void}
 *
 */

function generateNFiles(num_files, parent_directory){
  for (let i = 0; i < FILE_COUNT; i++){
    const file_path = path.join(parent_directory, `${i}.txt`);
    console.log(`Created file ${file_path}`);
    fs.writeFileSync(file_path, i);
  }
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
  console.log(directory);
  for (let i = 0; i < directory_contents.length - 1; i++){
    console.log(`${prefix}${file_tree.file}${directory_contents[i]}`); 
  }

  const last_file = directory_contents[directory_contents.length - 1]
  console.log(`${prefix}${file_tree.lastFile}${last_file}`);
}

function main(){
  const temp_root = createTempDirectory(ROOT_DIR);

  console.log(`Creating ${FILE_COUNT} files in ${temp_root}`);
  generateNFiles(FILE_COUNT, temp_root);
 
  console.log(`Temp directory structure`);

  printDirectoryListing(temp_root);
}

main();
