import { BrowserRouter, Routes } from 'react-router'
import './App.css'
import PrivateRoute from './components/PrivateRoute'
// import { AdminDashboard } from './components/AdminDashboard'
import { SignUp } from './components/Auth/SignUp'
import { Login } from './components/Auth/Login'
import Home from './components/Home'
import Courses from './components/Courses'
import Store from './components/Store'
import AboutUs from './components/AboutUs'
import { Navbar } from './components/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ForgetPasswordForm } from './components/Auth/ForgetPasswordForm'
import { Footer } from './components/Footer'
import Services from './components/Services'
import Profile from './components/Profile'
import ChatAI from './components/ChatAI'
// import { AdminRoute } from './components/AdminRoute'
import Trainers from './components/Trainers'
import NotFound from './components/NotFound'
import TrainerProfile from './components/TrainerProfile'
import Payment from './components/Payment'
import AdminDashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/admin/*"
          element={
            <PrivateRoute requireAdmin>
              <AdminDashboard />
              </PrivateRoute >
          }
        />

        <Route path="/" element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="store" element={<Store />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="services" element={<Services />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPasswordForm />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="/chat" element={<ChatAI />} />
        <Route path="*" element={<NotFound />} />
        <Route path="trainer/:id" element={<TrainerProfile />} />
        <Route path="payment" element={<Payment />} />
        





        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <ChatAI />
            </PrivateRoute>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
