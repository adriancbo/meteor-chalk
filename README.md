## Chalk + Meteor

> Colorize your console with [Chalk](https://github.com/sindresorhus/chalk) in Meteor.

**For the server**

## Installation

`meteor add adriancbo:chalk`

## Usage

*Per [Chalk readme](https://github.com/sindresorhus/chalk/blob/master/readme.md)*

Chain and nest the styles you want.

```
// style a string
console.log(  chalk.blue('Hello world!')  );

// combine styled and normal strings
console.log(  chalk.blue('Hello'), 'World' + chalk.red('!')  );

// compose multiple styles using the chainable API
console.log(  chalk.blue.bgRed.bold('Hello world!')  );

// pass in multiple arguments
console.log(  chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz')  );

// nest styles
console.log(  chalk.red('Hello', chalk.underline.bgBlue('world') + '!')  );

// nest styles of the same type even (color, underline, background)
console.log(  chalk.green('I am a green line ' + chalk.blue('with a blue substring') + ' that becomes green again!')  );
```

Easily define your own themes.

```js
var error = chalk.bold.red;
console.log(error('Error!'));
```

## Styles

### General

- `reset`
- `bold`
- `dim`
- `italic` *(not widely supported)*
- `underline`
- `inverse`
- `hidden`
- `strikethrough` *(not widely supported)*

### Text colors

- `black`
- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`
- `white`
- `gray`

### Background colors

- `bgBlack`
- `bgRed`
- `bgGreen`
- `bgYellow`
- `bgBlue`
- `bgMagenta`
- `bgCyan`
- `bgWhite`

## More

Check out the [Chalk readme](https://github.com/sindresorhus/chalk) for more examples.
