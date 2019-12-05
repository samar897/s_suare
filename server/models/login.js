'use strict';

module.exports = function(Login) {
    var schema_v1 = {
        "name": "login",
        "options": {
          "idInjection": false,
          "oracle": {
            "schema": "login",
            "table": "login"
          }
        },
        "properties": {
          "FName": {
            "type": "String",
            "required": true,
            "length": 20
          },
          "LName": {
            "type": "String",
            "required": true,
            "length": 40
          },
          "Email": {
            "type": "String",
            "required": true,
            "length": 40
          },
          "Password": {
            "type": "Number",
            "required": true
          }
        }
      };

};
