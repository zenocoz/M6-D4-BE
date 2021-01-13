const express = require("express")
const ArticleModel = require("./model")

const articlesRouter = express.Router()

articlesRouter.post("/", async (req, res, next) => {
  try {
    const newArticle = new ArticleModel(req.body)
    const { _id } = await newArticleModel.save()
    res.status(201).send(_id)
  } catch (error) {
    console.log(error)
  }
})

articlesRouter.get("/", async (req, res, next) => {
  try {
    const articles = await ArticleModel.find()
    res.send(articles)
  } catch (error) {
    console.log(error)
  }
})
articlesRouter.get("/:id", async (req, res, next) => {
  try {
    const article = await ArticleModel.findById(req.params.id)
    if (article) {
      res.send(article)
    }
  } catch (error) {
    console.log(error)
  }
})

articlesRouter.put("/:id", async (req, res, next) => {
  try {
    const article = await ArticleModel.findByIdAndUpdate(
      req.params.id,
      req.body
    )
    if (article) {
      res.send(article)
    } else {
      //handle error
    }
  } catch (error) {
    console.log(error)
  }
})
articlesRouter.delete("/:id", async (req, res, next) => {
  try {
    const article = await ArticleModel.findByIdAndDelete(req.params.id)
    if (article) {
      res.send("Deleted")
    } else {
      //handle error
    }
  } catch (error) {
    console.log(error)
  }
})

articlesRouter.get("/:id/reviews", async (req, res, next) => {})
articlesRouter.get("/:id/reviews/:reviewId", async (req, res, next) => {})
articlesRouter.post("/:id", async (req, res, next) => {})
articlesRouter.put("/:id/reviews/:reviewId", async (req, res, next) => {})
articlesRouter.get("/:id/reviews/:reviewId", async (req, res, next) => {})

module.exports = articlesRouter
