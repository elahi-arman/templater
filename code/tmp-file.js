// we import modules from the standard library here
const fs = require('fs');         // handles file system related stuff
const path = require('path');     // handles path utilities

const DEPTH_MULTIPLIER = 1;       // use this for printing files underneath a directory
const FILE_COUNT = 10;            // number of temporary files to generate

// the special process variable is available globally in node and holds information
// on the process. One of the pieces of information is the current working directory
// which can be accessed using process.cwd()
const ROOT_DIR = process.cwd();   // the base path of where the new directory will go

// these symbols (non-ascii) will help to create a nice tree structure
// to print out into the terminal
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
  const temp_dir_path = '';
  console.log(`Created new directory at location ${temp_dir_path}`);
  return temp_dir_path;
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
  
  // you can use this as the file contents, or generate something else dynamically
  const fileContents = "";              
  
  // for (){
    const file_path = '';
    console.log(`Created file ${file_path}`);
  //}
}

/**
 * @method printDirectoryListing
 *
 * @param {String} directory - the directory to print out
 * @param {Number} [depth=1] - the depth at which contents are printed
 *
 * @returns {void}
 */

// the depth parameter gets a default value of 1 if nothing is passed in
function printDirectoryListing(directory, depth = 1){

  // get the directory contents

  // loop over the directory contents
    // make sure to insert file_tree.lastFile instead of file_tree.file 
    //   on the last iteration
}

// console.log prints to stdout at a log level
// there's also debug, warn, and error
function main(){
  const temp_root = createTempDirectory(ROOT_DIR);

  console.log(`Creating ${FILE_COUNT} file(s) in ${temp_root}`);
  generateNFiles(FILE_COUNT, temp_root);
 
  console.log(`Temp directory structure`);
  printDirectoryListing(temp_root);
}

main();
