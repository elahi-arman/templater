# Creating TMP Files

The first part of our project will be to create a temporary file + temporary directory. Then we'll populate some content into the file using the fs module. By the end of this, we'll have the basics of creating temporary files, interacting with the file system, and using the standard library + documentaiton.

## Running Script Files

So lets create a solutions directory where all our code is kept. For this excercise, copy the file in code/tmp-file.js into the newly created solutions directory.

To invoke most node programs, we'll run the command ```node <file_name>```. Go ahead and run ```node solutions/tmp-file.js```. You should see the program flow print through the screen, but nothing happened just yet.

If you open ```solutions/tmp-file.js``` you'll see that it has a couple of functions, starting with a main and then some stuff for you to fill in. Node execution happens primarily from top to bottom. I like to have a main function and just invoke it. Anything at the top level scope of a node file will be automatically invoked regardless of whether or not this is the root process. 

Note that we don't create something in /tmp yet, we're just creating something in our local directory.

## Instructions

Fill in the following functions only using ** Sync ** methods

1. Fill in ```createTempDirectory(parent_directory)```
2. Fill in ```generateNFiles(num_files, parent_directory)```
3. Complete printDirectoryListing(directory, depth)```

## Resources

* fs documentation - https://nodejs.org/docs/latest-v8.x/api/fs.html
* path documentation - https://nodejs.org/docs/latest-v8.x/api/path.html

## Extras

* Between runs of the script, you have to remove the created folder. Put in a check to not create the temp directory if the directory already exists. 
* Create a subdirectory inside the newly created temp directory. Print a file structure that looks like the following:
* Create directories inside of /tmp instead of using the current directory.

```


```
