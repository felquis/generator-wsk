var fs    = require('fs');
var path  = require('path');
var chalk = require('chalk');

var Generator = module.exports = function() {
  var prompts = [];
  var files   = this.expandFiles('**/*', { cwd: this.sourceRoot(), dot: true });
  var ignores = [
    '.git',
    'README.md',
  ];

  this.package = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));

  this.log.writeln('Generating from ' + chalk.cyan('Web-stater-kit') + ' v' + chalk.cyan(this.package.version) + '...');

  files.forEach(function(file) {
    if (ignores.indexOf(file) !== -1) {
      return;
    }

    this.copy(file, file);
  }, this);
};

Generator.name = "Web Stater Kit";
