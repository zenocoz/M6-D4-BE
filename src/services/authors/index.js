const express = require("express")

const AuthorModel = require("./model")

const authorsRouter = express.Router()

authorsRouter.post("/", async (req, res, next) => {
  try {
    const newAuthor = new AuthorModel(req.body)
    const { _id } = await newAuthor.save()

    res.status(201).send(_id)
  } catch (error) {
    next(error)
  }
})

module.exports = authorsRouter
