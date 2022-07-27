const mongoose = require("mongoose")

const Schema = mongoose.Schema

const TeacherSchema = new Schema({
    TeacherName : String,
    TeacherSubject : String,
})

const Teacher = mongoose.model("teacher", TeacherSchema);


module.exports = Teacher