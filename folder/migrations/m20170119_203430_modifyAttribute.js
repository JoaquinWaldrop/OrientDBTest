"use strict";
exports.name = "modifyAttribute";

exports.up = function (db) {

	db.class.get('Player').then(function(Player){
		Player.property.rename('battingAverage', 'batAvg').then(function(p){
		 return p;
		});
	});
  
};

exports.down = function (db) {
  db.class.get('Player').then(function(Player){
		Player.property.rename('batAvg', 'battingAverage').then(function(p){
		 return p;
		});
	});
};

