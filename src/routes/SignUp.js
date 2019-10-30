import React, { useCallback } from "react";

const SignUp = ({ history }) => {
  const redirectSignUp = () => {
    history.push("/signup");
  };

  return (
    <div className="centered">
      <div className="row">
        <h1>Sign Up</h1>
        <form>
          <label>
            Email
            <input name="email" type="email" placeholder="Email" />
          </label>
          <lable>
            Password
            <input name="password" type="password" placeholder="Password" />
          </lable>
          <button type="submit">Sign Up</button>
        </form>
        <button onClick={redirectSignUp}>Log In</button>
      </div>
    </div>
  );
};

export default SingUp;
