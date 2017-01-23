"use strict";
exports.name = "addAttribute";

//Importante el return tanto en el up como en el down

exports.up = function (db) {
	db.class.get('Player').then(function(Player){
	  Player.property.create([
	     { name: 'dateBirth',
	      type: 'Integer'},
	     { name: 'dateDeath',
	      type: 'Date'},
	     { name: 'team',
	      type: 'String'},
	     { name: 'battingAverage',
	      type: 'Float'}
	  ]).then(function(properties){
	     return properties
	  });
	});
};

exports.down = function (db) {
	
	db.class.get('Player').then(function(Player){
		 Player.property.drop('dateBirth').then(function(){
		   return true;
		});
	});
  
};