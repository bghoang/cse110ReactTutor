import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../auth/Auth";
import db, { provider, provider2 } from "../base";
import "../App.css";

const Login = ({ history }) => {
  const handleLogin = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    try {
      db.auth().createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  const handleLoginWithGoogle = () => {
    try {
      db.auth().signInWithPopup(provider2);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  const handleLoginWithFb = () => {
    try {
      db.auth().signInWithPopup(provider);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/" />;
  }
  const redirectSignUp = () => {
    history.push("/signup");
  };

  return (
    <div className="centered">
      <h1>Log In</h1>
      <form onSubmit={handleLogin}>
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
      <button onClick={handleLoginWithGoogle}>Log In with Google</button>
      <button onClick={handleLoginWithFb}>Log In with Facebook</button>
    </div>
  );
};

export default Login;
