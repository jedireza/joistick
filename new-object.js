'use strict';


const newObject = function (seed) {

    const factory = function () {

        if (seed === undefined) {
            return {};
        }

        return Object.assign({}, seed);
    };

    return factory;
};


module.exports = newObject;
