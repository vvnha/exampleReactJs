import React, { useState, useContext, useRef } from 'react';
import {TodoContext} from '../contexts/TodoContext';

TodoFilterForm.propTypes = {
    
};

function TodoFilterForm(props) {
    const [searchTerm, setSearchTerm] = useState('');
    
    const {onSearch} = useContext(TodoContext);
    const typingTimeoutRef = useRef(null);


    const onHandleSearchTerm =(e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);

        if(typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const  formValue = {
                searchTerm: e.target.value,
            }
            onSearch(formValue);
        }, 300);
        
    }

    return (
        <form>
            <p>Search</p>
            <input 
            type="text"
            value={searchTerm}
            onChange = {onHandleSearchTerm}
            />
        </form>
    );
}

export default TodoFilterForm;