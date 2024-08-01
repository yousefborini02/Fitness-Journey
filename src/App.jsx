import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Plans from "./components/Plans";
import Footer from "./components/Footer";
import BarLoader from "./components/BarLoader";
import GymsSlider from "./components/GymsSlider";
import GetStarted from "./components/GetStarted";
import GymCatalog from "./components/GymCatalog";
import GymDetails from "./components/GymDetails";
import ContactUs from "./components/ContactUs";
import PaymentComponent from "./components/PaymentComponent";
import GymDashboard from "./components/GymDashboard";
import Login from "./components/Login";
import SignUp from "./components/Signup";
// import AboutUs from "./components/AboutUs";
// import Trainers from "./components/Trainers";
// import Contact from "./components/Contact";


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <BarLoader />
      </div>
    );
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <main>
                  <section id="home" >
                    <Home />
                  </section>

                  <section id="about">
                    <About />
                  </section>

                  <section id="gymslider">
                    <GymsSlider />
                  </section>

                  <section id="plans">
                    <Plans />
                  </section>

                  <section id="getstarted">
                    <GetStarted />
                  </section>

                  {/* <section id="trainers">
                    <Trainers />
                  </section>

                  <section id="contact">
                    <Contact />
                  </section> */}
                </main>
                <Footer />
              </>
            }
          />
          <Route path="/gymcatalog" element={<GymCatalog />} />
          <Route path="/gymdetails" element={<GymDetails />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/payment" element={<PaymentComponent />} />
          <Route path="/gymdashboard" element={<GymDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
