import { Link ,useNavigate } from "react-router-dom";
import { auth } from "../firebase";  
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import './signin.css';
import Navbar from '../components/Navbar'; 

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  // Handle user sign in with email and password
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      console.log("User signed in:", user);
      navigate("/camera");

    } catch (err) {
      // Handle errors here
      const errorMessage = err.message;
      const errorCode = err.code;

      setError(true);

      switch (errorCode) {
        case "auth/wrong-password":
          setErrorMessage("The password is incorrect.");
          break;
        case "auth/user-not-found":
          setErrorMessage("No user found with this email.");
          break;
        case "auth/invalid-email":
          setErrorMessage("This email address is invalid.");
          break;
        case "auth/user-disabled":
          setErrorMessage("This account has been disabled.");
          break;
        default:
          setErrorMessage(errorMessage);
          break;
      }
    }
  };

  return (
    <div><Navbar/>
    <div className="signinContainer">
      <div className="signinContainer__box">
        <div className="signinContainer__box__inner">
          <h1>Sign In</h1>
          <form className="signinContainer__box__form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={email}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
              value={password}
            />
            <button type="submit">Sign In</button>
            {error && <p>{errorMessage}</p>}
          </form>

          <div className="signinContainer__box__signup">
            <p>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignIn;
