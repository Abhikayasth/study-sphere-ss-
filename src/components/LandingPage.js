// LandingPage.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import './LandingPage.css';
import Home_right from '../imgs/Home_right.jpg';
import { useInView } from 'react-intersection-observer';
import PopUpForm from './PopUpForm'; // import PopUpForm

function LandingPage() {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const [showModal, setShowModal] = useState(false); // state for showing the modal

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <div className="landing-page">
      <header>
        <Navbar />
      </header>
      <main>
        <section className="about-us">
          <div className="about-us-text">
            <h1>Overview</h1>
            
            <p>Our project fosters a user-friendly space for educators and learners. Teachers can upload diverse educational materials like videos, assignments, and tests. Students benefit from easy access to these resources, including instructional videos and performance analysis. Additionally, we provide a dynamic live coding environment for programmers, enabling code writing, testing, and saving for future use.</p>
            <button className="get-started" onClick={toggleModal}>Get Started</button>
          </div>
          <div className="about-us-image">
            <img src={Home_right} alt='' ></img>
          </div>
        </section>
        <section className="Problem_understanding">
          <h1>About the Website</h1>
          <p>Our website aims to streamline education by providing a comprehensive platform for teachers and students. Say goodbye to scattered resources and repetitive explanations. With our integrated system, teachers can upload lectures and assignments while students engage with materials, ask questions, and receive personalized feedback, all in one convenient space.</p>
        </section>
        <section className="How_to_use">
          <h1>How to Use website ?</h1>
          <p>Our website aims to streamline education by providing a comprehensive platform for teachers and students. Say goodbye to scattered resources and repetitive explanations. With our integrated system, teachers can upload lectures and assignments while students engage with materials, ask questions, and receive personalized feedback, all in one convenient space.</p>
        </section>
      </main>
      <footer className={`footer ${inView ? 'visible' : ''}`} ref={ref}>
        <p>© 2024 Our Education Platform</p>
      </footer>
      {showModal && <PopUpForm onClose={toggleModal} />}
    </div>
  );
}

export default LandingPage;
