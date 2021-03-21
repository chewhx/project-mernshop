require("dotenv").config();
const express = require("express");
const session = require("express-session");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/connectDb");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const app = express();

//  Import routes
const userRoutes = require("./routes/api-v1-users");
const productRoutes = require("./routes/api-v1-products");

//  Import middlewares
const errorHandler = require("./middleware/errorHandler");

require("./config/passport")(passport);

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

//  ROUTES
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/products", productRoutes);


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(
    `Server ${process.env.NODE_ENV} started on port ${PORT}!`.bgCyan.black
  );
});
