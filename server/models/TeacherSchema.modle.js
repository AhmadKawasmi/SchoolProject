const mongoose = require("mongoose")

const Schema = mongoose.Schema

const TeacherSchema = new Schema({
    teacherName: String,
    teacherSubject: String,
})

const Teacher = mongoose.model("teacher", TeacherSchema);


module.exports = Teacher