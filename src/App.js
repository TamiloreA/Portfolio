import styles from './App.module.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResumeIntro from './components/ResumeIntro';
import TimelineSection from './components/TimelineSection';



function App() {
  return (
    <>
      <Navbar />
      <section id="resume">
        <ResumeIntro />
      </section>

      {/* Timeline Section */}
      <TimelineSection />
    </>
  );
}

export default App;
