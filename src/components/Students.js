import React from "react";
import Add from "./Add";
import Student from "./Student";
import { useState } from "react";
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
} from "reactstrap";
function Students() {
  const [List, setList] = useState([
    {
      id: 1,
      name: "Le Meo",
      checked: true,
    },
    {
      id: 2,
      name: "Le Tho",
      checked: true,
    },
    {
      id: 3,
      name: "Le Nai",
      checked: false,
    },
    {
      id: 4,
      name: "Le Ho",
      checked: false,
    },
  ]);
  const deleteById=(id)=>{
    setList(List.filter(item=>item.id!==id))
  }
  const reChecked=(id)=>{
    setList(List.map((item)=>(item.id===id?{...item,checked:!item.checked}:item)))
  }
  const Addstudent=(name)=>{
    setList([...List,{id:List?List.length+1:1,name:name}])
  }
  return (
    <Container>
        <h1>Student List</h1>
      <Add Addstudent={Addstudent}/>
      <ListGroup>
        {List.map((item, index) => (
          <Student key={index} students={item} deleteById={deleteById} reChecked={reChecked} />
        ))}
      </ListGroup>
    </Container>
  );
}

export default Students;
