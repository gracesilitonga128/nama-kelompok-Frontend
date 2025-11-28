import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import Journey from './components/Journey'
import Articles from './components/Articles'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Profile from "./components/profil";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <Features />
            <Stats />
            <Journey />
            <Articles />
            <CTA />
            <Footer />
          </>
        } />
        <Route path="/profil" element={<Profile />} />
      </Routes>
    </Router>
  );  
}

export default App;
