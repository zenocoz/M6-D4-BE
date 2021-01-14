const express = require("express")
const mongoose = require("mongoose")
const endpointsList = require("express-list-endpoints")
const cors = require("cors")

const articlesRouter = require("./services/articles")
const authorsRouter = require("./services/authors")

const {
  notFoundHandler,
  badRequestHandler,
  genericErrorHandler,
} = require("./errorHandlers")

const server = express()
const port = process.env.PORT

server.use(cors())
server.use(express.json())

//Routes
server.use("/articles", articlesRouter)
server.use("/authors", authorsRouter)

// ERROR HANDLERS MIDDLEWARES

server.use(badRequestHandler)
server.use(notFoundHandler)
server.use(genericErrorHandler)

console.log(endpointsList(server))

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_LOCAL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    server.listen(port, () => {
      console.log("server running on port", port)
    })
  } catch (error) {
    console.log(error)
  }
}

connectDb()
