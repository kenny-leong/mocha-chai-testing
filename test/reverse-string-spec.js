const chai = require('chai')
const expect = chai.expect;
const reverseString = require('../problems/reverse-string')

describe("reverseString function", function() {
    it("should return a word with all the characters reversed", function() {
        const expected = reverseString('fun');

        expect(expected).to.eql('nuf')
    })
})
