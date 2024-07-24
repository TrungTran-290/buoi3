import React, { useEffect, useState } from 'react'
import axios from "axios"
function API() {
const [data, setData] = useState([])
const fetchAPI = ()=>{
    const url="https://66a07b747053166bcabb8c62.mockapi.io/PracticeApi"
    axios.get(url)
    .then(function(res){
        console.log(res)
        setData(res.data)
    })
    .catch()
}
useEffect(()=>{
    fetchAPI()
},[])
  return (
    <div>
      {
        data.map((item,index)=>(
            <h1 key={index}>{item.id}, {item.name}</h1>
        ))
      }
    </div>
  )
}

export default API
