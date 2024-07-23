import React from 'react'
import { useState } from 'react'

function Hook6() {
    const [student,setStu]=useState([{name:"",age:0},{name:"",age:0},{name:"",age:0}])
  return (
    <div>
        <p>Em ten la {student.name}, em {student.age} tuoi</p>
        <input type='text' placeholder='NaME?' value={student.name} onChange={(e)=>setStu({...student, name:e.target.value})} />
        <input type='number' value={student.age} onChange={(e)=>setStu({...student, age:e.target.value})} />
    </div>
  )
}

export default Hook6
