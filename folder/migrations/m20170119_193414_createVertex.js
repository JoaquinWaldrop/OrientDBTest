"use strict";
exports.name = "createVertex";

exports.up = function (db) {
  db.class.create('Player', 'V').then(function(Player){
     return Player;
  });
};

exports.down = function (db) {
  db.query("DROP CLASS Player").then(function(result){
  	return result;
  })
};

