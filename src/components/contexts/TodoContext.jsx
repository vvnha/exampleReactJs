import React, { createContext, useState, useEffect, useReducer } from 'react';
import { todoReducer } from '../reducers/TodoReducer';
import { GET_TODOS, SAVE_TODOS } from '../reducers/type';

export const TodoContext = createContext();

const TodoContextProvider = ({children}) => {
    //const [todoList,  setTodoList] = useState([])
    
    const [todoList, dispatch] = useReducer(todoReducer,[]);
    const [tempId, setTempId] = useState(todoList.length);

    useEffect(() =>{
        dispatch({
            type: GET_TODOS,
            payload: null
        })
        // console.log('get todos');
        // const todos = localStorage.getItem('todos');
        // if(todos) setTodoList(JSON.parse(todos));
    },[]);

    useEffect(()=>{
        dispatch({
            type: SAVE_TODOS,
            payload: {todos: todoList}
        })
    }, [todoList])

    // useEffect(()=>{
    //     console.log('saving todos');
    //     localStorage.setItem('todos', JSON.stringify(todoList));
    // }, [todoList])
    
    // const deleteTodo = (todo) => {
    //     const index = todoList.findIndex(x => x.id === todo.id);
    //     if(index < 0) return;

    //     const newTodoList = [...todoList];
    //     newTodoList.splice(index, 1);
    //     setTodoList(newTodoList)
    // }

    // const addTodo = (formValues) =>{
    //     const tempIdList = todoList.length;
    //     setTempId(tempIdList+1);
    //     const newTodo = {
    //     id: tempIdList + 1,
    //     ...formValues,
    //     }
    //     const newTodoList = [...todoList];
    //     newTodoList.push(newTodo);
    //     setTodoList(newTodoList);
    // }

    const onSearch = (formValue) => {
        console.log(formValue);

    }

    const todoContextData = {
        todoList,
        // addTodo,
        // deleteTodo,
        dispatch
    }
    return(
        <TodoContext.Provider value={todoContextData} >
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;