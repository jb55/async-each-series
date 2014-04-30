
var expect = require('expect.js');
var each = require('./');

describe('unordered list items', function(){
  it('applied to setTimeout should return in series', function(done){
    var order = [];

    each([1,9,3,10], handle, function(err){
      expect(order).to.eql([1,9,3,10]);
      done();
    });

    function handle(n, next) {
      setTimeout(function(){
        order.push(n);
        next();
      }, n);
    }
  });
});

describe('edge cases', function() {
  describe('empty arrays', function() {
    it('should return right away', function(done){
      each([], null, done);
    });
  });

  describe('null array', function() {
    it('should return right away', function(done){
      each("hey", null, done);
    });
  });
});
