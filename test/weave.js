var weave = require('../weave');
var chai = require('chai');
var expect = chai.expect;

describe('weave()', function() {
  context('Replacing every 4th character of yankeedoodledandy with x', function() {
    it('should return yanxeedxodlxdanxy', function() {

      var str = "yankeedoodledandy".split('');
      var nth = 4;
      var replaceWith = "x"

      expect(weave(str, nth, replaceWith)).to.equal("yanxeedxodlxdanxy");

    });
  });
  });
