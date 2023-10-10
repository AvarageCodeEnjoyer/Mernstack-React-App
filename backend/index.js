const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const studentRoute = require('./routes/student.routes')

const port = process.env.port || 4000

mongoose
  .connect("mongodb+srv://ndross427:9205DRIVE777@cluster0.ipo5a6z.mongodb.net/?retryWrites=true&w=majority")
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err.reason);
  })


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended : true
}))
app.use(cors())
app.use("/students", studentRoute)
app.use((req, res, next) => {
  next(createError(404))
})
app.use((err, req, res, next) => {
  if(!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message)
})


const server = app.listen(port, () => {
  console.log(`Server listening on port: ${port}`)
})


