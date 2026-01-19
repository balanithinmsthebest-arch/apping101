import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Counter } from 'counterapi';

function App() {
  const [uniqueVisitors, setUniqueVisitors] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  const counter = new Counter({
    workspace: 'bn-app-counting',
    accessToken: 'ut_7ft86xAbuzuzoB2LBmGN1Q39jg1FxrhZWJkjCaWo',
  });

  useEffect(() => {
    async function fetchVisitors() {
      try {
        setLoading(true);
        setError(null);
        const result = await counter.get('unique-visits');
        setUniqueVisitors(result.value || 0);
      } catch (err) {
        console.error('Error fetching visitors:', err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchVisitors();
  }, []);

  const handleClick = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await counter.up('unique-visits');
      setUniqueVisitors(result.value);
      console.log(`Unique visitors after click: ${result.value}`);
    } catch (err) {
      console.error('Error incrementing visitor:', err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>Introducing Myself!</h1>

      <p className="read-the-docs">
        I am Bala Nithin M S, an Aerospace Engineering undergraduate at IIT Madras,
        passionate about pioneering research bridging Physics and Aerospace. I thrive
        at the intersection of scientific curiosity and practical innovation through
        coding, 3D design, and active leadership in campus technical clubs. This
        website was built as a project for IIT Madras&apos; W&amp;B Club, where I
        serve as Deputy Coordinator. A self-intro site just makes perfect sense,
        right? Let&apos;s see how far I can take it with everything I&apos;ve learned so far.
      </p>

      <div className="image-buttons">
        <button
          className="logo-btn"
          onMouseEnter={() => setActiveSection('education')}
        >
          <img src="/images/education.png" className="logo" alt="Education" />
        </button>

        <button
          className="logo-btn"
          onMouseEnter={() => setActiveSection('academics')}
        >
          <img src="/images/acad.png" className="logo" alt="Academics" />
        </button>

        <button
          className="logo-btn"
          onMouseEnter={() => setActiveSection('tech')}
        >
          <img src="/images/tech.png" className="logo" alt="Tech" />
        </button>

        <button
          className="logo-btn"
          onMouseEnter={() => setActiveSection('club')}
        >
          <img src="/images/club.png" className="logo" alt="Clubs" />
        </button>

        <button
          className="logo-btn"
          onMouseEnter={() => setActiveSection('interest')}
        >
          <img src="/images/interest.png" className="logo" alt="Interests" />
        </button>

        <button
          className="logo-btn"
          onMouseEnter={() => setActiveSection('contact')}
        >
          <img src="/images/contact-us.png" className="logo" alt="Contact" />
        </button>
      </div>

      <div
        className="content-sections"
        onMouseLeave={() => setActiveSection(null)}
      >
        <p
          className={
            activeSection === 'education' ? 'section visible' : 'section hidden'
          }
        >
          I was born and brought up in Coimbatore, Tamil Nadu, and I currently
          live in Chennai with my parents. I completed my schooling at The
          Camford International School (TCIS), where I developed a strong
          inclination towards the sciences and participated actively in
          academic pursuits.
        </p>

        <p
          className={
            activeSection === 'academics' ? 'section visible' : 'section hidden'
          }
        >
          Within aerospace, I have recently become particularly interested in
          fluid mechanics and aerodynamics, and I am keen on exploring these
          areas in greater depth through coursework and future research
          projects. During school, I secured a good state-level rank in the
          Biology Olympiad, which strengthened my interest in core science
          subjects and analytical problem-solving.
        </p>

        <p
          className={
            activeSection === 'tech' ? 'section visible' : 'section hidden'
          }
        >
          I have a reasonable command of C and Python and have recently
          started learning C++, along with experience in HTML and CSS and an
          ongoing effort to improve my JavaScript skills. I also work with CAD
          and 3D design tools such as Fusion 360 and Tinkercad, and I built a
          simple drone prototype in middle school, which first sparked my
          interest in engineering and making.
        </p>

        <p
          className={
            activeSection === 'club' ? 'section visible' : 'section hidden'
          }
        >
          I am an active member of several student communities at IIT Madras,
          including the WebOps and Blockchain Club at CFI, where students work
          on web development and blockchain-based software with real-world
          impact. I am also part of Horizon, the Physics and Astronomy
          society, the Mathematics Club, and the 3D Printing Club, all of
          which allow me to explore physics, mathematics, and prototyping in a
          collaborative environment.
        </p>

        <p
          className={
            activeSection === 'interest' ? 'section visible' : 'section hidden'
          }
        >
          Outside academics and technical work, I am an avid reader,
          especially of historical fiction and fantasy, and I am currently
          immersed in Sarah J. Maas&apos; Throne of Glass series. I also enjoy
          playing badminton and swimming, which help me maintain a balanced
          routine and unwind after intense academic and club activities.
        </p>

        <p
          className={
            activeSection === 'contact' ? 'section visible' : 'section hidden'
          }
        >
          Email:{' '}
          <a href="mailto:ae25b009@smail.iitm.ac.in">
            ae25b009@smail.iitm.ac.in
          </a>
          <br />
          Phone: ask me yourself
          <br />
          Instagram:{' '}
          <a href="https://www.instagram.com/balanithin.m.s?igsh=MWJlZWJweTcwZWk0Zg==">
            @BALANITHIN.M.S
          </a>
        </p>
      </div>

      <div className="card">
        <button onClick={handleClick} disabled={loading}>
          {loading
            ? 'Recording visit...'
            : `Unique visitors who clicked: ${uniqueVisitors}`}
        </button>
        {error && (
          <p style={{ color: 'red', fontSize: '14px' }}>Error: {error}</p>
        )}
      </div>

      <p className="read-the-docs">
        Hover over the icons to explore each section. Click the button to
        register as a unique visitor.
      </p>
    </>
  );
}

export default App;
