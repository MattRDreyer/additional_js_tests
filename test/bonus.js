var bonus = require('../bonus');
var chai = require('chai');
var expect = chai.expect;

describe('bonus()', function() {
  context('If 22.01 is the cost of the meal', function() {
    it('the total cost will be 27 with tip', function() {

      var mealCost = 22.01;

      expect(bonus(mealCost)).to.equal(27);

    });
  });
  });
