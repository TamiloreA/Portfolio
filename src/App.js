import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResumeIntro from './components/ResumeIntro';
import TimelineSection from './components/TimelineSection';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';



function HomePage() {
  return (
    <>
      <Navbar />
      <section id="resume">
        <ResumeIntro />
      </section>
      <TimelineSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;