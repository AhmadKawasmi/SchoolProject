import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './style.css'

const Body = () => {
  const [studentForm,setStudentForm] = useState(false)
  const [teacherForm,setTeacherForm] = useState(false)

  const teacherUrl = "http://localhost:3001/teacher/getTeachers"
  const studentUrl = "http://localhost:3001/student/getStudents"
  
  const [teacherFullName,setTeacherFullName] = useState("")
  const [teacherSubject,setTeacherSubject] = useState("")

  const [allTeachers,setAllTeachers] = useState([])

  const handleTeacherInputs = async function () {
    const response = await axios.post(teacherUrl, { teacherFullName,teacherSubject })
    getAllTeachers()
  }


  const getAllTeachers = async function(){
    const resopnse = await axios.get(teacherUrl)
    setAllTeachers(resopnse.data)
  }

  const getAllStudents = async function(){
    const response = await axios.get(studentUrl)
    return response.data
  }

  return (
    <div className="mainContainer">
        <div className="title">
            <h2>Choose a Form</h2>
        </div>
        <div className="options">
            <button className='btns' onClick={()=>setStudentForm(true)}>Student</button>
            <button className='btns'  onClick={()=>setTeacherForm(true)}>Teacher</button>
        </div>
        <div className='formsContainer'>
          {
          studentForm?<div className='form'>
            <div className='formHeader'>
                <h3> Student Form</h3>
            <button className='exitBtn' onClick={()=>setStudentForm(false)}>x</button>
            </div>
            <div className='inputForm'>
                <input placeholder='Full Name' type="text" />
                <input placeholder='Age' type="text" />
                <input placeholder='Class' type="text" />
                <button className='btns'>Add Student</button>
            </div>
          </div>:null
        }
        {
           teacherForm?<div className='form'>
            <div className='formHeader'>
                <h3> Teacher Form</h3>
               <button className='exitBtn' onClick={()=>setTeacherForm(false)}>x</button>
            </div>
            <div className='inputForm'>
                <input value={teacherFullName} onChange={(event) => setTeacherFullName(event.target.value)} placeholder='Full Name' type="text" />
                <input value={teacherSubject} onChange={(event) => setTeacherSubject(event.target.value)} placeholder='Subject' type="text" />
                <button onClick={handleTeacherInputs} className='btns'>Add Teacher</button>
            </div>
           </div>:null
        }
        </div>
        
    </div>
  )
}

export default Body