import React from 'react'
import "./loginOne.css"
import { Link, useNavigate } from 'react-router-dom'

function LogInOne() {



  const Homes=useNavigate()

       
  const handlClick=()=>{
   
    const storedUsers = JSON.parse(localStorage.getItem("login")) || [];
    // alert(JSON.stringify(storedUsers))
    if(storedUsers.length>0){
    const userName=storedUsers[0]["email"]
    alert(userName)
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

  }




  return (
    <>
    
    
    
    <div className="container">
  <div className="drop">
    <div className="content">
      <h2>Sign in</h2>
      <form>
        <div className="inputBox">
          <input type="text" placeholder="Username"  id='username'/>
        </div>
        <div className="inputBox">
          <input type="password" placeholder="Password"  id="password" />
        </div>
        <div className="inputBox">
          {/* <input type="submit" defaultValue="Login"  /> */}
          <button onClick={handlClick}>
            Login 
          </button>
        </div>
      </form>
    </div>
  </div>
  <Link to={"/forgetpassword"} href="#" className="btns">
    Forget Password
  </Link>
  <Link to={"/"} href="#" className="btns signup">
    Signup
  </Link>
  
</div>

    
    
    
    
    </>
  )
}

export default LogInOne