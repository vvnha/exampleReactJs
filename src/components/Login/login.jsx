import React, {useContext, useState} from 'react';
import {AuthContext} from '../contexts/AuthContext'

function Login(props) {
    const {isAuthenticated, toggleAuth} = useContext(AuthContext);
    return (
        <div>
            <p>{isAuthenticated ? 'You are logged in' : ''}</p>
            <button onClick={toggleAuth}>{isAuthenticated ? 'Log out' : 'Log in'}</button>
        </div>
    );
}

export default Login;