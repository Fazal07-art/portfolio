import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Unable to connect to the server.");
    }
  };

  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="logo">FAZAL S</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div>
          <p className="hero-small">Hello, I'm</p>

          <h1>FAZAL S</h1>

          <h2>FULL STACK DEVELOPER</h2>

          <p>
            I am a passionate developer interested in building useful,
            responsive and user-friendly applications while continuously
            learning new technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects">View My Projects</a>
            <a href="#contact">Contact Me</a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          I am FAZAL S, a B.E. Computer Science and Engineering student at
          NIET. I am interested in software development and full-stack web
          development. I enjoy solving problems, learning new technologies,
          and building practical applications.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>My Skills</h2>

        <div className="skills-container">
          <div className="skill">Java</div>
          <div className="skill">C</div>
          <div className="skill">Python</div>
          <div className="skill">MongoDB</div>
          <div className="skill">VS Code</div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>My Projects</h2>

        <div className="projects-container">
          <div className="project-card">
            <h3>Bank Management System</h3>

            <p>
              A software application designed to manage basic banking
              operations and customer-related information efficiently.
            </p>

            <span>Java</span>
          </div>

          <div className="project-card">
            <h3>Student Management System</h3>

            <p>
              A management application designed to organize and maintain
              student information in a simple and efficient way.
            </p>

            <span>Python</span>
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <h2>Education</h2>

        <div className="education-card">
          <h3>B.E. Computer Science and Engineering</h3>
          <p>NIET</p>
          <p>4-Year Degree Program</p>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact Me</h2>

        <p>
          I'm open to opportunities, collaborations and interesting projects.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            required
          ></textarea>

          <button type="submit">Send Message</button>

          {status && <p className="form-status">{status}</p>}
        </form>

        <div className="contact-info">
          <p>Email: fazzz3856@gmail.com</p>

          <p>
            GitHub:{" "}
            <a
              href="https://github.com/Fazal07-art"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fazal07-art
            </a>
          </p>

          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/fazal-s-465bbb329/"
              target="_blank"
              rel="noopener noreferrer"
            >
              FAZAL S
            </a>
          </p>
        </div>
      </section>

      <footer>
        <p>© 2026 FAZAL S. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;