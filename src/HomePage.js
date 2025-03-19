import React from 'react';
import Navbar from './components/Navbar';
import './HomePage.css';
import yogaPoseImage  from './p1.png';
import yogaPoseImage2  from './p2.png';
import yogaPoseImage3  from './p3.png';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="homePage">
        <section className="homePage__intro">
          <h2>Welcome to Yoga Pose Detection and Correction</h2>
          <p>
            Yoga is a practice that combines physical postures, breathing exercises, and meditation to bring harmony to the mind and body. It promotes flexibility, strength, and mental clarity, helping to relieve stress and improve overall well-being. Below are some common yoga poses to get started on your journey to health and mindfulness.
          </p>
        </section>

        <section className="homePage__poses">
          <div className="pose">
            <img src={yogaPoseImage3} alt="Mountain Pose" />
            <h3>Mountain Pose (Tadasana)</h3>
            <p>
              A foundational pose that focuses on balance and grounding. It strengthens the legs, improves posture, and enhances body awareness.
            </p>
          </div>

          <div className="pose">
            <img src={yogaPoseImage} alt="Downward Dog" />
            <h3>Downward Dog (Adho Mukha Svanasana)</h3>
            <p>
              A calming pose that stretches the hamstrings, shoulders, and calves. It helps relieve stress, improves blood flow, and energizes the body.
            </p>
          </div>

          <div className="pose">
            <img src={yogaPoseImage2} alt="Warrior II" />
            <h3>Warrior II (Virabhadrasana II)</h3>
            <p>
              A powerful pose that strengthens the legs and core. Warrior II increases stamina, stability, and focus while stretching the hips and shoulders.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
