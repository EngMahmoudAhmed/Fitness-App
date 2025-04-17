import { BrowserRouter, Routes } from 'react-router'
import './App.css'
import { SignUp } from './components/Auth/SignUp'
import { Login } from './components/Auth/Login'
import Home from './components/Home'
import { Navbar } from './components/Navbar'
import { BrowserRouter as Router, Route,  } from 'react-router-dom'
import { ForgetPasswordForm } from './components/Auth/ForgetPasswordForm'
import { Footer } from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/forget-password" element={<ForgetPasswordForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
