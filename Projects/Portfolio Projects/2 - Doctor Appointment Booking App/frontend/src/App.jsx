import { Route, Routes } from "react-router-dom"
import { LandingPage, Appointment, About, Contact, Profile, MyAppointments, Login, Doctors } from "./pages/paths"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <div>
        <div className="mx-4 sm:mx-[10%]">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/doctors/:specialty" element={<Doctors />} />
            <Route path="/my-appointments" element={<MyAppointments />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/appointment/:docId" element={<Appointment />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App

