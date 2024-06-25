import Layout from "../../components/Layout";
import '../../css/NewApp.css';
import { useState } from "react";
import axios from 'axios';

function NewApp() {

    const [name, setName] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');
  
    const handleSearch = async (e) => {
      e.preventDefault();
      setError('');
      try {
        const response = await axios.post('http://localhost:4000/api/patients/searchdoctor', { name });
        setResults(response.data);
      } catch (err) {
        if (err.response && err.response.status === 404) {
          setError('Doctor not found');
        } else {
          setError('An error occurred');
        }
        setResults([]);
      }
    };
  


    return (
      <Layout>
        <main>
        
        <div className="NewApp-container">
 
    <div className="doctor-search-container">
      <h1>Search for a Doctor</h1>
      <p>Find ,search and book appointments with top healthcare professionals.</p>
      <div className="search-area">
      <form onSubmit={handleSearch}>
        <input
          type="text"
         placeholder="Enter doctor's name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="search-input"
        />
        <button className="search-button">
          Search
        </button>
        </form>
        {error && <p>{error}</p>}
      <ul>
        {results.map((doctor) => (
          <li key={doctor._id}>{doctor.firstName} {doctor.lastName} - {doctor.specialization}</li>
        ))}
      </ul>
      </div>
      <p>
        Can't find your doctor? <a href="/explore" className="explore-link">Explore more options</a>
      </p>
    </div>
    </div>
  </main>
      </Layout>
      
   );
  }

  export default NewApp;
  