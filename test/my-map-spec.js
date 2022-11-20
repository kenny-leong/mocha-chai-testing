const chai = require('chai')
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);
const myMap = require('../problems/my-map')



describe("myMap function", function() {
    beforeEach(function() {
        arr = [1,2,3];
        callback = (inputArr, outputArr=[]) => {
            inputArr.forEach(num => {
                outputArr.push(num * 2)
            });
            return outputArr;
        }

        return callback(arr)
    })

    it('should ensure that myMap does not mutate the passed-in array argument', function() {

        const expected = myMap(arr, callback);
        const answer = [2,4,6]

        expect(expected).to.eql(answer);
        expect(arr).to.eql([1,2,3])

    })

    it('should ensure that myMap does not call the built-in Array.map', function() {

        const mapSpy = chai.spy.on(Array.prototype, 'map');

        expect(mapSpy).to.have.not.been.called();
    })

})
