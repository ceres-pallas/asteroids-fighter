var expect = require('chai').expect;

var Fighter = require('../lib/fighter.js');

describe('Fighter', function() {
    it('should exist', function() {
	expect(Fighter).to.exist;
    });

    it('should be a constructor', function() {
	expect(Fighter).to.be.a('function');
    });

    it('should be an instance a velocity', function() {
	expect(new Fighter()).to.be.a.instanceof(require('asteroids-velocity'));
    });


});


describe('initializer', function(){
    it('should call the initializer function', function(done) {
	var fighter = new Fighter ( function () { 
	    done(); 
	});	
    });
    it('should pass the fighter as an argument to the initializer', function() {

	new Fighter ( function (fighter) { 
	    expect(fighter).to.exist;
	});	
    });
    it('should pass the fighter as a context as well as an argument', function() {

	new Fighter ( function (fighter) { 
	    expect(fighter).to.equal(this);
	});	
    });
}); 
