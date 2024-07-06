import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Error from './pages/Error';
import PatientAppointments from './pages/Patients/Appointment';
import PatientProfile from './pages/Patients/Profile';
import EditProfilePat from './pages/Patients/EditProfile';
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
import DoctorAppointments from './pages/Doctors/Appointments';
import ProfileDoc from './pages/Doctors/ProfileDoc';
import PatProfile from './pages/Doctors/PatProfile';
import PatientsList from './pages/Doctors/PatientsList';
import ContactUs from './pages/ContactUs';
import AdminDashboard from './pages/Admin/AdminDashboard';
import Messages from './pages/Admin/Messages';
import UsersList from './pages/Admin/UsersList';
import Response from './pages/Admin/Response';
import AdminLogIn from './pages/Admin/SignIn';
import PatHome from './pages/Patients/home';
import DocDashboard from './pages/Doctors/dashboard';
import ListDoctors from './pages/Admin/DoctorsList';
import NewDoctors from './pages/Admin/NewDoctors';
import SearchResults from './pages/Patients/Results';


function App() {
  return (
    <BrowserRouter>
       <div className="app-container">
        <Header />
        <div className="thecontent">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/home" element={<Home />}/>
              <Route path="/patient/appointments" element={<PatientAppointments />}/>
              <Route path="/patient/profile" element={<PatientProfile />}/>
              <Route path="/patient/editprofile" element={<EditProfilePat />}/>
              <Route path="/patient/newapp" element={<PatientNewAppointment />}/>
              <Route path="/patient/results" element={<SearchResults/>}/>
              <Route path="/patient/docprofile/:id" element={<DocProfile />}/>
              <Route path='/patient/home' element={<PatHome/>}/>
              <Route path="/patient/booking/:id" element={<Booking/>}/> 
              <Route path="/patient/doclist" element={<DocList/>}/> 
              
              <Route path="/patient/signup" element={<PatientSignUp/>}/>
              <Route path="/doctor/signup" element={<DoctorSignUp/>}/>
              <Route path="/login" element={<LogIn />}/>
              <Route path="/doctor/login" element={<DoctorLogIn/>}/>
              <Route path="/doctor/dashboard" element={<DocDashboard/>}/>
              <Route path="/doctor/appointments" element={<DoctorAppointments/>}/>
              <Route path='/doctor/patientslist' element={<PatientsList/>}/>
              <Route path="/doctor/profiledoc" element={<ProfileDoc/>}/>
              <Route path="/doctor/patientprofile/:id" element={<PatProfile/>}/>
              <Route path='/contactus' element={<ContactUs/>}/>
              <Route path="/admin/login" element={<AdminLogIn/>}/>
              <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
              <Route path='/admin/messages' element={<Messages/>}/>
              <Route path='/admin/response' element={<Response/>}/>
              <Route path='/admin/patientslist' element={<UsersList/>}/>
              <Route path='/admin/doctorslist' element={<ListDoctors/>}/>
              <Route path='/admin/newdoctors' element={<NewDoctors/>}/>
              <Route path="*" element={<Error />}/>
            </Routes>
            </div>   
        <Footer />
        </div>
      </BrowserRouter>
    
   
  );
}

export default App;
