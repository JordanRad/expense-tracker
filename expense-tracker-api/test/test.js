process.env.NODE_ENV = 'test';

var User = require('../models/user');

//Require the dev-dependencies
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var expect = chai.expect;
chai.use(chaiHttp);
describe('Users', () => {
    let testUserId;
    describe('POST /users', () => {
        it('it should POST users details, no Auth provided', (done) => {
            chai.request(server)
                .post(`/users/register`)
                .set("body", {
                    "email": "test",
                    "firstName": "Test",
                    "lastName": "Test",
                    "password": "1234"
                })
                .end((err, res) => {
                    testUserId = res.body.id
                    expect(res.statusCode).to.equal(200);
                    done();
                });
        });

    });
    describe('GET /users', () => {
        it('it should not GET users details, no Auth provided', (done) => {
            chai.request(server)
                .get(`/users/${testUserId}`)
                .end((err, res) => {
                    expect(res.statusCode).to.equal(403);
                    done();
                });
        });
        it('it should GET users details', (done) => {
            chai.request(server)
                .get(`/users/${testUserId}`)
                .set('Authorization', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QifQ.i5ZyXxFcdZllQoK-FWrf6eDACWO7doUqTOrw7Qd454I")
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res).to.have.property('body');
                    expect(res.body).to.have.property("id")
                    done();
                });
        });
    });
    describe('PATCH & PUT /users', () => {
        it('it should PATCH users details, ', (done) => {
            chai.request(server)
                .patch(`/users/activate/${testUserId}`)
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    done();
                });
        });
    });
    describe('DELETE /users', () => {
        it('it should DELETE users status, set status as DEACTIVATED, ', (done) => {
            chai.request(server)
                .delete(`/users/${testUserId}`)
                .set('Authorization', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QifQ.i5ZyXxFcdZllQoK-FWrf6eDACWO7doUqTOrw7Qd454I")
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    done();
                });
        });
    });
})