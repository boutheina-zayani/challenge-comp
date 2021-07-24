
import './style.css';


function AboutMe() {
  return (
    <section id="about-me">
      <h1>
        Hello, my name is
        <span className="rotate text-important">John doe</span>,<br />
        and i make horrible websites.
      </h1>
      <img class="avatar" src='./images/John-Doe.jpg' alt="jhon-doe" />
    </section>
  );
}

export default AboutMe;
