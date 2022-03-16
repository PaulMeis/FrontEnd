//implement Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AcademicInformation from "./pages/AcademicInformation";
import ContactInformation from "./pages/ContactInformation";
import FinancialInformation from "./pages/FinancialInformation";
import ForgotPassword from "./pages/ForgotPassword";
import Recaptcha from 'react-recaptcha';

//styled components
import {StyledContainer} from "./components/Styles";

//loader-spinner css
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


//
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <StyledContainer>
        <Routes>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/forgotpassword" element={<ForgotPassword/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
          <Route exact path="/contact" element={<ContactInformation/>}/>
          <Route exact path="/financial" element={<FinancialInformation/>}/>
          <Route exact path="/academic" element={<AcademicInformation/>}/>
        </Routes>
      </StyledContainer>
     </Router>
  );
}

export default App;
