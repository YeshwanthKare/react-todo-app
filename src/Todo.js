import React from "react"
import "./Todo.css"
import { List, ListItem, ListItemText} from "@material-ui/core"
import db from "./Firebase"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const Todo = (props) => {
    return (
	    <div className="todo__list">
		<List>
		<ListItem>
	            <ListItemText primary="Todo" secondary={props.todo.todo}></ListItemText>
		    <DeleteForeverIcon style={{cursor:"pointer", color: "rgb(177, 128, 128)"}} onClick={e => db.collection("todos").doc(props.todo.id).delete()}></DeleteForeverIcon>
		    {/* <ListItemAvatar>			
		    </ListItemAvatar> */}
		</ListItem>
	    </List>
	    </div>
	
    )
}

export default Todo
