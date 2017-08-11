const fs = require('fs');

if (process.argv.length != 3) {
  console.log("Usage: $ merge path/to/directory");
  process.exit(-1);
}

// 3 argvs
const path = process.argv[2];
let mergedContent = '';

try {
  fs.readdirSync(path).forEach((fileName) => {
    if (fileName.indexOf('.DS_Store') === -1) {
      mergedContent += '# ' + fileName + '\n';
      mergedContent += fs.readFileSync(path + '/' + fileName, 'utf-8') + '\n';
    }
  });

  fs.writeFileSync(path + '/merged.md', mergedContent);
  console.log(`Success! Check your merged.md in ${path}`);
} catch (err) {
  console.log(err);
  process.exit(-1);
}
