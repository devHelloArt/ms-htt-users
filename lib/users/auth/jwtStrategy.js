// const admin = require("firebase-admin");
// const serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
// });

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const bcrypt = require("crypto-js");
// const log = require("metalogger")();
// const { ExtractJwt, Strategy: JWTStrategy } = require('passport-jwt');

// const Users = require("users/models/users");
// const userSerivce = new Users();

// module.exports = () => {
//     passport.use('local', new LocalStrategy({
//         usernameField: 'email',
//         passwordField: 'password',
//     }, async(email, password, done) => {
//         try {
//             const exUser = await userSerivce.getUser(email);
//             if (exUser.length > 0) {
//                 const result = password === exUser[0]["password"] ? true : false;
//                 if (result) {
//                     done(null, exUser[0]);
//                 } else {
//                     done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
//                 }
//             } else {
//                 done(null, false, { message: '가입되지 않은 회원입니다.' });
//             }
//         } catch (error) {
//             log.error(error);
//             done(error);
//         }
//     }));

//     passport.use('jwt', new JWTStrategy({
//             jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
//         },

//         async validate(token) => {
//             try {
//                 admin.auth().verifyIdToken(token, true)
//                     .catch((err) => {
//                         console.log(err);
//                         throw new UnauthorizedException();
//                     });
//                 const exUser = await userSerivce.getUser(jwtPayload.id);

//                 if (exUser[0]) {
//                     done(null, exUser[0]);
//                     return;
//                 }

//                 done(null, false, { reason: '올바르지 않은 인증정보 입니다.' });
//             } catch (error) {
//                 log.error(error);
//                 done(error);
//             }
//         }));
// };