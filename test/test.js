var
  expect = require('chai').expect,
  zero_padding = require('../assets/zero_padding').zero_padding;

describe('Zero padding', function(){
  var result = zero_padding;
  it('should be a function', function(){
    expect(zero_padding).to.be.a('function');
  });
  it('should accept one argument');
  it('should return a string', function(){
    var result = zero_padding(1);
    expect(result).to.be.a('string');
  });

  describe('1 digit numbers', function(){
    var result = zero_padding(1);
    it('should be 3 digits long', function(){
      expect(result).to.have.length.of(3);
    });
    it('should have two leading zeros', function(){
      expect(result[0]).to.equal('0');
      expect(result[1]).to.equal('0');
      expect(result[2]).not.to.equal('0');
    })
  })

  describe('2 digit numbers', function(){
    var result = zero_padding(21);
    it('should be 3 digits long', function(){
      expect(result).to.have.length.of(3);
    });
    it('should have one leading zero', function(){
      expect(result[0]).to.equal('0');
      expect(result[1]).not.to.equal('0');
      expect(result[2]).not.to.equal('0');
    })
  })

  describe('3 digit numbers', function(){
    var result = zero_padding(999);
    it('should be 3 digits long', function(){
      expect(result).to.have.length.of(3);
    });
    it('should have no leading zeros', function(){
      expect(result[0]).not.to.equal('0');
      expect(result[1]).not.to.equal('0');
      expect(result[2]).not.to.equal('0');
    })
  })
})
