'use strict';


const newDate = function (seed) {

    const factory = function () {

        if (seed === undefined) {
            return new Date();
        }

        return new Date(seed);
    };

    return factory;
};


module.exports = newDate;
