const express = require("express")
const Article = require("./model")
const ReviewModel = require("./review_model")

const articlesRouter = express.Router()

articlesRouter.post("/", async (req, res, next) => {
  try {
    const newArticle = new Article(req.body)
    const { _id } = await newArticle.save()
    res.status(201).send(_id)
  } catch (error) {
    console.log(error)
  }
})

articlesRouter.get("/", async (req, res, next) => {
  try {
    const articles = await Article.find()
    res.send(articles)
  } catch (error) {
    console.log(error)
  }
})
articlesRouter.get("/:id", async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.id)
    if (article) {
      res.send(article)
    }
  } catch (error) {
    console.log(error)
  }
})

articlesRouter.put("/:id", async (req, res, next) => {
  try {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body)
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
    const article = await Article.findByIdAndDelete(req.params.id)
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
articlesRouter.post("/:id", async (req, res, next) => {
  try {
    const newReview = new ReviewModel(req.body)
    const { _id } = await newReview.save()
    const updatedArticle = await Article.findByIdAndUpdate(
      req.params.id,
      { $push: { reviews: newReview } },
      { runValidators: true, new: true }
    )

    res.status(201).send(updatedArticle)
  } catch (error) {
    console.log(error)
  }
})
articlesRouter.put("/:id/reviews/:reviewId", async (req, res, next) => {})
articlesRouter.get("/:id/reviews/:reviewId", async (req, res, next) => {})

module.exports = articlesRouter
