import React, { useEffect } from "react";
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
import Footer from "./Footer";
function Students() {
  const [flag, setFlag] = useState("")
  const [All, setAll] = useState(false)
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
  useEffect(()=>{
    if (localStorage.getItem("list")){
      setList(JSON.parse(localStorage.getItem("list")))
    }
  },[])
  const deleteById=(id)=>{
    let newList=(List.filter(item=>item.id!==id))
    setList(newList)
    localStorage.setItem("list",JSON.stringify(newList))
  }
  const reChecked=(id)=>{
    let newList=(List.map((item)=>(item.id===id?{...item,checked:!item.checked}:item)))
    setList(newList)
    localStorage.setItem("list",JSON.stringify(newList))
  }
  const Addstudent=(name)=>{
    let newList=([...List,{id:List?List.length+1:1,name:name}])
    setList(newList)
    localStorage.setItem("list",JSON.stringify(newList))
  }
  const rename=(id,name)=>{
    let newList=(List.map((item)=>item.id==id? {...item,name:name}:item))
    setList(newList)
    localStorage.setItem("list",JSON.stringify(newList))
  }

  const setFilter=(List,flag)=>{

    if (flag==="Checked"){
      return List.filter(item=>item.checked)
    }else if (flag == "UnChecked"){
      return List.filter(item=>!item.checked)
    }
    else if (flag == "Uncheckall"){
      
    }
    else if(flag=="del"){
      setList(List.filter(item=>item.checked!==true))
      setFlag("")
    }
    else if (flag=="Checkall"){
      setList(List.map((item)=>({...item,checked:!All})))
      setAll(!All)
      setFlag("")
    }
    
    return List
    }
      return (
    <Container>
        <h1>Student List</h1>
      <Add Addstudent={Addstudent}/>
      <ListGroup>
        {
        setFilter(List,flag).map((item, index) => (
          <Student key={index} students={item} deleteById={deleteById} reChecked={reChecked} rename={rename}/>
        ))}
      </ListGroup>
      <Footer setFlag={setFlag} />
    </Container>
  );
}

export default Students;
