const express = require("express")
const articleSchema = require("./schema")

const articlesRouter = express.Router()

articlesRouter.post("/", async (req, res, next) => {
  try {
    const newArticle = new articleSchema(req.body)
    const { _id } = await newArticle.save()
    res.status(201).send(_id)
  } catch (error) {
    console.log(error)
  }
})

articlesRouter.get("/", (req, res, next) => {})
articlesRouter.put("/", (req, res, next) => {})
articlesRouter.delete("/", (req, res, next) => {})

module.exports = articlesRouter
