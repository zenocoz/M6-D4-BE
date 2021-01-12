const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const articleSchema = new Schema(
  {
    headLine: "string",
    subHead: "string",
    content: "string",
    category: {
      name: "string",
      img: "string",
    },
    author: {
      name: "string",
      img: "string",
    },
    cover: "string",
  },
  { timestamps: true }
)

module.exports = mongoose.model("Article", articleSchema)
