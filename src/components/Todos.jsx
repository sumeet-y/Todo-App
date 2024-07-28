import React, { useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { TbCheckbox, TbDog } from "react-icons/tb";
import "./Todos.css"
import { FaS } from 'react-icons/fa6';

const Todos = ({no,todoText,delFun}) => {

  const[ isChecked , setIsChecked ] = useState(false);
  const[ style , setStyle ] = useState("none");

  function toggleTodo(){
    if(!isChecked){
      setIsChecked(true);
      setStyle("line-through");
    }else{
      setIsChecked(false);
      setStyle("none");
    }
  }

  return (
    <div className="todo-list" key={no} onClick={toggleTodo} > 
    <div className="check-box" > 
      { isChecked ? <TbCheckbox className='pointer'/> : <MdCheckBoxOutlineBlank className='pointer'/> }
    </div>
      <p className="text" style={{textDecoration:style}}> {todoText}</p> 
      <RiDeleteBin6Line  onClick={()=>delFun(no)} className="delete-icon" /> 
    </div>
  )
}

export default Todos;