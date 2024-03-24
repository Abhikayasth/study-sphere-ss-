import React, { useState } from 'react';
import './AdminPanel.css';
import { useInView } from 'react-intersection-observer';
import SubjectUploadForm from './SubjectUploadForm'; // import SubjectUploadForm

function LandingPage() {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const [showModal, setShowModal] = useState(false); // state for showing the modal
  const [activeTab, setActiveTab] = useState('Profile'); // state for the active tab

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <div className="landing-page">
      <div className='navbar'>
        <nav>
          <ul>
            <li>Teacher Deshboard</li>
          </ul>
        </nav>
      </div>
      <main>
        {activeTab === 'Subject Details' && (
          <section className="about-us">
            <div className="about-us-text">
              <h1>Subject Details</h1>
              <p>subject detail</p>
              <button className="get-started" onClick={toggleModal}>Get Started</button>
            </div>
          </section>
        )}
      <section className="about-us">
          <div className="about-us-text">
            <h1>Profile</h1>
            <p>Profile</p>
            <button className="get-started" onClick={toggleModal}>Get Started</button>
          </div>
        </section>
        <section className="about-us">
          <div className="about-us-text">
            <h1>Subject Details</h1>
            <p>subject detail</p>
            <button className="get-started" onClick={toggleModal}>Get Started</button>
          </div>
        </section>
        <section className="about-us">
          <div className="about-us-text">
            <h1>Quizz/Test Or Exam</h1>
            <p>subject detail</p>
            <button className="get-started" onClick={toggleModal}>Get Started</button>
          </div>
        </section>
        <section className="about-us">
          <div className="about-us-text">
            <h1>Coding Problems Or Live Coding</h1>
            <p>subject detail</p>
            <button className="get-started" onClick={toggleModal}>Get Started</button>
          </div>
        </section>
      </main>
       {showModal && <SubjectUploadForm onClose={toggleModal} />}
      <footer className={`footer ${inView ? 'visible' : ''}`} ref={ref}>
        <p>© 2024 Our Education Platform</p>
      </footer>
      {showModal && <PopUpForm onClose={toggleModal} />}
    </div>
  );
}

export default LandingPage;
