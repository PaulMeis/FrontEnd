import React, {Component} from 'react';
import {useEffect } from "react";
import {useState} from 'react';


const AuthContext = React.createContext(null)


const AuthContextProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const login = () => {
        // your authentication logic
        setIsAuthenticated(true)
    }

    const logout = () => {
        // your logout logic
        setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
           {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;