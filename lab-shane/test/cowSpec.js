const expect = require('chai').expect;
const cow = require('../lib/cow');

describe('the cow function', function(){
  it('should have a cow say a passed in parameter', function(){
    expect(cow('say')).to.eql('cow say');
  });
});
