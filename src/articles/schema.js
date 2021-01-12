import mongoose from "mongoose"
const { Schema } = mongoose

const articleSchema = new Schema(
  {
    headLine: "string",
    subHead: "string",
    content: "string",
    category: "string",
    author: {
      name: "string",
      img: "string",
    },
    cover: "string",
  },
  { timestamps: true }
)

module.exports = mongoose.model("Article", articleSchema)
