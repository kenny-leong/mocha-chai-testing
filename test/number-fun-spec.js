const chai = require('chai')
const expect = chai.expect;
const {returnsThree} = require('../problems/number-fun')
const {reciprocal} = require('../problems/number-fun')

describe("returnsThree function", function() {
    it("should return the number 3", function() {

        const expected = returnsThree(); //should equal 3

        expect(expected).to.eql(3)
    })
})

describe("reciprocal function", function() {
    it("should return the reciprocal", function() {


        expect(reciprocal(5)).to.equal(1/5)

    })

    it('should only intake arguments between 1 and 1,000,000.', function() {

        expect(() => reciprocal(0)).to.throw(Error);
        expect(() => reciprocal(10000001)).to.throw(Error);


    })
})
