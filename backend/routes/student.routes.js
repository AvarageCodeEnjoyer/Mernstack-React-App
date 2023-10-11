const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()


let studentSchema = require("../models/Student")

router.route("/create-student").post(async (req, res, next) => {
  await studentSchema
    .create(req.body)
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully uploaded",
        status: 200,
      })
    })
    .catch(err => {
      return next(err)
    })
})


router.route("/").get(async (req, res, next) => {
  await studentSchema
    .find()
    .then((result) => {
      res.json({
        data: result,
        message: "All items successfully fetched",
        status: 200,
      })
    })
    .catch(err => {
      return next(err)
    })
})


router.route("/get-student/:id").get(async (req, res, next) => {
  await studentSchema
    .findById(req.params.id)
    .then((result) => {
      res.json({
        data: result,
        message: "All items successfully fetched",
        status: 200,
      })
    })
    .catch(err => {
      return next(err)
    })
})

router.route("/update-student/:id").put(async (req, res, next) => {
  await studentSchema
    .findByIdAndUpdate(req.params.id, req.body)
    .then(result => {
      console.log(result)
      res.json({
        data: result, 
        message: "Data successfully updated",
      })
    })
    .catch(err => {
      return next(err)
    })
})

router.route("/delete-student/:id").delete(async (req, res, next) => {
  await studentSchema
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        message: "User Successfully Deleted",
      })
    })
    .catch(err => {
      return next(err)
    })
})

module.exports = router

