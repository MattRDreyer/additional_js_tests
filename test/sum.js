var sum = require('../sum');
var chai = require('chai');
var expect = chai.expect;

describe('sum()', function() {
  context('The sum of 5 and 9', function() {
    it('equals 14', function() {

      var a = 5;
      var b = 9;


      expect(sum(a, b)).to.equal(14);
    });
  });

  context('The sum of 12 and 3', function() {
    it('does not equal 14', function() {

      var a = 12;
      var b = 3;


      expect(sum(a, b)).to.not.equal(14);
    });
  });

});
