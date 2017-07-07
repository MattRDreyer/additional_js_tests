var find = require('../find');
var chai = require('chai');
var expect = chai.expect;

describe('find()', function() {
  context('The number 75', function() {
    it('is evenly divisible by the following: [1,3,5,15,25,75]', function() {

      var numOne = 500;
      var arrayOne = [100,200,300,400,500];

      expect(find(arrayOne, numOne)).to.eql(4);

    });
  });
  });
