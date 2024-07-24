import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Button, Input, Table } from "reactstrap";
import Swal from 'sweetalert2'
function Students() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [textEdit, setTextEdit] = useState("");
  const [isedit, setEdit] = useState({ id: "", flag: false });
  const url = "https://66a07b747053166bcabb8c62.mockapi.io/PracticeApi";
  const getStudents = () => {
    axios.get(url).then(function (res) {
      setData(res.data);
    });
  };
  const updateStudents = (id, textEdit) => {
    axios({
      method: "put",
      url: url + "/" + id,
      data: {
        name: textEdit,
      },
    }).then(function (res) {
      setData(
        data.map((item) => (item.id == id ? { ...item, name: textEdit } : item))
      );
    });
  };
  const deleteStudents = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: "delete",
          url: url + "/" + id,
        }).then(function () {
          setData(data.filter((item) => item.id !== id));
    
        });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
      showConfirmButton:false,

          icon: "success",
          timer: 1000
        });
      }
    });

  };
  const addStudents = (name, checked) => {
    axios({
      method: "post",
      url: url,
      data: {
        name: name,
        checked: checked,
      },
    }).then(function (res) {
      setData([...data, { id: res.data.id, name: name, checked: checked }]);
    });
  };
  useEffect(() => {
    getStudents();
  }, []);
  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Checked</th>
        </tr>
      </thead>
      <tbody>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              addStudents(text, "");
              // console.log(e.target.value,"false")
            }
          }}
        ></input>
        {data &&
          data.map((item, index) => (
            <tr>
              <th>{item.id}</th>
              {isedit.id === item.id && isedit.flag === true ? (
                <Input
                  type="text"
                  value={textEdit}
                  onChange={(e) => setTextEdit(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key == "Enter") {
                      updateStudents(item.id, textEdit);
                      setEdit({ id: "", flag: false });
                    }
                  }}
                ></Input>
              ) : (
                <td
                  onDoubleClick={() => {
                    setEdit({ id: item.id, flag: true });
                    setTextEdit(item.name);
                  }}
                >
                  {item.name}
                </td>
              )}

              <td>{item.checked ? "true" : "false"}</td>
              <Button onClick={() => deleteStudents(item.id)}>Delete</Button>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default Students;
