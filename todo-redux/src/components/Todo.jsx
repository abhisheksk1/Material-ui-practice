import React from 'react';
import { List, ListItem, } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles"
import {FaCheckDouble} from "react-icons/fa";
import {connect} from  "react-redux";
import {removeTodo} from "../action/todo";

const useStyle = makeStyles({
    move: {
        marginTop: "5",
        marginBottom: "2",
    },
    floatRight:{
        marginLeft: "8rem"
    }
})

const Todo = ({todos, markComplete}) => {
    const classes = useStyle();
    return (
        <div>
            <List className={classes.move}>
                {todos.map((todo) => (
                    <ListItem key={todo.id}>
                        {todo.title}
                        <span onClick={() => markComplete(todo.id)} className={classes.floatRight}>
                            <FaCheckDouble />
                        </span>
                    </ListItem>
                ))}
            </List>
        </div>
    )
};

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    markComplete: id => {
        dispatch(removeTodo(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo)