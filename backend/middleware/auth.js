const jwt = require("jsonwebtoken");

exports.authUser = async (req, res, next) => {
  try {
    //  check if user is authenticated
    if (req.isAuthenticated()) next();
    else throw new Error("Please login for access");
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

exports.authAdmin = async (req, res, next) => {
  //  check if user is admin based on decoding jwt token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const token = req.headers.authorization.split(" ")[1];

      if (!token) return res.status(401).send("No token, not authorised");

      const { isAdmin } = jwt.verify(token, process.env.JWT_SECRET);

      if (isAdmin) {
        return next();
      } else {
        return res.status(401).send("Not authorised");
      }
    } catch (err) {
      res.status(401).json({ error: err.message });
    }
  } else {
    res.status(400).json({ message: "Bad request" });
  }
};
