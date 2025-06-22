import { BrowserRouter, Routes } from 'react-router'
import './App.css'
import { SignUp } from './components/Auth/SignUp'
import { Login } from './components/Auth/Login'
import Home from './components/Home'
import Courses from './components/Courses'
import Store from './components/Store'
import AboutUs from './components/AboutUs'
import { Navbar } from './components/Navbar'
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import { ForgetPasswordForm } from './components/Auth/ForgetPasswordForm'
import { Footer } from './components/Footer'
import Services from './components/Services'
import ChatAI from './components/ChatAI'
import NotFound from './components/NotFound'
import Dashboard from './components/Dashboard'
import Trainers from './components/Trainers'
import TrainerProfile from './components/TrainerProfile'
import Payment from './components/Payment'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="store" element={<Store />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="services" element={<Services />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPasswordForm />} />
        <Route path="/chat" element={<ChatAI />} />
        {/* <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/trainer/:id" element={<TrainerProfile />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
