# Joistick

Helpers for [`joi`](https://github.com/hapijs/joi).

[![Build Status](https://img.shields.io/travis/jedireza/joistick.svg)](https://travis-ci.org/jedireza/joistick)


## Install

```bash
$ npm install joistick
```


## Usage

Access factories as properties of the module:

```js
const Joi = require('joi');
const Joistick = require('joistick');

const schema = {
    name: Joi.string().required(),
    created: Joi.date().default(Joistick.NewDate(), 'time of creation')
};
```

Or import a factory directly:

```js
const Joi = require('joi');
const NewDate = require('joistick/new-date');

const schema = {
    name: Joi.string().required(),
    created: Joi.date().default(NewDate(), 'time of creation')
};
```

 - `joistick/new-array`
 - `joistick/new-date`
 - `joistick/new-object`


## API

### `NewArray([default])`

Returns a `function` that returns a new `Array` where:

 - `value` - An optional array of cloneable values to seed a new array with.

### `NewDate([default])`

Returns a `function` that returns a new `Date` where:

 - `default` - An optional value that is passed to the `Date` constructor.

### `NewObject([default])`

Returns a `function` that returns a new `Object` where:

 - `value` - An optional object of cloneable values to seed a new object with.
   Uses `Object.assign` to create a new object.


## Have a question?

Any issues or questions (no matter how basic), open an issue. Please take the
initiative to read relevant documentation and be pro-active with debugging.


## Want to contribute?

Contributions are welcome. If you're changing something non-trivial, you may
want to submit an issue before creating a large pull request.


## License

MIT
