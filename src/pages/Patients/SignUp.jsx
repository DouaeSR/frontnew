
import { Link } from 'react-router-dom';
import '../../css/SignUp.css'
import { useState } from "react";
import axios from 'axios';


function SignUp() {

    const  [firstname, setFirstName] =useState ('')
    const  [lastname, setLastName] = useState ('')
    const  [birthday, setBirthDay] =useState ('')
    const  [gender, setGender] =useState ('')
    const  [email, setEmail] =useState ('')
    const  [password, setPassword] =useState ('')

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/api/patients/signup',{firstname,lastname,birthday,gender,email,password})
        .then(result=> console.log(result))

    };

    return (
      <main>
       <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="first-name">First Name</label>
                <input type="text"
                 
                 name="first-name"
                 onChange={(e)=> setFirstName(e.target.value)}
                 value={firstname}
                 
                 /> 
            </div>
            <div className="input-group">
                <label htmlFor="last-name">Last Name</label>
                <input type="text"
               
                 name="last-name"
                 onChange={(e)=> setLastName(e.target.value)}
                 value={lastname}
                 
                 />
            </div>
            <div className="input-group">
               
               <label htmlFor="gender">Gender</label>
               <select
                
                name="gender"
                onChange={(e)=> setGender(e.target.value)}
                value={gender}
                >
                   <option value="">Select</option>
                   <option value="male">Male</option>
                   <option value="female">Female</option>
                   
               </select>
           </div>
           <div className="input-group">
               <label htmlFor="birthday">Birthday</label>
               <input 
                type="date"
              
                name="birthday"
                onChange={(e)=> setBirthDay(e.target.value)}
                value={birthday}
                 />
           </div>
           
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
            <button className="form-button" type="submit">Sign Up</button>
        </form>
        <p>Already have an account?  <Link to="/login">Log in</Link></p>
    </div>
      </main>
     
    );
  }
  
  export default SignUp;
  