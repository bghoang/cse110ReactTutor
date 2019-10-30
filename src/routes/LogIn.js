import React from "react";

const Login = ({ history }) => {
  return (
    <div className="centered">
      <div className="row">
        <h1>Log In</h1>
        <form>
          <label>
            Email
            <input name="email" type="email" placeholder="Email" />
          </label>
          <lable>
            Password
            <input name="password" type="password" placeholder="Password" />
          </lable>
          <button type="submit">Log In</button>
        </form>
        <button onClick={redirectSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default LogIn;
