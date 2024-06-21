// import "../../css/SignIn.css";
import { Link } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';

function SignUp() {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [gender, setGender] = useState('');
    // const [cin, setCIN] = useState('');
    // const [licenseNumber, setLicenseNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/api/doctors/signup', {
            firstName,
            lastName,
            specialization,
            gender,
            // cin,
            // licenseNumber,
            email,
            password
        })
        .then(result => console.log(result))
        // .catch(error => console.error(error));
    };

    return (
      <main>
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="first-name">First Name</label>
                    <input
                        type="text"
                        name="first-name"
                        onChange={(e) => setfirstName(e.target.value)}
                        value={firstName}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="last-name">Last Name</label>
                    <input
                        type="text"
                        name="last-name"
                        onChange={(e) => setlastName(e.target.value)}
                        value={lastName}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="gender">Gender</label>
                    <select
                        name="gender"
                        onChange={(e) => setGender(e.target.value)}
                        value={gender}
                        required
                    >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="specialization">Specialization</label>
                    <input
                        type="text"
                        name="specialization"
                        onChange={(e) => setSpecialization(e.target.value)}
                        value={specialization}
                        required
                    />
                </div>
                {/* <div className="input-group">
                    <label htmlFor="cin">CIN</label>
                    <input
                        type="text"
                        name="cin"
                        onChange={(e) => setCIN(e.target.value)}
                        value={cin}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="license-number">License Number</label>
                    <input
                        type="text"
                        name="license-number"
                        onChange={(e) => setLicenseNumber(e.target.value)}
                        value={licenseNumber}
                        required
                    />
                </div> */}
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                </div>
                <button className="form-button" type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <Link to="/login">Log in</Link></p>
        </div>
      </main>
    );
}

export default SignUp;