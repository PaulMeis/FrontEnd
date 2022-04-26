import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import isauth from 'react';

const PrivateRoute = ({ children }) => {
    const authed = isauth() // isauth() returns true or false based on localStorage
    
    return authed ? children : <Navigate to="/Home" />;
  }

  export default PrivateRoute