const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      const word1 = new Word ('word');

      const expected1 = word1.hasOwnProperty('word'); //should be true

      expect(expected1).to.be.true;

    });

    it('should set the "word" property when a new word is created', function () {
      const word1 = new Word ('word');

      const expected1 = word1.word; //should be true

      expect(expected1).to.eql("word");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      const randomStr1 = new Word('baeiouAEIOU')
      const randomStr2 = new Word('ooooo')

      const expected = randomStr1.removeVowels(); //should return 'b'
      const expected2 = randomStr2.removeVowels(); // should return ''

      expect(expected).to.eql("b");
      expect(expected2).to.eql('');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      const randomStr1 = new Word ('AaeioubbbB');

      const expected = randomStr1.removeConsonants(); //should return 'Aaeiou'

      expect(expected).to.eql('Aaeiou')

    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      const word = new Word('kenny')

      const expected = word.pigLatin(); //should return ennykay

      expect(expected).to.eql('ennykay')



    });
  });
});
