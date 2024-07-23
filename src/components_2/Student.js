import React from 'react'
import { ListGroupItem } from 'reactstrap'

function Student(props) {
    const {item,deleteById,reChecked} = props
  return (
    <ListGroupItem>
        <input type='checkbox' checked={item.checked} onClick={(e)=>(reChecked(e.target.value))}></input>
      <p>{item.name}</p>
      <button></button>
    </ListGroupItem>
  )
}

export default Student
