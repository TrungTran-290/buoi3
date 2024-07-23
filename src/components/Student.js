import React, { useState } from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    CardText,
    Row,
    Col,
    Container,
    ListGroup,
    ListGroupItem,
    Input,
  } from "reactstrap";
function Student(props) {
  const [isedit,setEdit] = useState(false)
  const [text,setText]=useState("")
  const { students,deleteById,reChecked,rename } = props;
  return (
    <ListGroupItem className="student-list d-flex">
        <div className="dips">
        <input type="checkbox" checked={students.checked} onClick={()=>{reChecked(students.id)}}></input>
          <p onClick={()=>{reChecked(students.id)}} className={students.checked ? "item-content active" : "item-content"}>
          {
          !isedit?<p onDoubleClick={()=>setEdit(true)}>{students.name}</p> : 
          <Input value={text} onChange={(e)=>setText(e.target.value)} onKeyDown={(e)=>{
            if(e.key == "Enter"){
              setEdit(false)
              rename(students.id,text)
            }
          }}/>
        }
            
          </p>
        </div>

        <button onClick={()=>{deleteById(students.id)}}>
          <i className="fa-solid fa-close"></i>
        </button>
    </ListGroupItem>
  );
}

export default Student;
