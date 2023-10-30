import React, { useState } from "react";
import {
  connectAuthEmulator,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = () => {
  const auth = getAuth();

  if (window.location.hostname === "localhost") {
    connectAuthEmulator(auth, "http://127.0.0.1:9099");
  }
  const navigate = useNavigate();
  const [authenticate, setAuthenticate] = useState(false);

  const signInWithGoogle = async () => {
    setAuthenticate(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setAuthenticate(false);
      });
  };

  return (
    <div>
      <h1>Welcome to the Upholstery Shop!</h1>
      <p>Please Login to continue</p>
      <button onClick={() => signInWithGoogle()} disabled={authenticate}>
        Sign in with Google
      </button>
    </div>
  );
};

export default LoginPage;
