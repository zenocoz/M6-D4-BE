const express = require("express")
const mongoose = require("mongoose")
const UserModel = require("./model")
const ArticleModel = require("../articles/model")

const usersRouter = express.Router()

usersRouter.post("/", async (req, res, next) => {
  try {
    const newUser = new UserModel(req.body)

    const { _id } = await newUser.save()
    res.status(201).send(_id)
  } catch (error) {
    next(error)
  }
})

usersRouter.get("/", async (req, res, next) => {
  try {
    const users = await UserModel.find()
    res.send(users)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

usersRouter.get("/:id", async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.id)
    res.send(user)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

usersRouter.put("/:id", async (req, res, next) => {
  try {
    const modifiedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        runValidators: true,
        new: true,
      }
    )
    if (modifiedUser) {
      res.send(modifiedUser)
    } else {
      next()
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
})

usersRouter.delete("/:id", async (req, res, next) => {
  try {
    const user = await UserModel.findByIdAndDelete(req.params.id)
    if (user) {
      res.send(user)
    } else {
      next()
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
})

usersRouter.post("/:id/clap/:articleId", async (req, res, next) => {
  try {
    const article = await ArticleModel.findByIdAndUpdate(
      req.params.id,
      { $push: { claps: mongoose.Types.ObjectId(req.params.articleId) } },
      { new: true }
    )
    res.status(201).send(article)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

module.exports = usersRouter
