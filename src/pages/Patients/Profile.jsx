import '../../css/Profile.css';
import Image from'../../images/téléchargement.png';




function Profile() {
  return (
    <div>
      
      <main>
        <div className="container">
          <div className="sectionp">
            <div className="profile">
              <img src={Image} alt="Doctor" />
              <h2>John</h2>
              <div className="rating">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9734;</span>
              </div>
              <p>Points: 1000</p>
            </div>

            <div className="access-info">
              <h2>Contact Information</h2>
              <p>Phone: +1234567890</p>
              <p>Email: doctor@example.com</p>
            </div>
          </div>
          <div className="sectionp2">
            <div className="description">
              <h2>Patient Informations</h2>
            </div>

            <div className="details">
              <div className="question">
                <p>First name</p>
                <p>Last name</p>
                <p>Age</p>
                <p>Gender</p>
                <p>Cin</p>
                <p>Blood type</p>
                <p>Allergies</p>
              </div>
              <div className="answer">
                <p>John</p>
                <p>Smith</p>
                <p>38</p>
                <p>Male</p>
                <p>L235798</p>
                <p>O+</p>
                <p>Dust,Avocado</p>
              </div>
              <div className="space"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;