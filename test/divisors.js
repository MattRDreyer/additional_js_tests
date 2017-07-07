var divisors = require('../divisors');
var chai = require('chai');
var expect = chai.expect;

describe('divisors()', function() {
  context('The number 75', function() {
    it('is evenly divisible by the following: [1,3,5,15,25,75]', function() {

      var numOne = 75;

      expect(divisors(numOne)).to.eql([1,3,5,15,25,75]);

    });
  });
  });
