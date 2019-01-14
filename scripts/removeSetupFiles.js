const fs = require('fs-extra');
const path = require('path');

const deletePath = deletionPath =>
  fs.remove(path.resolve(deletionPath), err =>
    console.log(err || `Successfully deleted: ${deletionPath}`),
  );

module.exports = () => {
  // Remove Files
  const pathsToDelete = [
    'scripts',
    'App.js',
    '.travis.yml',
    'devDependencies.json',
    'travis.yml',
    'LICENCE',
    'readme.md',
  ];

  return Promise.all(pathsToDelete.map(deletePath));
};
