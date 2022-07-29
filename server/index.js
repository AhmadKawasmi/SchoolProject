const express = require("express")
const mongoose = require("mongoose")

const app = express()

const cors = require("cors");
require("dotenv").config()
const studentRouter = require("../server/routes/Studentcrud.api")
const techerRouter = require("../server/routes/Teachercrud.api")
const enviroment = process.env.ENVIROMENT
const mongoURI = process.env.MONGODB_URI


mongoose
    .connect(mongoURI)
    .then(() => {
        console.log("connected to DB");
    })



console.log(enviroment);
if (enviroment == "development") {
    app.use(cors())
}

app.use(express.json({ extended: false }))
app.use("/student", studentRouter)
app.use("/teacher", techerRouter)

const PORT = process.env.PORT
app.listen(PORT, function() {
    console.log("Up and running on port : " + PORT);
})