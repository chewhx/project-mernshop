const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
const jwt = require("jsonwebtoken");

// Load User model
const User = require("../mongoose/models/User");

module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      // Match user
      User.findOne({
        email: email,
      })
        .then((user) => {f
          if (!user) {
            return done(null, false, {
              message: "The email address is not registered",
            });
          }

          // Match password
          bcrypt.compare(password, user.password, async (err, isMatch) => {
            if (isMatch) {
              //  Generate JWT token

              const jsonWebToken = await jwt.sign(
                { isAdmin: user.isAdmin, _id: user._id, name: user.name },
                process.env.JWT_SECRET
              );

              const userInfo = {
                id: user._id,
                name: user.name,
                isAdmin: user.isAdmin,
                jwt: jsonWebToken,
              };

              return done(null, userInfo);
            } else {
              return done(null, false, { message: "Password incorrect" });
            }
          });
        })
        .catch((err) => done(null, err));
    })
  );

  passport.serializeUser(function (userInfo, done) {
    done(null, userInfo);
  });

  passport.deserializeUser(function (userInfo, done) {
    User.findById(userInfo.id, function (err, userInfo) {
      done(err, userInfo);
    });
  });
};
