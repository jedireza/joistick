# Joistick

Default values for [`joi`](https://github.com/hapijs/joi) schemas.

[![Build Status](https://img.shields.io/travis/jedireza/joistick.svg)](https://travis-ci.org/jedireza/joistick)


## Install

```bash
$ npm install joistick
```


## Usage

### Purpose

Joi's [default value
API](https://github.com/hapijs/joi/blob/master/API.md#anydefaultvalue-description)
(`any.default([value, [description]])`) supports being passed a function that,
when called, returns the default value.

If you want the default value to be an `Object`, `Array` or other complex data
type, you need a function that returns a new instance. If you just pass a value
literal it would be shared between calls, usually we don't want that.

Joistick helps reduce boilerplate in your shemas.

### Importing

Access features as properties of the whole module:

```js
const Joi = require('joi');
const Joistick = require('joistick');

const arrayFactory = Joistick.NewArray();
const dateFactory = Joistick.NewDate();
const objectFactory = Joistick.NewObject();
```

Or import a feature directly:

```js
const Joi = require('joi');
const NewArray = require('joistick/new-array');
const NewDate = require('joistick/new-date');
const NewObject = require('joistick/new-object');

const arrayFactory = NewArray();
const dateFactory = NewDate();
const objectFactory = NewObject();
```


## API

### `NewArray([default])`

Returns a `function` that returns a new `Array` where:

 - `value` - An optional array of cloneable values to seed a new array with.

```js
const Joi = require('joi');
const NewArray = require('joistick/new-array');

// An empty Array
const schema = {
    job: Joi.string().required(),
    actions: Joi.array().default(NewArray(), 'log of actions')
};

// An Array with default items
const schema2 = {
    job: Joi.string().required(),
    actions: Joi.array().default(NewArray(['setup', 'step1']), 'log of actions')
};
```

### `NewDate([default])`

Returns a `function` that returns a new `Date` where:

 - `default` - An optional value that is passed to the `Date` constructor.

```js
const Joi = require('joi');
const NewDate = require('joistick/new-date');

// A fresh Date (now)
const schema = {
    name: Joi.string().required(),
    created: Joi.date().default(NewDate(), 'time of creation')
};

// A specificed Date
const schema2 = {
    name: Joi.string().required(),
    created: Joi.date().default(NewDate('1982-01-01T00:42:00'), 'time of creation')
};
```

### `NewObject([default])`

Returns a `function` that returns a new `Object` where:

 - `value` - An optional `Object` of cloneable values to seed a new object
   with. Uses `Object.assign` to create a new object when `seed` is defined.

```js
const Joi = require('joi');
const NewObject = require('joistick/new-object');

// An empty object
const schema = {
    uri: Joi.string().required(),
    headers: Joi.object().default(NewObject(), 'map of headers')
};

// An object with default fields
const schema = {
    uri: Joi.string().required(),
    headers: Joi.object().default(NewObject({ status: 200 }), 'map of headers')
};
```


## Have a question?

Any issues or questions (no matter how basic), open an issue. Please take the
initiative to read relevant documentation and be pro-active with debugging.


## Want to contribute?

Contributions are welcome. If you're changing something non-trivial, you may
want to submit an issue before creating a large pull request.


## License

MIT
