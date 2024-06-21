import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Error from './pages/Error';
import PatientAppointments from './pages/Patients/Appointment';
import PatientProfile from './pages/Patients/Profile';
import PatientNewAppointment from './pages/Patients/NewApp';
import PatientSignUp from './pages/Patients/SignUp';
import DoctorSignUp from './pages/Doctors/Signup'
import LogIn from './pages/Patients/SignIn';
import DoctorLogIn from './pages/Doctors/SignIn'
import Header from './components/Header';
import Footer from './components/Footer';
import DocProfile from './pages/Patients/Doctors/DocProfile';
import Booking from './pages/Patients/Doctors/Booking';
import DocList from './pages/Patients/Doctors/DocList'


function App() {
  return (
    <BrowserRouter>
        <Header />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/home" element={<Home />}/>
              <Route path="/patient/appointments" element={<PatientAppointments />}/>
              <Route path="/patient/profile" element={<PatientProfile />}/>
              <Route path="/patient/newapp" element={<PatientNewAppointment />}/>
              <Route path="/patient/docprofile" element={<DocProfile />}/>
              
              <Route path="/patient/booking/:id" element={<Booking/>}/> 
              <Route path="/patient/doclist" element={<DocList/>}/> 
              
              <Route path="/patient/signup" element={<PatientSignUp/>}/>
              <Route path="/doctor/signup" element={<DoctorSignUp/>}/>
              <Route path="/login" element={<LogIn />}/>
              <Route path="/doctor/login" element={<DoctorLogIn/>}/>
              <Route path="*" element={<Error />}/>
            </Routes>
        <Footer />
      </BrowserRouter>
    
   
  );
}

export default App;
