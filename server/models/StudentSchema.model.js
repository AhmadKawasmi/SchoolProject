const mongoose = require("mongoose")

const Schema = mongoose.Schema

const StudentSchema = new Schema({
    StudentName : String,
    StudentAge : Number,
    StudentClass : String
})

const Student = mongoose.model("student", StudentSchema);

module.exports = Student 