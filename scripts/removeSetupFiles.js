const fs = require('fs-extra');
const path = require('path');

const deletePath = (path) => fs.removeSync(`rm -rf ${path}`);

const removeSetupFiles = () => {
  // Remove Files
  deletePath(path.resolve('scripts'));
  deletePath(path.resolve('App.js'));
  deletePath(path.resolve('readme.md'));
};

module.exports = removeSetupFiles;

