/*
  This file creates an array containing all the quantities held in each txt file.
  
  // Named import
  import { moduleScopedVariable } from './exampleModule.js';

  // Default import
  import exampleFunction from './exampleModule.js';
*/
import fs from 'node:fs';
import path from 'node:path'

export function myFunction(){
  let fileCount = 0;
  const directorypath = 'C:/Users/franc/OneDrive/Desktop/fabrication/server/fasteners';
  
  fs.readdir(directorypath, (err, files) => { // Use the readdir function of the file system (node:fs) module.

    if (err) throw err;

    files.forEach(file => {

      const filepath = path.join(directorypath, file); // This is where path is used.

      fs.readFile(filepath, 'utf8', (err, data) => {

        if (err) throw err;
        else{
          fileCount++;
          console.log(data);
          console.log("File count is " + fileCount);
        }
      });
    })
  })
  console.log("outside is " + fileCount);
  return fileCount;
}