/* 
 * This example demonstrates a naive approach 
 * in code for read files from a directory
 * not considering the asynchronous nature of
 * nodejs runtime machine
*/

// Dependencies
// Imports the module to work with the Operating System's file system
import fs from 'fs';

// Creates variables to reference later in the script
const files = [];
const targetDir = process.argv[2];

// Calls the method with the directory's name 
// for read the content and stores the data returned
files = fs.readdir(targetDir);

// Loop through the array of data retrieved from the directory
// and console out the content
for (const file in files) {
  console.log(file);
}
