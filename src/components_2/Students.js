import React, { useState } from "react";
import Student from "./Student";
import { Container, ListGroup } from "reactstrap";

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
  function deleteById(id){
    setList(List.filter(item=>item.id!=id))
  }
  function reChecked(id){
    setList(List.map((item)=>(item.id===id? {...item,checked:!item.checked} :item )))
  }
  return (
    <Container>
      <ListGroup>
        <h1>Student List</h1>
        {List.map((item, index) => (
          <Student key={index} item={item} deleteById={deleteById} reChecked={reChecked}/>
        ))}
      </ListGroup>
    </Container>
  );
}

export default Students;
