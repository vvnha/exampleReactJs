import React, { useContext } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {TodoContext} from '../contexts/TodoContext';
import {AuthContext} from '../contexts/AuthContext';
import { DELETE_TODOS } from '../reducers/type';

function TodoList(props) {

    const {theme} = useContext(ThemeContext);
    const {isLightTheme, light, dark} = theme;
    const style = isLightTheme ? light: dark;
    
    const {dispatch, todoList} = useContext(TodoContext);
    const {isAuthenticated} = useContext(AuthContext)

    const handleClick = (todo) =>{
        // deleteTodo(todo);
        dispatch({
            type: DELETE_TODOS,
            payload: {
                id: todo.id
            }
        });
    }

    return (
        <div>
         {
             isAuthenticated ? (
                <ul className="todo-list" style={style}>
                     {todoList.map(todo => (
                        <li 
                            key={todo.id} 
                            onClick={() => handleClick(todo)
                        }>
                        {todo.title}
                        </li>
                    ))}
                </ul>
             ) : <p>Not Auth</p>
         }   
        </div>
    );
}

export default TodoList;