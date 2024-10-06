import React from "react";
import "./Signup.css";
import { auth, provider } from "../Firebase/firebaseconfig";
import { signInWithPopup } from "firebase/auth";
import MethodCard from "./MethodsCard/MethodCard";

const Signup = () => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user); // User details
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  return (
    <>
      <div className="signup-container ">
        <div className="title font-t ">
          <h1>Choose A Method</h1>
        </div>
        <div className="method">
          <div className="card-m" onClick={handleGoogleLogin}>
            <MethodCard src={"../Icons/google.jpg"} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
