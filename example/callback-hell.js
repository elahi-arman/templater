const fs = require('fs');
const path = require('path');

const cwd = process.cwd()

// this just reads a directory one level and if there's any files, it prints out those contents
// if there are any directories, it prints the directory listing underneath
fs.readdir(cwd, (err, data) => {
  if (err){
    console.error(err)
    process.exit(1)
  }

  for (let i = 0; i < data.length; i++) {
    const filepath = path.join(cwd, data[i]);
   
    // callback 2, that gets executed in a loop
    fs.stat(filepath, (err, stats) => {
      if (err){
        console.error(err)
        process.exit(2)
      }

      if (stats.isDirectory()){

        // potential callback 3
        fs.readdir(filepath, (err, files) => {
          if (err){
            console.error(err)
            process.exit(3)
          }
          console.log(files)
        });
      } else if(stats.isFile()) {
        // other potentiatl callback 3
        fs.readFile(filepath, 'utf-8', (err, data) => {
          // notice this is the 4th time I've handled an fs error in the exacty same three lines
          // looks like Go code ;P
          if (err){
            console.error(err)
            process.exit(3)
          }

          console.log(data)
        });
      }
    });

  }
});

