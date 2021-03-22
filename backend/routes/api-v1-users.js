const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

const { authUser, authAdmin } = require("../middleware/auth");

const User = require("../mongoose/models/User");

const errorHandler = require("../middleware/errorHandler");

//  ---------------------------------------------------------------------------------------
//  @desc     Auth user login
//  @route    POST  /api/v1/users/secret
//  @access   Private

router.post("/secret", async (req, res) => {
  try {
    const jwtDecoded = jwt.verify(req.body.jwt, process.env.JWT_SECRET);

    if (req.isAuthenticated() && jwtDecoded.isAdmin) {
      res.json({ data: "Good" });
    } else {
      res.json({ data: "Bad" });
    }
  } catch (err) {
    res.json({ data: "Not authorised!" });
  }
  // req.login(req.body.user, function (err) {
  //   if (err) {
  //     console.log(err);
  //   }
  //   return res.redirect("http://localhost:5000/api/v1/users");
  // });
});

//  ---------------------------------------------------------------------------------------
//  @desc     Get all users
//  @route    GET  /api/v1/users
//  @access   Private

router.get("/", authUser, authAdmin, async (req, res, err) => {
  try {
    const users = await User.find().select("-password");
    if (!users) {
      throw new Error("No users found");
    }
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
});

//  ---------------------------------------------------------------------------------------
//  @desc     Get a user by id
//  @route    GET  /api/v1/users/:id
//  @access   Private

router.get("/:id", authUser, async (req, res, next) => {
  try {
    const foundUser = await User.findById(req.params.id).select("-password");
    if (!foundUser) {
      throw new Error(`No user found with id ${req.params.id}`);
    }

    res.status(200).json(foundUser);
  } catch (err) {
    if (err.name === "CastError") {
      err.message = `Invalid id ${req.params.id}`;
    }
    console.log(err);
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
});
//  ---------------------------------------------------------------------------------------
//  @desc     Update a user by id
//  @route    PUT  /api/v1/users/:id
//  @access   Private

router.put("/:id", authUser, async (req, res, next) => {
  try {
    if (!req.body.email || !req.body.password) {
      throw new Error("Please enter an email and password to update profile");
    }

    const foundUser = await User.findById(req.params.id);

    if (!foundUser) {
      throw new Error(`No user found with id ${req.params.id}`);
    }

    //  use the assignment and save() method to update so that the userSchema pre save method will be called to hash the password
    //  pre save will not be called for update methods
    //  https://github.com/Automattic/mongoose/issues/2672

    foundUser.email = req.body.email;
    foundUser.password = req.body.password;
    foundUser.name = req.body.name;

    const updatedUser = await foundUser.save();

    res.status(200).json({
      success: true,
      data: updatedUser,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
});

//  ---------------------------------------------------------------------------------------
//  @desc     Create a new user
//  @route    POST  /api/v1/users
//  @access   Public

router.post("/", async (req, res, err) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      success: true,
      data: {},
    });
  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      err.message = `User already exists`;
    }
    if (err.name === "ValidatorError") {
      err.message = Object.values(err.errors).map((each) => each.message);
    }
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
});

//  ---------------------------------------------------------------------------------------
//  @desc     Delete a user by id
//  @route    DEL  /api/v1/users/:id
//  @access   Private, Admin

router.delete("/:id", authUser, authAdmin, async (req, res, err) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      throw new Error(`No user found with id ${req.params.id}`);
    }

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
});

//  ---------------------------------------------------------------------------------------
//  @desc     Auth user login
//  @route    POST  /api/v1/users/login
//  @access   Public

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!user) {
      return res
        .status(404)
        .json({ success: false, error: "Invalid email and password" });
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      const loginTime = new Date().getTime();
      const expiryTime = loginTime + 1000 * 60 * 10;

      user.loginTime = loginTime;
      user.expiryTime = expiryTime;

      res.status(200).json(user);
    });
  })(req, res, next);
});

//  ---------------------------------------------------------------------------------------
//  @desc     Log out user
//  @route    POST  /api/v1/users/logout
//  @access   Private

router.post("/logout", (req, res) => {
  req.logout();
  res.send("LOG OUT");
});

module.exports = router;
