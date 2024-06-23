
import { Link } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
function SignIn() {

  const  [email, setEmail] =useState ('')
  const  [password, setPassword] =useState ('')


  const handleSubmit = (e) => {

    e.preventDefault();
    axios.post('http://localhost:4000/api/doctors/login',{email,password})
    .then((result) => {
      if(result.status===200){          
        sessionStorage.setItem('info', JSON.stringify(result.data));
        window.location.href = "/doctor/appointments";
      }
    })
   

};
  return (
    
    <div className="login-container">
      
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        
      <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email" 
                  onChange={(e)=> setEmail(e.target.value)}
                  value={email}
                />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={(e)=> setPassword(e.target.value)}
                  value={password}
                />
            </div>    
        <div className="forgot-password">
          
          <Link to="/login">Forgot Password?</Link>
        </div>
        <button className="form-button" type="submit">Login</button>
      </form>
      <div className="signup-link">
        
        Don't have an account? <Link to="/doctor/signup">Sign Up</Link>
      </div>
    </div>
  );
}

export default SignIn;
