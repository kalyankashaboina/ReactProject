// App.js

import React, { useState, useEffect } from 'react';

// import "./login.css"
import { useNavigate } from 'react-router-dom';

const PageLogin = () => {
  const [isFormUp, setFormUp] = useState(false);
  const Homes=useNavigate()
  const [rightEyeSize, setRightEyeSize] = useState({ width: 0, height: 0 });

  const [eyeSize, setEyeSize] = useState({ width: 0, height: 0 });
  const [isWrongEntry, setWrongEntry] = useState(false);

  const handlePasswordFocusIn = () => {
    setFormUp(true);
  };

  const handlePasswordFocusOut = () => {
    setFormUp(false);
  };

  const handleMouseMove = (event) => {
    const dw = window.innerWidth / 15;
    const dh = window.innerHeight / 15;
    const x = event.pageX / dw;
    const y = event.pageY / dh;
    setEyeSize({ width: x, height: y });
    setRightEyeSize({ width: x, height: y });
  };

  const handleBtnClick = () => {
    setFormUp(false);
    setWrongEntry(true);

    setTimeout(() => {
      setWrongEntry(false);
    }, 3000);
  };




      const handlClick=()=>{
        const storedUsers = JSON.parse(localStorage.getItem("login")) || [];
        // alert(JSON.stringify(storedUsers))
        const userName=storedUsers[0]["email"]
        // alert(userName)
        const Password=storedUsers[0]["password"]

        const LUserName=document.getElementById("username").value
        const LPassword=document.getElementById("password").value
        // alert(rUserName+"name")

        if(LUserName==userName && LPassword==Password){
          // alert("your entered correct name")
          Homes("/home")
          
        }
        else{
          alert("wrong data")
          console.log("wrong")
        }

      }




  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  

  return (<>
  <div id='bodyy'>
    <div className="panda">
      <div className="ear"></div>
      <div className="face">
        <div className="eye-shade"></div>
        <div className="eye-white">
          <div className="eye-ball" style={{ width: eyeSize.width, height: eyeSize.height }}></div>
        </div>
        <div className="eye-shade rgt"></div>
    <div className="eye-white rgt">
      <div className="eye-ball rgt" style={{ width: eyeSize.width, height: eyeSize.height }}></div>
    </div>
        
        <div className="nose"></div>
        <div className="mouth"></div>
      </div>
      <div className="body"> </div>
      <div className="foot">
        <div className="finger"></div>
      </div>
      <div className="foot rgt">
        <div className="finger"></div>
      </div>

      <form className={`form ${isFormUp ? 'up' : ''} ${isWrongEntry ? 'wrong-entry' : ''}`}>
        <div className="hand"></div>
        <div className="hand rgt"></div>
        <h1>Hostel  Login</h1>
        <div className="form-group">
          <input required="required" className="form-control" id='username'/>
          <label className="form-label">Username </label>
        </div>
        <div className="form-group">
          <input
            id="password"
            type="password"
            required="required"
            className="form-control"
            onFocus={handlePasswordFocusIn}
            onBlur={handlePasswordFocusOut}
          />
          <label className="form-label">Password</label>
          <p className="alert">Invalid Credentials..!!</p>
          <button className="btn" onClick={handlClick} >
            Login
          </button>
        </div>
      </form>
    </div>
    </div>
    </>
  );
};

export default PageLogin;
