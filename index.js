var express = require('express');
var OrientDB = require('orientjs');

var app = express();

var server = OrientDB({
   host:       'localhost',
   port:       2424,
   username:   'root',
   password:   'root'
});

var db = server.use({
   name:     'Prueba',
   username: 'root',
   password: 'root'
});

app.get('/', function (req, res) {

	var Validator = require('jsonschema').Validator;
  var v = new Validator();

  // Address, to be embedded on Person
  var addressSchema = {
    "id": "/SimpleAddress",
    "type": "object",
    "properties": {
      "lines": {
        "type": "array",
        "items": {"type": "string"}
      },
      "zip": {"type": "string"},
      "city": {"type": "string"},
      "country": {"type": "string"}
    },
    "required": ["country"]
  };

  // Person
  var schema = {
    "id": "/SimplePerson",
    "type": "object",
    "properties": {
      "name": {"type": "string"},
      "address": {"$ref": "/SimpleAddress"},
      "votes": {"type": "integer", "minimum": 1}
    }
  };

  var p = {
    "name": "Barack Obama",
    "address": {
      "lines": [ "1600 Pennsylvania Avenue Northwest" ],
      "zip": "DC 20500",
      "city": "Washington",
      "country": "USA"
    },
    "votes": "lots"
  };

  v.addSchema(addressSchema, '/SimpleAddress');
  console.log(v.validate(p, schema));

});

app.listen(3003, function () {
  console.log('Example app listening on port 3003!');
});
