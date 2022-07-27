const express = require("express")
const mongoose = require("mongoose")
const Student = require("../models/StudentSchema.model")

const StudentRouter = express.Router()

StudentRouter.get("/getStudents",async function(req,res){
   try {
     const students = await Student.find({})
      res.send(students)
   } catch (error) {
        res.statusCode(500)
   }
})


StudentRouter.post("/addStudent", async function(req,res){
    const student = req.body
    if(!student){
        res.status(400).send({ message: "invalid student values" })
    }

    const studentDB = new Student(student)

     try {
    const dataBaseRes = await studentDB.collection("students").save(student)
    res.send(dataBaseRes)
  } catch (error) {
    res.sendStatus(500)
  }
})

module.exports = StudentRouter;