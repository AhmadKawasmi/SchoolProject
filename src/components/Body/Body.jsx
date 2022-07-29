import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './style.css'

const Body = () => {
  const [studentForm, setStudentForm] = useState(false)
  const [teacherForm, setTeacherForm] = useState(false)
  const [teacherName, setTeacherName] = useState("")
  const [teacherSubject, setTeacherSubject] = useState("")


  const url = "http://localhost:3001/"
  const getTeacherUrl = `${url}teacher/getTeachers`
  const addTeacherUrl = `${url}teacher/addTeacher`
  const studentUrl = "http://localhost:3001/student/getStudents"


  const [allTeachers, setAllTeachers] = useState([])

  const handleTeacherInputs = async function () {
    debugger
    const response = await axios.post(addTeacherUrl, { teacherName, teacherSubject })
    getAllTeachers()
  }


  const getAllTeachers = async function () {
    const resopnse = await axios.get(getTeacherUrl)
    setAllTeachers(resopnse.data)
  }

  const getAllStudents = async function () {
    const response = await axios.get(studentUrl)
    return response.data
  }
  useEffect(() => {
    getAllTeachers()
  }, [])

  return (
    <div className="mainContainer">
      <div className="title">
        <h2>Choose a Form</h2>
      </div>
      <div className="options">
        <button className='btns' onClick={() => setStudentForm(true)}>Student</button>
        <button className='btns' onClick={() => setTeacherForm(true)}>Teacher</button>
      </div>
      <div className='formsContainer'>
        {
          studentForm ? <div className='form'>
            <div className='formHeader'>
              <h3> Student Form</h3>
              <button className='exitBtn' onClick={() => setStudentForm(false)}>x</button>
            </div>
            <div className='inputForm'>
              <input placeholder='Full Name' type="text" />
              <input placeholder='Age' type="text" />
              <input placeholder='Class' type="text" />
              <button className='btns'>Add Student</button>
            </div>
          </div> : null
        }
        {
          teacherForm ? <div className='form'>
            <div className='formHeader'>
              <h3> Teacher Form</h3>
              <button className='exitBtn' onClick={() => setTeacherForm(false)}>x</button>
            </div>
            <div className='inputForm'>
              <input value={teacherName} onChange={(event) => setTeacherName(event.target.value)} placeholder='Full Name' type="text" />
              <input value={teacherSubject} onChange={(event) => setTeacherSubject(event.target.value)} placeholder='Subject' type="text" />
              <button onClick={handleTeacherInputs} className='btns'>Add Teacher</button>
            </div>
          </div> : null
        }
      </div>
      <div>

      </div>
          {allTeachers.map(t => <div>{t.anything}</div>)}
    </div>
  )
}

export default Body