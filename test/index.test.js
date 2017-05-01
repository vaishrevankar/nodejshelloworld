// Loading the modules for testing
var http = require('http');
var mocha = require('mocha');
var server = require('../index.js');
var assert = require('assert');
const port = 8080;


// Main test suite for our server
describe('Server tests', function(){
  // server listening on port 8080 before any of the test(s)(suites) run
  before(function() {
    server.listen(port);
  });
  // shut down server after test(s)(suites) stop running
  after(function(){
    server.close();
  });
  // test suite for 200 OK response
  describe('Server returns 200 OK response code', function(){
      // unit test
      it('should return 200', function (done) {
          http.get("http://localhost:" + port, function (res) {
              assert.equal(res.statusCode, '200');
              done();
          });
      });
  });
  // test suite to verify Hello-World json object was present on server
  describe('Verify that Hello-World json object was printed on server', function(){
    // unit test for reading data and comparing it in string format
    it('should read Hello World json object in string format', function (done) {
        http.get("http://localhost:" + port, function (res) {
            var data = '';
            res.on('data', function (chunk) {
                data += chunk;
            });
            res.on('end', function () {
                assert.equal(data, '{"Hello":"World!"}');
                done();
            });
        });
    });

  });
});
