// Firebase

const log = require('metalogger')();

class AuthService {
    constructor() {
        this.admin = require("firebase-admin");
        this.users = require("users/models/users");
        this.serviceAccount = require("./serviceAccountKey.json");

        this.admin.initializeApp({
            credential: this.admin.credential.cert(this.serviceAccount)
        });
    }

    async verifyToken(token) {
        this.admin.getAuth().verifyIdToken(token)
            .then((decodedToken => {
                const uid = decodedToken.uid;
                return this.users.getgetUserByUid(uid);
            }))
            .catch((error) => {
                log.error(error);
            });
        return true;
    }
}

module.exports = AuthService;