Package.describe({
  name: 'adriancbo:chalk',
  version: '1.0.0',
  summary: 'Tiny Meteor wrapper for chalk',
  git: 'https://github.com/adriancbo/meteor-chalk.git',
  documentation: 'README.md'
});

Npm.depends({
  "chalk": "1.0.0"
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  if(api.export) api.export(['chalk'], ['server'])
  api.addFiles(['chalk.js'], ['server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('adriancbo:chalk');
  api.addFiles('chalk-tests.js', ['server']);
});