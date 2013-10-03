var
  should = require('should'),
  zero_padding = require('../assets/zero_padding').zero_padding;

describe('Zero padding', function(){
  it('should be an function');
  it('should accept one argument');
  it('should return a string');

  describe('1 digit numbers', function(){
    var result = zero_padding(1);
    it('should be 3 digits long', function(){
      result.should.have.lengthOf(3);
    });
    it('should have two leading zeros', function(){
      result[0].should.equal('0');
      result[1].should.equal('0');
      result[2].should.not.equal('0');
    })
  })

  describe('2 digit numbers', function(){
    var result = zero_padding(21);
    it('should be 3 digits long', function(){
      result.should.be.lengthOf(3);
    });
    it('should have one leading zero', function(){
      result[0].should.equal('0');
      result[1].should.not.equal('0');
      result[2].should.not.equal('0');
    })
  })

  describe('3 digit numbers', function(){
    var result = zero_padding(999);
    it('should be 3 digits long', function(){
      result.should.be.lengthOf(3);
    });
    it('should have no leading zeros', function(){
      result[0].should.not.equal('0');
      result[1].should.not.equal('0');
      result[2].should.not.equal('0');
    })
  })
})