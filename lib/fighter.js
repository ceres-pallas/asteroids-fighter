var Velocity = require('asteroids-asteroid');

var defaultOptions = {
	'speedIncrement': 1
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
Fighter.prototype.rotateLeft = function(){
};
Fighter.prototype.rotateRight = function(){
};
Fighter.prototype.turnLeft = function(){
};
Fighter.prototype.turnRight = function(){
};
Fighter.prototype.speedUp = function(){
	var oldSpeed = this.speed();
	this.speed(oldSpeed + this.options['speedIncrement']);
}
Fighter.prototype.slowDown = function(){
	var oldSpeed = this.speed();
	this.speed(Math.max(oldSpeed - this.options['speedIncrement'], 0.1));
}
