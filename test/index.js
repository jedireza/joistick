'use strict';
const Code = require('code');
const Lab = require('lab');
const NewArray = require('../new-array');
const NewDate = require('../new-date');
const NewObject = require('../new-object');


const lab = exports.lab = Lab.script();


lab.experiment('NewArray', () => {

    lab.test('it creates a factory', (done) => {

        const factory = NewArray();

        Code.expect(factory).to.be.a.function();

        done();
    });

    lab.test('the factory returns a new array without a seed', (done) => {

        const factory = NewArray();
        const value = factory();

        Code.expect(value).to.be.an.array();
        Code.expect(value).to.have.length(0);

        done();
    });

    lab.test('the factory returns a new array with a seed', (done) => {

        const factory = NewArray(['foo', 'bar', 'baz']);
        const value = factory();

        Code.expect(value).to.be.an.array();
        Code.expect(value).to.have.length(3);
        Code.expect(value[0]).to.equal('foo');
        Code.expect(value[1]).to.equal('bar');
        Code.expect(value[2]).to.equal('baz');

        done();
    });
});


lab.experiment('NewDate', () => {

    lab.test('it creates a factory', (done) => {

        const factory = NewDate();

        Code.expect(factory).to.be.a.function();

        done();
    });

    lab.test('the factory returns a new date without a seed', (done) => {

        const factory = NewDate();
        const value = factory();

        Code.expect(value).to.be.a.date();

        done();
    });

    lab.test('the factory returns a new date with a seed', (done) => {

        const factory = NewDate('1982-01-01T00:42:00');
        const value = factory();

        Code.expect(value).to.be.a.date();
        Code.expect(value.getFullYear()).to.equal(1982);
        Code.expect(value.getMonth()).to.equal(0);
        Code.expect(value.getDate()).to.equal(1);
        Code.expect(value.getHours()).to.equal(0);
        Code.expect(value.getMinutes()).to.equal(42);
        Code.expect(value.getSeconds()).to.equal(0);

        done();
    });
});


lab.experiment('NewObject', () => {

    lab.test('it creates a factory', (done) => {

        const factory = NewObject();

        Code.expect(factory).to.be.a.function();

        done();
    });

    lab.test('the factory returns a new object without a seed', (done) => {

        const factory = NewObject();
        const value = factory();

        Code.expect(value).to.be.an.object();

        done();
    });

    lab.test('the factory returns a new object with a seed', (done) => {

        const factory = NewObject({ foo: 'bar' });
        const value = factory();

        Code.expect(value).to.be.an.object();
        Code.expect(value.foo).to.equal('bar');

        done();
    });
});
