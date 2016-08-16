var app = require('../app');
var request = require("request");
var supertest = require("supertest");
var base_url = "http://localhost:7000/"
var about_url = base_url + 'about';
var contact_url = base_url + 'contact';

// function check200(err, response, body) {
//   expect(response.statusCode).toBe(200);
//   done();
// }


describe("Express Server API", function() {
  describe("should return users json on get /edison", function() {
      it("returns status code 200", function(done) {
        supertest(app)
          .get('/edison')
          .expect('Content-Type', /json/)
          .expect(200, done);
      });

      xit("returns a correct json format", function(done) {
        supertest(app)
          .get('/edison')
          .expect({
            name: 'Junius',
            job: 'asking questions',
            age: 26
          }, done);
      });
  });
});
