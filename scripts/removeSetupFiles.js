const execSync = require('child_process').execSync;
const path = require('path');

const deletePath = (path) => execSync(`rm -rf ${path}`);

const removeSetupFiles = () => {
  // Remove Files
  deletePath(path.resolve('scripts'));
  deletePath(path.resolve('App.js'));
  deletePath(path.resolve('readme.md'));
};

module.exports = removeSetupFiles;

