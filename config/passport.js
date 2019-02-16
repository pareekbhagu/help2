//passport.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const DB_QUERIES = require('../misc/queries')
const { database } = require('../misc/query');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    async function (email, password, cb) {
        //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
        try {
    
            var user = await database.query(DB_QUERIES.DB_CHECK_USER, [email, password], 1)
            console.log(user);
            if (user.length==0) {
                return cb(null, false, { message: 'Incorrect email or password.' });
            }
            return cb(null, user, { message: 'Logged In Successfully' });
        }
        catch (error) {
            cb(error)
        }

    }
));