import React from "react";
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
function Student(props) {
  const { students,deleteById,reChecked } = props;
  return (
    <ListGroupItem className="student-list d-flex">
        <div className="dips">
        <input type="checkbox" checked={students.checked} onClick={()=>{reChecked(students.id)}}></input>
      <p onClick={()=>{reChecked(students.id)}} className={students.checked ? "item-content active" : "item-content"}>
        {students.name}
      </p>
        </div>

      <button onClick={()=>{deleteById(students.id)}}>
        <i className="fa-solid fa-close"></i>
      </button>
    </ListGroupItem>
  );
}

export default Student;
