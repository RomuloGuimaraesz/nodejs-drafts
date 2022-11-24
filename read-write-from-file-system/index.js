import fs from 'fs';

// Creates a reference for an empty array which will store de results
let content = [];

// Creates a reference for directory's name informed from the command line
const targetDir = process.argv[2];


// Iterates over the files
// Stores the results from the method call
fs.readdir(targetDir, (err, files) => {

  if(err){
    console.log(err);
  } else {
      for(const file of files){
        content.push(file);
      }  
  }
});
