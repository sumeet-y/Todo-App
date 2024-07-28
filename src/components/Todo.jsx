import { useEffect, useRef, useState } from "react"
import "./Todo.css"
import Todos from "./Todos";


const Todo = () => {

  const [todo, setTodo] = useState([]);
  const inputRef = useRef(null);

  function createTodo() {
    if(inputRef.current.value == ''){
      alert("Please Add Some Todo");
    }else{
      setTodo([...todo, { text: inputRef.current.value, no: Math.random() * 100}]);
      inputRef.current.value = '';
    }
  }

  // useEffect(() => {
  //   console.log(todo)
  // }, [todo])

  function deleteTodo(no) {

    // console.log("delete item no", no);
    const data = todo.filter((item) => {
      return item.no != no
    })
    setTodo(data);
    // console.log("data is", data);
  }
  return (

    <div className="todo-container">
      <div className="todo-box">
          <input type="text" ref={inputRef} placeholder="Create New Todo" className="input-text" />
          <button onClick={createTodo} type="submit" className="btn" >Add</button>
        {todo.map((item) => {
          return <Todos key={item.no}  no={item.no} todoText={item.text} delFun={deleteTodo}  />
        })}      
      </div>
    </div>

  )
}

export default Todo
