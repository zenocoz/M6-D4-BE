const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const reviewSchema = new Schema({
  text: "string",
  user: "string",
})

module.exports = mongoose.model("ReviewModel", reviewSchema)
