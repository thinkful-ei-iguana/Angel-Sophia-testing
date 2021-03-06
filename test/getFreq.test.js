const { expect } = require("chai");
const supertest = require("supertest");
const frequency = require("../getFreq");

describe("GET /frequency endpoint", () => {
  it("store frequency in an object", () => {
    return supertest(frequency)
      .get("/frequency")
      .query({s: 'aaBBAAbbaa'})
      .expect(200)
      .expect("Content-Type", /json/)
      .then(res => {
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.any.keys("count", "average", "highest", "a", "b",);
      });
  });

  it(`should return 400 if there's no string`, () => {
    return supertest(frequency)
        .get('/frequency')
        .query({ s: 4 })
        .expect(400, 'Invalid Request');
});
});
