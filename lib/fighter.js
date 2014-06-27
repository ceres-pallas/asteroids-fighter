var Velocity = require('asteroids-asteroid');

var doNothing = function() { /* NOTHING! */ };
var Fighter = module.exports = function (initializer) {
    Velocity.call(this, initializer);
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
}
Fighter.prototype.slowDown = function(){
}
