import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../post-Login/home";
import Hostels from "../post-Login/hostels";
import Facilities from "../post-Login/facilities";
import facilities from "../post-Login/facilities";
import Button from "../button";
import DefaultPage from "../post-Login/default";
import RegistrationForm from "../Pre-login/register";
import LoginPage from "../Pre-login/login";
import ForgetPassword from "../Pre-login/forgetpassword";
import AboutPage from "../post-Login/aboutpage";
import LogIn1 from "../Pre-login/login1";
import LogInOne from "../Pre-login/login1";

const NavigatePage = () => {
  return (
    
    <>
    {/* <BrowserRouter> */}
      <Routes>
<Route path="/" Component={RegistrationForm}/>
<Route path="/login" Component={LogInOne}/>
<Route path="/forgetpassword" Component={ForgetPassword}/> 




        <Route path="/home" Component={HomePage} />
        <Route path="*" Component={DefaultPage}/>

        <Route path="/about" Component={AboutPage}/>


        <Route path="/facilities/:id/:id" Component={Facilities} />
        <Route path="/hostels/:id" Component={Hostels} />
      </Routes>

      {/* </BrowserRouter> */}
    </>
  );
};
export default NavigatePage;
