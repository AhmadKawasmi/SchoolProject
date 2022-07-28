const express = require("express")
const mongoose = require("mongoose")
const Teacher = require("../models/TeacherSchema.modle")

const TeacherRouter = express.Router()

TeacherRouter.get("/getTeachers",async function(req,res){
    try {
        const teachers = await Teacher.find({})
        res.send(teachers)
    } catch (error) {
        res.sendStatus(500)
    }
})

TeacherRouter.post("/addTeacher", async function(req,res){
    const teacher = req.body
    if(!teacher){
        res.status(400).send({ message: "invalid teacher values" })
    }

    const teacherDB = new Teacher(teacher)

     try {
    const dataBaseRes = await teacherDB.save()
    res.send(dataBaseRes)
  } catch (error) {
    res.sendStatus(500)
  }
})


module.exports = TeacherRouter;