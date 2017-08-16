'use strict';
const NewArray = require('./new-array');
const NewDate = require('./new-date');
const NewObject = require('./new-object');


const Joistick = {};
Joistick.NewArray = NewArray;
Joistick.NewDate = NewDate;
Joistick.NewObject = NewObject;


module.exports = Joistick;
