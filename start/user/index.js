//exports
//global

var db = require('../db');
var log = require('../logger')(module);

function User(name) {
    this.name = name;
}

User.prototype.hello = function(who) {
    log(db.getPhrases("Hello") + ", " + who.name);
};

//exports.User = User;

//global.User = User;

module.exports = User;