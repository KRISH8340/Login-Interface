import React, { useState } from 'react';
import './index.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";


function App() {
  const [formData, setFormData] = useState({
    
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const passwordVisible = () => {
    setShowPassword(prev => !prev);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value  
    });
  };

  const handleSignIn = () => {
    console.log("Name:", formData.name);
    console.log("Email:", formData.email);
    console.log("Password:", formData.password);
  };

  return (
    <div className="container">
      <div className="form">
        <h2 className="title">Welcome back</h2>

     {/* <input
          className="text-area"
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
    /> */}

        <input
          className="text-area"
          type="email"
          name="email"
          placeholder="Email Id"
          value={formData.email}
          onChange={handleChange}
        />

         <div style={{ position: 'relative' }}>
          <input
            className="text-area"
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            // type='password'
          /> 

          <span
            onClick={passwordVisible}
            style={{
              cursor: 'pointer',
              marginLeft: '-50px',
              fontSize: '14px',
              color: '#475569'
            }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

<div className='option'></div>

     <div className='remember-me'>
     <input type="checkbox" className='checkBox' />
    <label>Remember for 30 days</label>
     </div>
           <a className='link'
            href="#"
            style={{
              fontSize: '12px',
              color: '#475569',
              textDecoration: 'none',
              cursor: 'pointer',
             
            }}
            onClick={(e) => {
              e.preventDefault();
              alert('Clicked');
            }}
          >
            Forgot Password?
          </a>
         


        <button className="click" onClick={handleSignIn}>
          SIGN IN
        </button>

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '50px'
          }}
        >
          
        </div>
<div className="signup-link">
  <p>
    Don't have an account? <a href="/signup">Sign Up</a>
  </p>
</div>
      




      </div>
    </div>
  );
}

export default App;