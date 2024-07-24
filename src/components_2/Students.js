import React, { useEffect, useState } from "react";
import Student from "./Student";
import { Container, ListGroup } from "reactstrap";
import axios from "axios";
function Students() {
  const [List, setList] = useState([]);
  const fetchAPI = () => {
    const url = "https://66a07b747053166bcabb8c62.mockapi.io/PracticeApi";
    axios
      .get(url)
      .then(function (res) {
        setList(res.List);
        console.log(List)
      })
      .catch();
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  // function deleteById(id){
  //   setList(List.filter(item=>item.id!=id))
  // }
  // function reChecked(id){
  //   setList(List.map((item)=>(item.id===id? {...item,checked:!item.checked} :item )))
  // }
  return (
    <Container>
      <ListGroup>
        <h1>Student List</h1>
        {List.map((item, index) => (
          // <Student key={index} item={item} deleteById={deleteById} reChecked={reChecked}/>
          <Student key={index} item={item} />
        ))}
      </ListGroup>
    </Container>
  );
}

export default Students;
