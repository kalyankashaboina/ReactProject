import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(
      !email || !emailRegex.test(email) ? "Enter valid email address" : ""
    );
  };

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePassword = (event) => {
    setPassword(event.target.value);
    let pwdValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    setPasswordError(
      !pwdValidation.test(password) ? "Enter a valid password" : ""
    );
  };

  const [confirmpassword, setConfirmPassword] = useState("");
  const [confirmpassworderror, setConfirmPasswordError] = useState("");

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
    setConfirmPasswordError(
      password && password !== event.target.value
        ? "Enter the correct password"
        : ""
    );
  };

  const [gender, setGender] = useState("");
  const handleGender = (event) => {
    setGender(event.target.value);
  };

  const [country, setCountry] = useState("");
  const handleCountry = (event) => {
    setCountry(event.target.value);
  };
  let userDetails=[]
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if there are any validation errors
    if (emailError || passwordError || confirmpassworderror) {
      return; // Do not proceed with form submission if there are errors
    }

    const UserInfo = {
      email,
      password,
      confirmpassword,
      gender,
      country,
    };
    console.log(UserInfo);
    // alert("successfully Registered");
    userDetails.push(UserInfo);
    localStorage.setItem("login",JSON.stringify(userDetails))
    navigate("/login")
  };

  return (
    <>
      <h3 className="text-center pt-3">Registration Form</h3>
      <form className="mt-3 bg-info p-3 rounded " onSubmit={handleSubmit}>
        <div className=" pt-2 pb-2">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control col-xs-2"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={handleEmail}
            required
          />
          {emailError && <p className="text-danger">{emailError}</p>}
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="m-auto col-md-2 pt-2 pb-2">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control form-control-sm"
            id="exampleInputPassword1"
            value={password}
            onChange={handlePassword}
            required
          />
          {passwordError && <p className="text-danger">{passwordError}</p>}
        </div>
        <div className="m-auto col-md-2">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control form-control-sm"
            id="exampleInputPassword2"
            value={confirmpassword}
            onChange={handleConfirmPassword}
            required
          />
          {confirmpassworderror && (
            <p className="text-danger">{confirmpassworderror}</p>
          )}
        </div>
        <div className="m-auto col-md-2 pt-2 pb-2">
          <p className="mb-2 pb-1">Gender: </p>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="femaleGender"
              value="male"
              onChange={handleGender}
              checked={gender === "male"}
            />
            <label className="form-check-label" htmlFor="femaleGender">
              Male
            </label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="maleGender"
              value="female"
              onChange={handleGender}
              //   checked={gender === "female"}
            />
            <label className="form-check-label" htmlFor="maleGender">
              Female
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="otherGender"
              value="other"
              onChange={handleGender}
              checked={gender === "other"}
            />
            <label className="form-check-label" htmlFor="otherGender">
              Other
            </label>
          </div>
        </div>
        <div className="m-auto col-md-2 pt-2 pb-2">
          <select
            className="custom-select"
            onChange={handleCountry}
            value={country}
          >
            <option disabled>Select Country</option>
            <option value="india">india</option>
            <option value="Unitedstates">Unitedstates</option>
            <option value="Australia">Australia</option>
          </select>
        </div>
        <div className="m-auto col-md-2">
          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
          <br></br>
          <br></br>
        <Link to="/login">I already have an account</Link>
        </div>
       
      </form>
    </>
  );
};
export default RegistrationForm;