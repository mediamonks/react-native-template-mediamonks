const fs = require('fs-extra');
const path = require('path');

const deletePath = (path) => fs.removeSync(path);

const removeSetupFiles = () => {
  // Remove Files
  deletePath(path.resolve('scripts'));
  deletePath(path.resolve('App.js'));
  deletePath(path.resolve('.travis.yml'));
  deletePath(path.resolve('devDependencies.json'));
  deletePath(path.resolve('travis.yml'));
  deletePath(path.resolve('LICENCE'));
  deletePath(path.resolve('readme.md'));
};

module.exports = removeSetupFiles;

