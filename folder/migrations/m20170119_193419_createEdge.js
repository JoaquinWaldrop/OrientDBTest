"use strict";
exports.name = "createEdge";

exports.up = function (db) {
  db.class.create('Play', 'E').then(function(Play){
     return Play;
  });
};

exports.down = function (db) {
  db.query("DROP CLASS Play").then(function(result){
  	return result;
  })
};

