import React, {useState} from "react"
import "./Todo.css"
import { List, ListItem, ListItemText, Modal} from "@material-ui/core"
import db from "./Firebase"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const Todo = (props) => {

    const [ open, setOpen ] = useState(false)
    const [ input, setInput ] = useState()	

    const updateTodo = () => {
	
	db.collection("todos").doc(props.todo.id).set({
	    todo: input	
	}, { merge: true })
	setOpen(false)
    }
    
    

    return (
	    <div className="todo__list">

		<>
		<Modal
	            open={open}
		    onClose={e => setOpen(false)}   
		>
		    <div className="modal">

			
			<h1>{props.todo.todo}</h1>
			<input value={input} onChange={e => setInput(e.target.value)}></input>
			<button onClick={updateTodo}>Update Todo</button>    
		    </div>	
		</Modal>

		
		<List>
		     <ListItem>		    
		        <ListItemText primary="Todo" secondary={props.todo.todo}></ListItemText>
		     	<button style={{ 
			    marginRight: "0.01%", 
			    cursor: "pointer",
			    padding: "3px 16px",
			    borderRadius: "8px",
			    border: "3px solid whitesmoke",
			    background: "rgb(30, 142, 216)",
			    color: "white" 
			    }}  onClick={e => setOpen(true)}>
			        Edit
			</button>    
			<DeleteForeverIcon style={{cursor:"pointer", color: "rgb(177, 128, 128)"}} onClick={e => db.collection("todos").doc(props.todo.id).delete()}></DeleteForeverIcon>
		     </ListItem>
	        </List>

		</>
		
		
	    </div>
	
    )
}

export default Todo
