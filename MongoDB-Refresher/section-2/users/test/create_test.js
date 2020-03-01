//following is for a test with the create method
const mocha = require('mocha');
const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
    it('saves a user', (done) => {
        const joe = new User({name: 'joe'});
        //saves instance to db
        joe.save()
        .then(() => {
            //Has joe been saved sucesfully?
            assert(!joe.isNew)
            done();
        }).catch((err) =>{
            console.log(err)
        })
    });
});

