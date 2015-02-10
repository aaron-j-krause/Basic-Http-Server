var app = require('../basic-http');
var chai = require('chai');
var chaihttp = require('chai-http');

chai.use('chai-http');

var expect('chai').expect;

describe('Basic Http', function(){
  var server = 'localhost:3000'
  describe('/time', function(){
    it('should return a current date', function(done){
      var day = (new Date()).getDay()
      chai.request(server)
        .get('/time')
        .end(function(err,res){
          expect(err).to.eql(null);
          expect(res).to.have.status(200);
          expect(res.text)
        })

    })

  })
})