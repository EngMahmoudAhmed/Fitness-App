import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { SignUp } from './components/Auth/SignUp';
import { Login } from './components/Auth/Login';
import Home from './components/Home';
import Courses from './components/Courses';
import Store from './components/Store';
import AboutUs from './components/AboutUs';
import { Navbar } from './components/Navbar';
import { ForgetPasswordForm } from './components/Auth/ForgetPasswordForm';
import { Footer } from './components/Footer';
import Services from './components/Services';
import Profile from './components/Profile';
import ChatAI from './components/ChatAI';
import PrivateRoute from './components/PrivateRoute';
import AdminDashboard from './components/Dashboard/Dashboard';
import Trainers from './components/Trainers';
import TrainerProfile from './components/TrainerProfile';
import NotFound from './components/NotFound';
import Payment from './components/Payment';


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
            </PrivateRoute>
          }
        />

        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/store" element={<Store />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPasswordForm />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/trainer/:id" element={<TrainerProfile />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<NotFound />} />

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
