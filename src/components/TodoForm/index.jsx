import React, { useContext, useState } from 'react';
import {TodoContext} from '../contexts/TodoContext';
import { ADD_TODOS } from '../reducers/type';
import {v4 as uuidv4} from 'uuid';

function TodoForm(props) {
    const [value, setValue] = useState('');

    const {dispatch} = useContext(TodoContext);


    const handleValueChange = (e) =>{
        setValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formValue = {
            title: value,
        }
        dispatch({
            type: ADD_TODOS,
            payload: {
                todo: {
                    id: uuidv4(),
                    title: formValue.title
                }
            }
        })
        // addTodo(formValue);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>Add</p>
            <input type="text" value={value} onChange={handleValueChange} />
        </form>
    );
}

export default TodoForm;