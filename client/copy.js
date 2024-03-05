const fs = require('fs');
const path = require('path');

const filesToCopy = [
  'web.config',
  'index.html',
  'home.css',
];

filesToCopy.forEach(file => {
  const source = path.join('public', file);
  const destination = path.join('dist', file);
  const serverDestination = path.join(__dirname , '../','server', 'dist', file);
  fs.copyFileSync(source, destination);
  fs.copyFileSync(source, serverDestination);
  console.log(`Copied ${file} from public to dist`);
});
