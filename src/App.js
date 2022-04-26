//implement Pages
import Start from "./pages/Start";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AcademicInformation from "./pages/AcademicInformation";
import ContactInformation from "./pages/ContactInformation";
import FinancialInformation from "./pages/FinancialInformation";
import ForgotPassword from "./pages/ForgotPassword";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";

import AuthContextProvider from "./components/AuthContext";
import PrivateRoute from "./pages/PrivateRoute";
//styled components
import {StyledContainer} from "./components/Styles";
import React, { Fragment }  from 'react';

//loader-spinner css
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
//test

//
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <AuthContextProvider> 
    <Router>
    <Fragment>

     <Topbar />
     <StyledContainer className="container">
        <Sidebar />
        <Routes>

         <Route exact path="/signup" component={<Signup/>}/>
          <Route exact path="/forgotpassword" component={<ForgotPassword/>}/>
          <Route exact path="/login" component={<Login/>}/>
          <Route exact path="/contact" component={<ContactInformation/>}/>
          <Route exact path="/financial" component={<FinancialInformation/>}/>
          <Route exact path="/academic" component={<AcademicInformation/>}/>
        
        
          <Route
            path="/home"
             element={
              <PrivateRoute>
                 <Home />
             </PrivateRoute>
           }
          />

<Route
  path="/"
  element={
    <PrivateRoute>
      <Start />
    </PrivateRoute>
  }
/>

<Route
  path="/user/:userId"
  element={
    <PrivateRoute>
      <User />
    </PrivateRoute>
  }
/>

<Route
  path="/newUser"
  element={
    <PrivateRoute>
      <NewUser />
    </PrivateRoute>
  }
/>

         <PrivateRoute path="/home"><Home/></PrivateRoute>
         <PrivateRoute path="/"><Start/></PrivateRoute>
         <PrivateRoute path="/user/:userId"><User/></PrivateRoute>
         <PrivateRoute path="/"><Start/></PrivateRoute>
         <PrivateRoute path="/newUser"><NewUser/></PrivateRoute>
        </Routes>
      </StyledContainer>
      </Fragment>

     </Router>
     </AuthContextProvider>
  );
}
export default App;
