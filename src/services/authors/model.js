const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const authorSchema = new Schema({
  author: {
    name: "string",
    img: "string",
  },
})
module.exports = mongoose.model("Author", authorSchema)
