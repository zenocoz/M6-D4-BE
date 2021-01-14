const mongoose = require("mongoose")
const { Schema } = require("mongoose")

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

module.exports = mongoose.model("User", userSchema)
