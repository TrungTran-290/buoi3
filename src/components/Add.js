import React from 'react'
import { useState } from 'react'
import {Input} from "reactstrap"
function Add(props) {
    const {Addstudent} = props
    const [text,setText] = useState("")
  return (
    <Input className='my-3 px-4' value={text} onChange={(e)=>setText(e.targetText.value)} onKeyDown={
        (e)=>{
            if(e.key=="Enter"){
                Addstudent(text)
                setText("")
            }
        }
    }></Input>
  )
}

export default Add
