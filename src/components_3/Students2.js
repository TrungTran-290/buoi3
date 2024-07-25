import axios from "axios";
import React, { useState } from "react";
import { Button, Input, Table } from "reactstrap";

function Students2() {
  const [data, setData] = useState([]);
  const [text,setText] =useState("")
  const [textedit,setTextEdit]=useState("")
  const [isedit,setEdit] =useState(false)
  const url = "https://66a07b747053166bcabb8c62.mockapi.io/PracticeApi"
  const getList=()=>{
    axios.get(url)
    .then(function(e){
        setData(e.data)
    })
  }
  const deleteList=(id)=>{
    axios({
        method:"delete",
        url:url+"/"+id
    })
    .then(function (res){
        let newList=(data.filter((item)=>item.id!==id))
        setData(newList)
    })
  }
  const addList = (name,checked) =>{
    axios({
        method:"post",
        url:url,
        data:{
            name:name,
            checked:checked
        }
    })
    .then(function(res){
        setData([...data,{id:res.data.id,name:name,checked:checked}])
    })
  }
  const updateList=(id)=>{
    axios({
        method:"put",
        url:url+"/"+id
    })
    .then(function(res){

    })
  }
  useState(()=>{
    getList()
  },[])
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
            <Input value={text} onChange={(e)=>(setText(e.target.value))} onKeyDown={(e)=>{
                if (e.key=="Enter"){
                    addList(text,"")
                    setText("")
                }
            }}></Input>
            {
                data&&data.map((item,index)=>(
                    <tr>
                    <th>{item.id}</th>
                    {
                        isedit.id==item.id&&isedit?<Input value={textedit} onChange={(e)=>(setTextEdit(e.target.value))} onKeyDown={(e)=>{
                            if (e.key=="Enter"){
                                // addList(text,"")
                                // setText("")
                                updateList()
                            }
                        }}></Input>:<td>{item.name}</td>
                    }
                    <td>{item.checked?"true":"false"}</td>
                    <Button className="btn btn-success" onClick={()=>deleteList(item.id)}>Delete</Button>
                  </tr>
                ))
            }
        </tbody>
      </Table>
    </div>
  );
}

export default Students2;
