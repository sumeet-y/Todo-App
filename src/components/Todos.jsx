import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import "./Todos.css"
const Todos = ({no,todoText,delFun}) => {
  
  return (
    <p className="todo-list" key={no}>{todoText} <RiDeleteBin6Line  onClick={()=>delFun(no)} className="delete-icon" /></p>
  )
}

export default Todos;