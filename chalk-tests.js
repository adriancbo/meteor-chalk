Tinytest.add('should style string', function (test) {
  test.equal(chalk.underline('foo'), '\u001b[4mfoo\u001b[24m');
});

Tinytest.add('should support applying multiple styles at once', function (test) {
  test.equal(chalk.red.bgGreen.underline('foo'), '\u001b[31m\u001b[42m\u001b[4mfoo\u001b[24m\u001b[49m\u001b[39m');
});

Tinytest.add('should support nesting styles', function (test) {
  test.equal(chalk.red('foo' + chalk.underline.bgBlue('bar') + '!'), '\u001b[31mfoo\u001b[4m\u001b[44mbar\u001b[49m\u001b[24m!\u001b[39m');
});
