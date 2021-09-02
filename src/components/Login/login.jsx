import React, {useContext, useState} from 'react';
import {AuthContext} from '../contexts/AuthContext'
import { TOGGLLE_AUTH } from '../reducers/type';

function Login(props) {
    const {isAuthenticated, dispatch} = useContext(AuthContext);
    
    const handleClick = () =>{
        dispatch({
            type: TOGGLLE_AUTH,
        })
    }

    return (
        <div>
            <p>{isAuthenticated ? 'You are logged in' : ''}</p>
            <button onClick={handleClick}>{isAuthenticated ? 'Log out' : 'Log in'}</button>
        </div>
    );
}

export default Login;