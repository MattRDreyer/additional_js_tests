var avg = require('../avg');
var chai = require('chai');
var expect = chai.expect;

describe('avg()', function() {
  context('The average of 1, 5 and 9', function() {
    it('equals 5', function() {

      var a = 1;
      var b = 5;
      var c = 9;

      expect(avg(a, b, c)).to.equal(5);

    });
  });

  context('The average of 4, 6 and 10', function() {
    it('does not equal 8', function() {

      var a = 4;
      var b = 6;
      var c = 10;

      expect(avg(a, b, c)).to.not.equal(8);

    });
  });
});
