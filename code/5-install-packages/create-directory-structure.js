// we import modules from the standard library here

// import/require the generate-files module here

const DEPTH_MULTIPLIER = 1;
const ROOT_DIR = process.cwd();

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

function main(){

  const temp_root = createTempDirectory(ROOT_DIR);

  // call generate file in here

  printDirectoryListing(temp_root);
}

main();
