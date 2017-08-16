'use strict';


const newArray = function (seed) {

    const factory = function () {

        if (seed === undefined) {
            return [];
        }

        return seed.slice(0);
    };

    return factory;
};


module.exports = newArray;
