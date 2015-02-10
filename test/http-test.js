require('../basic-http');
var chai = require('chai');
var chaihttp = require('chai-http');

chai.use(chaihttp);

var expect = chai.expect;

describe('Basic Http', function() {
  var server = 'localhost:3000';
  var test = function(err, res, done, string) {
    expect(err).to.eql(null);
    expect(res).to.have.status(200);
    expect(res.text).to.contain(string);
    done();
  };

  describe('/time', function() {
    it('should return a current date', function(done) {
      var day = new Date().getDate().toString();
      chai.request(server)
        .get('/time')
        .end(function(err, res) {
          test(err, res, done, day);
        });
    });
  });

  describe('/greet', function() {
    it('should say hello', function(done) {
      chai.request(server)
        .get('/greet')
        .end(function(err, res) {
          test(err, res, done, 'HELLO');
        });
    });

    it('should take the name from the url', function(done) {
      chai.request(server)
        .get('/greet/dave')
        .end(function(err, res) {
          test(err, res, done, 'dave');
        });
    });
  });
});
