import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { TimePicker } from 'antd';

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [workingHours, setWorkingHours] = useState([]);
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhoneNumber] = useState("");

  const specializations = [
    "Dermatology",
    "Orthodontics",
    "Psychiatry",
    "Cardiology",
    "Neurology",
    "Pediatrics",
    "Urology",
    "Obstetrics",
    "Otolaryngology",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const schedule = {
      startTime: workingHours[0]?.format('HH:mm'),
      stopTime: workingHours[1]?.format('HH:mm'),
    };

    axios
      .post("http://localhost:4000/api/doctors/signup", {
        firstName,
        lastName,
        specialization,
        gender,
        schedule,
        education,
        experience,
        address,
        phone,
        email,
        password,
      })
      .then((result) => {
        if (result.status === 200) {
          sessionStorage.setItem("info", JSON.stringify(result.data));
          window.location.href = "/doctor/appointments";
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <main>
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <div className="left-column">
              <div className="input-group">
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  name="first-name"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  name="last-name"
                  onChange={(e) => setLastName(e.target.value)}
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
                <select
                  name="specialization"
                  onChange={(e) => setSpecialization(e.target.value)}
                  value={specialization}
                  required
                >
                  <option value="">Select</option>
                  {specializations.map((item, i) => (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="working-hours">Working Hours</label>
                <TimePicker.RangePicker
                  value={workingHours}
                  onChange={(value) => setWorkingHours(value)}
                  format="HH:mm"
                  use12Hours
                />
              </div>
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
            </div>
            <div className="right-column">
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
              <div className="input-group">
                <label htmlFor="education">Education</label>
                <input
                  type="text"
                  name="education"
                  onChange={(e) => setEducation(e.target.value)}
                  value={education}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="experience">Experience</label>
                <input
                  type="text"
                  name="experience"
                  onChange={(e) => setExperience(e.target.value)}
                  value={experience}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="phone-number">Phone Number</label>
                <input
                  type="text"
                  name="phone-number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phone}
                  required
                />
              </div>
            </div>
          </div>
          <button className="form-button" type="submit">
            Sign Up
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </main>
  );
}

export default SignUp;