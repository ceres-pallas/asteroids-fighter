var Velocity = require('asteroids-velocity');


var doNothing = function() { /* NOTHING! */ };
var Fighter = module.exports = function (initializer) {
    Velocity.call(this);
    initializer = initializer || doNothing;
    initializer.call(this, this);

}

Fighter.prototype = new Velocity();
