import React, { useState, useEffect } from "react"
// import logo from './logo.svg';
import './App.css';
import Todo from "./Todo"
import { Button } from '@material-ui/core';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import db from "./Firebase"
import firebase from "firebase"

function App() {

  const [ todos, setTodos ] = useState([]);
  const [ input, setInput ] = useState("")

  useEffect(() =>{
    db.collection("todos").orderBy("timestamp","desc").onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setTodos([...todos, input]);
    setInput("")
  }

  




  return (
    <div className="App">
      <h1>React Todo App</h1>

      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input type="text" placeholder="Add todo" onChange={(e) => setInput(e.target.value)} value={input}/>
        </FormControl>
        <Button onClick={handleSubmit} type="submit" disabled={!input} variant="contained" color="primary">
          Add Todo
        </Button>
      </form>
      {
        todos.map((todo, i) =>(
          <Todo todo={todo} key={i}/>
        ))
      }
    </div>
  );
}

export default App;
