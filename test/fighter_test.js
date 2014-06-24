var expect = require('chai').expect;

var Fighter = require('../lib/fighter.js');

describe('Fighter', function() {
    it('should exist', function() {
        expect(Fighter).to.exist;
    });

    it('should be a constructor', function() {
        expect(Fighter).to.be.a('function');
    });

    it('should be an instance of asteroid', function() {
        expect(new Fighter()).to.be.a.instanceof(require('asteroids-asteroid'));
    });

    it('should have a function to fire', function() {
        expect(new Fighter().fire).to.be.a('function');
    });



});


describe('initializer', function(){
    it('should call the initializer function', function(done) {
        var fighter = new Fighter(function () {
            done();
        });
    });

    it('should pass the fighter as an argument to the initializer', function(done) {
        new Fighter (function(fighter) {
            expect(fighter).to.exist;
			done();
        });
    });

    it('should pass the fighter as a context as well as an argument', function(done) {
        new Fighter (function (fighter) {
            expect(fighter).to.equal(this);
			done();
        });
    });
});

describe('fire', function(){
	it('should notify observers of fire', function(){
		var called = false;
		var fighter = new Fighter();
		fighter.addListener('fire', function(){ called = true });

		fighter.fire();

		expect(called).to.be.ok;
	});

	it('should pass along fighter that fired', function(done){
		var fighter = new Fighter();
		fighter.addListener('fire', function(f){
			expect(f).to.be.eql(fighter);
			done();
		});

		fighter.fire();
	});
});
