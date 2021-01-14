const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const reviewSchema = new Schema(
  {
    text: "string",
    user: "string",
  },
  { timestamps: true }
)

module.exports = mongoose.model("ReviewModel", reviewSchema)
