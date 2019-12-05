module.exports = function(app) {
  var server = require('./server');
//var ds = server.dataSources.login;
var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];
app.dataSources.login.automigrate(lbTables, function(er) {
  if (er) throw er;
  console.log('Loopback tables [' + lbTables + '] created in ', app.adapter.name);
  app.disconnect();
});
  };
