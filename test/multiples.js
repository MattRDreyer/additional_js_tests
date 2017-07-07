var multiples = require('../multiples');
var chai = require('chai');
var expect = chai.expect;

describe('multiples()', function() {
  context('The following numbers 1- 100', function() {
    it('are evenly divisible by 3 and 5: [15,30,45,60,75,90]', function() {

      var numOne = 3;
      var numTwo = 5;

      expect(multiples(numOne, numTwo)).to.eql([15,30,45,60,75,90]);

    });
  });
  });
