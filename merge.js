#!/usr/bin/env node

const fs = require('fs');

if (process.argv.length < 2 || process.argv.length > 5) {
  console.log("Usage: '$ merge path/to/directory' or '$ merge' to merge files in current directory.");
  process.exit(-1);
}

let path;
// 2 argvs, use current directory path as path
if (process.argv.length === 2) {
  path = process.cwd();
} else {
  path = process.argv[2];
}
let mergedContent = '';

let fileExt = '.md';
if (process.argv.includes('-mdx')){
  fileExt = '.mdx';
}

let commentsEnabled = true;
if (process.argv.includes('-no-file-info')){
  commentsEnabled = false;
}

try {
  fs.readdirSync(path).forEach((fileName) => {
    if (fileName.indexOf('.DS_Store') === -1) {

      if(commentsEnabled){
        mergedContent += '# ' + fileName + '\n';
      }
      
      mergedContent += fs.readFileSync(path + '/' + fileName, 'utf-8') + '\n';
    }
  });

  fs.writeFileSync(path + '/merged' + fileExt, mergedContent);
  console.log(`Success! Check your merged${fileExt} in ${path}`);
} catch (err) {
  console.log(`Oh no, An error occurred! ${err.message}`);
  process.exit(-1);
}
