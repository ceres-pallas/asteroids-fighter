var Velocity = require('asteroids-asteroid');

var doNothing = function() { /* NOTHING! */ };
var Fighter = module.exports = function (initializer) {
    Velocity.call(this, initializer);
}
Fighter.prototype = new Velocity();
Fighter.prototype.fire = function() {
	this.notifyOf('fire', this);
}
