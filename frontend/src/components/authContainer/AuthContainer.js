import React from 'react';
import { useState } from 'react';
import Login from '../login/Login';
import Signup from '../signup/Signup';
import './AuthContainer.css'; 

const AuthContainer = ({ sendDataRoot}) => {

  const [postedBy, setPostedBy] = useState({
    id: null,
    name: null,
    email: null,
  })

  const userData = {
    id: null,
    name: null,
    email: null
  };

  const handlePostedBy = (postedByData) => {
    setPostedBy(postedByData);
    sendDataRoot(postedByData)
    localStorage.setItem('userData', JSON.stringify(postedByData));
  }

  return (
    <div className="auth-container">
        <Login  sendData={handlePostedBy} />
        <Signup />
    </div>
  );
};

export default AuthContainer;
