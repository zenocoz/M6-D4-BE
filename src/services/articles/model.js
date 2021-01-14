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
    author: { type: Schema.Types.ObjectId, ref: "Author" },
    reviews: [
      {
        text: "string",
        user: "string",
      },
    ],
    cover: "string",
  },
  { timestamps: true }
)
module.exports = mongoose.model("Article", articleSchema)
