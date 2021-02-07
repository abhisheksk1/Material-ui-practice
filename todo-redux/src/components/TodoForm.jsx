import React, {useState} from 'react';
import {v4} from "uuid";
import {connect} from "react-redux";
import {addTodo} from "../action/todo";
import {Container, Typography, Grid, FormGroup, TextField, Input, Button} from "@material-ui/core";


const TodoForm = ({addTodo}) => {
    const [title, setTitle] = useState(" ");

    const handleSubmit = e => {
        e.preventDefault();
        if(title === ''){
            return alert("plz add a todo");
        }
        const todo ={
            title,
            id: v4()
        }
        addTodo(todo);
        setTitle("");
    }

    return (
        <div>
            <Container>
                <Grid xs={12} container>
                    <Grid xs={2} item/>
                    <Grid xs={8} container direction="row">
                        <form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Input 
                                    type="text"
                                    name="todo"
                                    id="todo"
                                    placeholder="Your Next Todo"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                />
                                <Button style={{backgroundColor: "blue"}} color="secondary" onClick={handleSubmit}>Add Todo</Button>
                            </FormGroup>
                        </form>
                    </Grid>
                    <Grid xs={2} item/>
                </Grid>
            </Container>
        </div>
    )
};

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    addTodo: todo => {
        dispatch(addTodo(todo))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);









