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

describe('movement', function(){
	var options = {
		'speedIncrement': 2,
		'rotation': Math.PI/36
	};
	var fighter;

	beforeEach(function(){
		fighter = new Fighter(function(){}, options);
	});

	['rotateLeft', 'rotateRight', 'turnLeft', 'turnRight', 'speedUp', 'slowDown'].forEach(function(method){
		it('should respond to ' + method, function(){
			expect(fighter).to.respondTo(method);
		});
	});

	describe('speedUp', function(){
		it('should increase the speed', function(){
			var start = 1;
			fighter.speed(start)

			fighter.speedUp();

			expect(fighter.speed()).to.equal(start + options.speedIncrement);
		});

		it('should not alter orientation', function(){
			var speed = 1; orientation = 0;
			fighter.speed(speed)
			fighter.orientation(orientation);

			fighter.speedUp();

			expect(fighter.orientation()).to.equal(orientation);
		});

		it('should not alter heading', function(){
			var speed = 1; heading = 0;
			fighter.speed(speed)
			fighter.heading(heading);

			fighter.speedUp();

			expect(fighter.heading()).to.equal(heading);
		});

		it('should not alter omega', function(){
			var speed = 1; omega = 0;
			fighter.speed(speed)
			fighter.omega(omega);

			fighter.speedUp();

			expect(fighter.omega()).to.equal(omega);
		});
	});

	describe('slowUp', function(){
		it('should decrease the speed', function(){
			var start = 3;
			fighter.speed(start)

			fighter.slowDown();

			expect(fighter.speed()).to.equal(start - options.speedIncrement);
		});

		it('should not decrease the speed below zero', function(){
			var start = 1;
			fighter.speed(start)

			fighter.slowDown();

			expect(fighter.speed()).to.equal(0);
		});
	});

	describe('rotateLeft', function(){
		it('should change orientation', function(){
			fighter.orientation(0);

			fighter.rotateLeft();

			expect(fighter.orientation()).to.equal(options.rotation);
		});

		it('should change heading when locked', function(){
			fighter.orientation(0);
			fighter.heading(0);

			fighter.rotateLeft(true);

			expect(fighter.orientation()).to.equal(options.rotation);
			expect(fighter.heading()).to.equal(options.rotation);
		});
	});

	describe('rotateRight', function(){
		it('should change orientation', function(){
			fighter.orientation(0);

			fighter.rotateRight();

			expect(fighter.orientation()).to.equal(-options.rotation);
		})

		it('should change heading when locked', function(){
			fighter.orientation(0);
			fighter.heading(0);

			fighter.rotateRight(true);

			expect(fighter.orientation()).to.equal(-options.rotation);
			expect(fighter.heading()).to.equal(-options.rotation);
		});
	});

	describe('turnLeft', function(){
		it('should change heading', function(){
			fighter.heading(0);

			fighter.turnLeft();

			expect(fighter.heading()).to.equal(options.rotation);
		});

		it('should change orientation when locked', function(){
			fighter.orientation(0);
			fighter.heading(0);

			fighter.turnLeft(true);

			expect(fighter.orientation()).to.equal(options.rotation);
			expect(fighter.heading()).to.equal(options.rotation);
		});
	});

	describe('turnRight', function(){
		it('should change heading', function(){
			fighter.heading(0);

			fighter.turnRight();

			expect(fighter.heading()).to.equal(-options.rotation);
		})

		it('should change orientation when locked', function(){
			fighter.orientation(0);
			fighter.heading(0);

			fighter.turnRight(true);

			expect(fighter.orientation()).to.equal(-options.rotation);
			expect(fighter.heading()).to.equal(-options.rotation);
		});
	});
})
