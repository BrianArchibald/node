const path = require('path');
// this is a core module included with node

// Base file name
console.log(path.basename(__filename));
// path_demo.js


// Directory name
console.log(path.dirname(__filename));
// reference

// Extension name
console.log(path.extname(__filename));
// .js

// Create object
console.log(path.parse(__filename));
// {...}
