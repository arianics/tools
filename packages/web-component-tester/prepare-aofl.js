const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');


const files = [
  'steps.js',
  'browserrunner.js',
  'config.js',
  'webserver.js',
  'paths.js',
  'clireporter.js',
  'context.js',
  'plugin.js'
];

rimraf.sync(path.join(__dirname, '__aofl-build'));
mkdirp.sync(path.join(__dirname, '__aofl-build'));

for (let i = 0; i < files.length; i++) {
  const file = files[i];
  const content = fs.readFileSync(path.join(__dirname, 'runner', file), {encoding: 'utf-8'});

  fs.writeFileSync(path.join(__dirname, '__aofl-build', files[i]), content, {encoding: 'utf-8'});
}

console.log('\n\n');
console.log('npm i -S chalk cleankill lodash wd mocha socket.io findup-sync resolve glob util stacky events polyserve bower-config semver send server-destroy strip-ansi mocha');

console.log('\n\n');

console.log('1 remove nomnom');

console.log('\n\n');

console.log('copy data folder')

console.log('\n\n');