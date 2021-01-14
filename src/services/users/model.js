const mongoose = require("mongoose")
const { Schema, model } = require("mongoose")
// const UserModel = mongoose.model("User", userSchema)

const userSchema = new Schema(
  {
    name: "string",
    surname: "string",
    email: "string",
    age: {
      type: Number,
      min: [18, "must be above 18"],
      default: 18,
    },
  },
  {
    timestamps: true,
  }
)

// const UserModel = model("User", userSchema) //must be below the static functions
module.exports = mongoose.model("User", userSchema)
