var Velocity = require('asteroids-asteroid');

var defaultOptions = {
	'speedIncrement': 1,
	'rotation': Math.PI/36
};

var Fighter = module.exports = function (initializer, options) {
    Velocity.call(this, initializer);
	this.options = options || {};
	for (var key in defaultOptions) {
		if (!this.options[key]) {
			this.options[key] = defaultOptions[key];
		}
	}
}
Fighter.prototype = new Velocity();
Fighter.prototype.fire = function() {
	this.notifyOf('fire', this);
}
Fighter.prototype.rotateLeft = function(locked){
	var oldOrientation = this.orientation();
	this.orientation(oldOrientation + this.options.rotation);
	if (locked) {
		this.turnLeft();
	}
};
Fighter.prototype.rotateRight = function(locked){
	var oldOrientation = this.orientation();
	this.orientation(oldOrientation - this.options.rotation);
	if (locked) {
		this.turnRight();
	}
};
Fighter.prototype.turnLeft = function(locked){
	var oldHeading = this.heading();
	this.heading(oldHeading + this.options.rotation);
	if (locked) {
		this.rotateLeft();
	}
};
Fighter.prototype.turnRight = function(locked){
	var oldHeading = this.heading();
	this.heading(oldHeading - this.options.rotation);
	if (locked) {
		this.rotateRight();
	}
};
Fighter.prototype.speedUp = function(){
	var oldSpeed = this.speed();
	this.speed(oldSpeed + this.options['speedIncrement']);
}
Fighter.prototype.slowDown = function(){
	var oldSpeed = this.speed();
	this.speed(Math.max(oldSpeed - this.options['speedIncrement'], 0.1));
}
