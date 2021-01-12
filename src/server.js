const express = require("express")
const listEndpoints = require("express-list-endpoints")
const mongoose = require("mongoose")
const endpointsList = require("express-list-endpoints")

const server = express()
const port = process.env.port

console.log(endpointsList)

const connectDb = async () => {
  await mongoose.connect(process.env.MONGO_DB_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  server.listen(port, () => {
    console.log("server running on port", port)
  })
}

connectDb()
