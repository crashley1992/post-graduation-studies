const assert = require('assert');
const User = require('../src/user')

describe('Reading users out of the database', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({ name: 'Joe' });
        joe.save()
            .then(() => done())
    });

    it('finds all users with a name of joe', (done) => {
        User.find({ name: 'Joe'})
        .then((users) => {
            console.log(users[0]._id)
            console.log(joe._id)
            //the objectid('') will fail this test so you need to convert both values to strings in order to compare them
            assert(users[0]._id.toString() === joe._id.toString())
            done();
        })
    });
});