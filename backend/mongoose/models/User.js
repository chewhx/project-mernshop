const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    isAdmin: { type: Boolean, default: false },
    name: { type: String, required: [true, "Please enter a name"] },
    email: {
      type: String,
      required: [true, "Please enter a email"],
      unique: true,
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please enter a valid email"],
    },
    password: {
      type: String,
      minLength: 6,
      required: [true, "Please enter a password"],
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  //  do not hash password if it is not modified
  let user = this;
  if (!user.isModified("password")) return next();
  console.log("Pre save hash password ran");
  const salt = await bcrypt.genSalt(8);
  user.password = await bcrypt.hash(user.password, salt);
});

userSchema.method("matchPassword", async function (inputPassword) {
  const isMatch = await bcrypt.compare(inputPassword, this.password);
  return isMatch;
});

module.exports = mongoose.model("User", userSchema);
