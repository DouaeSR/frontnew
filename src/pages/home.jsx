import Home1 from '../images/home1.jpg'
import Home2 from '../images/home2.jpg'
import Image1 from '../images/search2.png'
import Image2 from '../images/appointment (1).png'
import Image3 from '../images/content.png'
import { Link } from 'react-router-dom';
import '../css/Home.css'
function Home() {
    return (
      <main>
      <div className="cover-container">
          <div className="cover-image"></div>
          <div className="content">
              <h1>Better health at your fingertips</h1>
              <p>With this website you get your own online booking system where patients can schedule appointments 24/7 with certified doctors.</p>
              <button className="btn"><Link to="/patient/signup">Make an appointment</Link></button>
          </div>
      </div>

      <div className="container1">
          <div className="image">
          <img src={Home1} alt="smth"/>
              
          </div>
          <div className="aboutus">
              <h1>About us</h1>
              <p>Dats in an online doctor appointment booking website where the patients can book appointments with doctors. The patients can book appointments anytime, anywhere with their desired doctors according to their problems.</p>
              <p>After creating an account, the user can book a slot or they can even cancel an appointment. The user can be a patient or doctor, and both can receive emails from each other.</p>
              <div className="buttons">
                  <button><Link to="/patient/signup">Make an appointment</Link></button>
                  <button><Link to="/login">Contact us</Link></button>
              </div>
          </div>
      </div>

      <div className="services">
          <h1>Our services</h1>
         <div className="boxcountainer" >
            <div className="box">
              <img src={Image1} alt=" smth"/>
              <h3>Search</h3>
              <p>You can search for any doctor yor any specialty you want according to your problem and then choose your doctor</p>
          </div>
          <div className="box">
              <img src={Image2} alt="smth"/>
              <h3>Book</h3>
              <p>You can book appointments with all your desired doctors anytime everywhere</p>
          </div>
          <div className="box">
              <img src={Image3} alt="smth"/>
              <h3>Manage</h3>
              <p>You can manage your appointments add, modify or cancel either you're a doctor or a patient</p>
          </div>
          </div> 
      </div>

     
          <div className="specialities">
      <div className="left-div">
      <img src={Home2} alt="smth"/>
      </div>
      <div className="right-div">
        <div className="row">
          <div className="box1">
            <i className="fas fa-stethoscope stethoscope-icon"></i>
            <h3>Dermatology</h3>
            <p>Related to skin, hair, and nails.</p>
          </div>
          <div className="box1">
            <i className="fas fa-stethoscope stethoscope-icon"></i>
            <h3>Cardiology</h3>
            <p>Identify heart diseases.</p>
          </div>
          <div className="box1">
            <i className="fas fa-stethoscope stethoscope-icon"></i>
            <h3>Neurology</h3>
            <p>Related to the brain, spinal cord, and nerves.</p>
          </div>
        </div>

        <div className="row">
          <div className="box1">
            <i className="fas fa-stethoscope stethoscope-icon"></i>
            <h3>Otolaryngology</h3>
            <p>Related to ear, nose, throat, head, and neck disorders.</p>
          </div>
          <div className="box1">
            <i className="fas fa-stethoscope stethoscope-icon"></i>
            <h3>Obstetrics</h3>
            <p>Everything related to childbirth.</p>
          </div>
          <div className="box1">
            <i className="fas fa-stethoscope stethoscope-icon"></i>
            <h3>Pediatrics</h3>
            <p>The care of children of all ages.</p>
          </div>
        </div>

        <div className="row">
          <div className="box1">
            <i className="fas fa-stethoscope stethoscope-icon"></i>
            <h3>Psychiatry</h3>
            <p>Treats mental health disorders.</p>
          </div>
          <div className="box1">
            <i className="fas fa-stethoscope stethoscope-icon"></i>
            <h3>Orthodontics</h3>
            <p>Treats teeth and a bad bite.</p>
          </div>
          <div className="box1">
            <i className="fas fa-stethoscope stethoscope-icon"></i>
            <h3>Urology</h3>
            <p>Diseases of the urinary tract.</p>
          </div>
        </div>
      </div>
    </div>
  </main>
    );
  }
  
  export default Home;
  


  

