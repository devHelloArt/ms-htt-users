const request = require("supertest");
const assert = require("chai").assert;
const sinon = require("sinon");
const authService = require("users/services/authService");
const fh = require("../support/fixture-helper.js");
const log = require("metalogger")();


describe("auth service", () => {
    it("Token Verify Test", (done) => {
        const admin = require("firebase-admin");
        const auth = require("firebase-admin/auth");
        const svcAcnt = require("users/services/helloarttoken-firebase-adminsdk-jzylf-b48f097b19.json");

        admin.initializeApp({
            credential: admin.credential.cert(svcAcnt),
        });

        auth.getAuth()
            .getUserByEmail('silence1442@gmail.com')
            .then((user) => {
                done();
            });
    });
});