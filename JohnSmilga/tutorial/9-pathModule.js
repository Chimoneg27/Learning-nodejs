const path = require('path');

console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

// Absolute path. we need the exact path of the file
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);